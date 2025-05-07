CareerHive App
CareerHive is a job application tracking and management platform. It allows users to browse job listings, apply for jobs, and track their applications. The app is built using React, Zustand for state management, and React Router for navigation.

Features
Job Listings: View a list of available jobs with details such as title, company, location, and type.
Job Applications: Apply for jobs and track your applications.
Authentication: Login functionality to access protected routes like the dashboard and applications.
State Management: Uses Zustand for managing job data, filters, and application state.
Dynamic Routing: Protected routes for authenticated users and dynamic job details routing.
Installation
Clone the repository:

Install dependencies:

Start the development server:

Open the app in your browser:

File Structure
State Management
The app uses Zustand for state management. The jobStore.js file manages the following:

Jobs: Preloaded mock job data.
Filters: Keyword, location, and type filters for job listings.
Applications: Tracks jobs the user has applied for.
Routes
Route	Description	Access
/	Home page	Public
/login	Login page	Public
/dashboard	Dashboard for authenticated users	Protected
/apply/:id	Job application form for a specific job	Protected
Mock Data
The app uses mock job data defined in jobStore.js:

How to Use
Login:

Use the login page to authenticate. Mock authentication is implemented using localStorage.
Browse Jobs:

Navigate to the job listings page to view available jobs.
Apply for Jobs:

Click on a job to view its details and apply using the application form.
Track Applications:

View your applied jobs in the dashboard.
Technologies Used
React: Frontend framework.
Zustand: State management.
React Router: Navigation and routing.
Bootstrap: UI components and styling.
