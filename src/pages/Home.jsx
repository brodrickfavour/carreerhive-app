import React from "react";
import FilterPanel from "../components/FilterPanel";
import JobList from "../components/JobList";
import ApplicationTracker from "../components/ApplicationTracker";

const Home = () => {
  return (
    <div>
      <header className="bg-primary text-white text-center py-4">
        <h1>CareerHive</h1>
        <p>Find your dream job and track your applications</p>
      </header>

      <FilterPanel />
      <JobList />
      <ApplicationTracker />
    </div>
  );
};

export default Home;
