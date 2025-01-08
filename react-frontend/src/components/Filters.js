import React from 'react';

const Filters = ({ filters, onFiltersChange }) => {
  const handleChange = (e) => {
    onFiltersChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filters">
      <input
        type="text"
        name="year"
        placeholder="Year (e.g., 2023)"
        value={filters.year || ''}
        onChange={handleChange}
      />
      <input
        type="number"
        name="score"
        placeholder="Score"
        value={filters.score || ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filters;
