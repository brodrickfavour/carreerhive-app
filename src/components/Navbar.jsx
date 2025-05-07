import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import useJobStore from "../store/jobStore";

const AppNavbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("user");
  const appliedJobsCount = useJobStore((state) => state.appliedJobs.length);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          CareerHive
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {isAuthenticated && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
            {isAuthenticated && (
              <Nav.Link as={Link} to="/applications">
                Applications <Badge bg="secondary">{appliedJobsCount}</Badge>
              </Nav.Link>
            )}
            {!isAuthenticated && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
          {isAuthenticated && (
            <Button variant="outline-danger" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default AppNavbar;
