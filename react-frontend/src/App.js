import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [cveList, setCveList] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const fetchCveData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `http://localhost:5000/api/cves?resultsPerPage=${resultsPerPage}&startIndex=${currentPage *
                    resultsPerPage}`
            );
            if (!response.ok) {
                throw new Error(`API call failed with status ${response.status}`);
            }
            const data = await response.json();
            setCveList(data.vulnerabilities || []);
            setTotalRecords(data.totalResults || 0);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCveData();
    }, [resultsPerPage, currentPage]);

    const handleRowClick = (cveId) => {
        window.location.href = `/cves/${cveId}`;
    };

    return (
        <div className="container mt-4 cve-container">
            <h1 className="text-center mb-4 cve-title">CVE List</h1>

            <div className="row mb-3 align-items-center">
                <div className="col-md-6 total-records">
                    <strong>Total Records:</strong> {totalRecords}
                </div>
                <div className="col-md-6 text-end">
                    <label className="form-label results-label">
                        Results Per Page:
                        <select
                            className="form-select results-select"
                            value={resultsPerPage}
                            onChange={(e) => setResultsPerPage(Number(e.target.value))}
                        >
                            <option value={10}>10</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </label>
                </div>
            </div>

            {isLoading ? (
                <div className="text-center loader">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : error ? (
                <div className="alert alert-danger" role="alert">
                    Error: {error}
                </div>
            ) : cveList.length > 0 ? (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover cve-table">
                        <thead className="table-dark">
                            <tr>
                                <th>CVE ID</th>
                                <th>IDENTIFIER</th>
                                <th>PUBLISHED DATE</th>
                                <th>LAST MODIFIED DATE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cveList.map((cve) => (
                                <tr
                                    key={cve.id}
                                    onClick={() => handleRowClick(cve.id)}
                                    className="cve-row"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td>{cve.id}</td>
                                    <td>{cve.descriptions[0].value}</td>
                                    <td>{new Date(cve.published).toLocaleDateString()}</td>
                                    <td>{new Date(cve.lastModified).toLocaleDateString()}</td>
                                    <td>{cve.vulnStatus || 'Unknown'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="alert alert-warning no-data" role="alert">
                    No data available...
                </div>
            )}
            <div className="d-flex justify-content-between mt-3 pagination-buttons">
                <button
                    className="btn btn-primary prev-button"
                    disabled={currentPage === 0}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                    Previous
                </button>
                <button
                    className="btn btn-primary next-button"
                    disabled={(currentPage + 1) * resultsPerPage >= totalRecords}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default App;
