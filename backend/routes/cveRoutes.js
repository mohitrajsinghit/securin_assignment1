const express = require('express');
const router = express.Router();
const axios = require('axios');
const {MongoClient} = require('mongodb');

router.get('/', async (req, res) => {
    const { resultsPerPage = 10, startIndex = 0, sortBy = 'publishedDate', sortOrder = 'desc' } = req.query;

    try {
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();

        const db = client.db('crud');
        const collection = db.collection('cves');
        // console.log(typeof(startIndex));
        const data = await collection.find({}).skip(Number(startIndex)).limit(Number(resultsPerPage)).toArray()
        res.json({totalResults:  await collection.countDocuments(), vulnerabilities: data});
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

module.exports = router;