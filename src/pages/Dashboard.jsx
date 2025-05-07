import React from "react";
import { Card, Button } from "react-bootstrap";
import useJobStore from "../store/jobStore";

const Dashboard = () => {
  const jobs = useJobStore((state) => state.jobs);
  const applyToJob = useJobStore((state) => state.applyToJob);

  const handleApply = (job) => {
    applyToJob(job);
    alert(`You have applied for the job: ${job.title}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Job Dashboard</h2>
      {jobs.length === 0 ? (
        <p>No jobs available. Please check back later.</p>
      ) : (
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
                  <Button
                    variant="primary"
                    onClick={() => handleApply(job)}
                    disabled={useJobStore
                      .getState()
                      .appliedJobs.some(
                        (appliedJob) => appliedJob.id === job.id
                      )}
                  >
                    {useJobStore
                      .getState()
                      .appliedJobs.some(
                        (appliedJob) => appliedJob.id === job.id
                      )
                      ? "Already Applied"
                      : "Apply"}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
