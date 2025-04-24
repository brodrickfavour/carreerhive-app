import React, { useState } from "react";
import useJobStore from "../store/jobStore";

const FilterPanel = () => {
  const setFilters = useJobStore((state) => state.setFilters);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleFilter = () => {
    setFilters({ keyword, location, type });
  };

  const resetFilters = () => {
    setKeyword("");
    setLocation("");
    setType("");
    setFilters({ keyword: "", location: "", type: "" });
  };

  return (
    <div className="container my-4">
      <h4>Filter Jobs</h4>
      <div className="row g-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="col-12 mt-2">
          <button className="btn btn-primary me-2" onClick={handleFilter}>
            Apply Filters
          </button>
          <button className="btn btn-secondary" onClick={resetFilters}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
