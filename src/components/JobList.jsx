import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, Spinner } from "react-bootstrap";

// Mock fetch function (replace with actual API call)
const fetchJobs = async () => {
  const response = await fetch("https://api.example.com/jobs"); // Replace with your backend URL
  if (!response.ok) throw new Error("Failed to fetch jobs");
  return response.json();
};

const JobList = () => {
  const {
    data: jobs,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  if (isLoading)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );

  if (isError)
    return (
      <div className="text-danger text-center mt-5">Error: {error.message}</div>
    );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Job Listings</h2>
      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-4 mb-4" key={job.id}>
            <Card>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {job.company}
                </Card.Subtitle>
                <Card.Text>
                  Location: {job.location} <br />
                  Type: {job.type}
                </Card.Text>
                <a href={`/jobs/${job.id}`} className="btn btn-primary">
                  View Details
                </a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
