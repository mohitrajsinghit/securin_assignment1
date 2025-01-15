const express = require('express');
const router = express.Router();
const axios = require('axios');
const { MongoClient } = require('mongodb');


router.get('/', async (req, res) => {
    const {
        resultsPerPage = 10,
        startIndex = 0,
        sortBy = 'published',
        sortOrder = 'desc',
        year,
        score,
        modifiedDays
    } = req.query;

    try {
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();

        const db = client.db('crud');
        const collection = db.collection('cves');

        const sortDirection = sortOrder === 'asc' ? 1 : -1;

        // Build query
        const query = {};
        if (year) {
            query.cveId = { $regex: year, $options: 'i' };
        }
        if (score) {
            query['metrics.cvssMetricV2.cvssData.baseScore'] = Number(score);
        }
        if (modifiedDays) {
            const dateThreshold = new Date();
            dateThreshold.setDate(dateThreshold.getDate() - Number(modifiedDays));
            query.$expr = {
                $gte: [
                    {
                        $dateFromString: {
                            dateString: "$lastModified",
                            format: "%Y-%m-%dT%H:%M:%S.%L"
                        }
                    },
                    dateThreshold
                ]
            };
        }
        // ...existing code...
        console.log(query);


        const data = await collection
            .find(query)
            .sort({ [sortBy]: sortDirection })
            .skip(Number(startIndex))
            .limit(Number(resultsPerPage))
            .toArray();

        const totalResults = await collection.countDocuments(query);

        res.json({ totalResults, vulnerabilities: data });
    } catch (error) {
        console.error('Error fetching CVE data:', error.message);
        res.status(500).json({ message: 'Error fetching CVE data' });
    }
});







// Endpoint for a specific CVE
router.get('/:cveId', async (req, res) => {
    const { cveId } = req.params;

    try {
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();

        const db = client.db('crud');
        const collection = db.collection('cves');
        const data = await collection.findOne({ id: cveId });
        res.json(data);
    } catch (error) {
        console.error('Error fetching specific CVE:', error.message);
        res.status(500).json({ message: 'Error fetching specific CVE' });
    }
});


router.get("/year/:year", async (req, res) => {
    const { year } = req.params;

    try {
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();

        const db = client.db('crud');
        const collection = db.collection('cves');
        const data = await collection.find({ published: { $regex: year, $options: 'i' } }).toArray()
        res.json(data)

    } catch (error) {
        console.error('Error fetching specific CVE:', error.message);
        res.status(500).json({ message: 'Error fetching specific year' });
    }


})

router.get('/score/:score', async (req, res) => {
    const { score } = req.params; // Extract the score from the URL parameter

    try {
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();

        const db = client.db('crud');
        const collection = db.collection('cves');

        // Find CVEs matching the provided score
        const data = await collection.find({ score: Number(score) }).toArray();

        res.json({
            totalResults: data.length,
            vulnerabilities: data,
        });
    } catch (error) {
        console.error('Error fetching CVE data by score:', error.message);
        res.status(500).json({ message: 'Error fetching CVE data by score' });
    }
});


router.get("/modified/:days", async (req, res) => {
    const { days } = req.params;

    try {
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();

        const db = client.db('crud');
        const collection = db.collection('cves');

        const dateThreshold = new Date();
        dateThreshold.setDate(dateThreshold.getDate() - days);

        const query = {
            lastModified: { $gte: dateThreshold.toISOString() }
        };

        const data = await collection.find(query).toArray();
        res.json(data)

    } catch (error) {
        console.error('Error fetching specific CVE:', error.message);
        res.status(500).json({ message: 'Error fetching specific year' });
    }
})

module.exports = router;