import React from "react";
import useJobStore from "../store/jobStore";
import { Card, Button } from "react-bootstrap";

const ApplicationTracker = () => {
  const appliedJobs = useJobStore((state) => state.appliedJobs);
  const removeApplication = useJobStore((state) => state.removeApplication);

  if (appliedJobs.length === 0) {
    return <div className="container mt-4">No applications yet.</div>;
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Application Tracker</h3>
      <div className="row">
        {appliedJobs.map((job) => (
          <div className="col-md-4 mb-3" key={job.id}>
            <Card>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {job.company}
                </Card.Subtitle>
                <Card.Text>
                  {job.location} - {job.type}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => removeApplication(job.id)}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationTracker;
