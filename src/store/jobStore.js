import { create } from "zustand";
import { persist } from "zustand/middleware";

const mockJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-Time",
    description:
      "Develop and maintain web applications using modern frameworks.",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "Abuja",
    type: "Part-Time",
    description:
      "Lead product development and coordinate with cross-functional teams.",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataWorks",
    location: "Enugu",
    type: "Contract",
    description: "Analyze large datasets to extract meaningful insights.",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "Ikeja",
    type: "Full-Time",
    description: "Design user-friendly interfaces and improve user experience.",
  },
];

const useJobStore = create(
  persist(
    (set, get) => ({
      // Filters
      filters: {
        keyword: "",
        location: "",
        type: "",
      },
      setFilters: (filters) => set({ filters }),

      // Job applications
      appliedJobs: [],
      applyToJob: (job) => {
        const alreadyApplied = get().appliedJobs.find((j) => j.id === job.id);
        if (alreadyApplied) {
          return { error: "You have already applied for this job." };
        }
        set((state) => ({
          appliedJobs: [...state.appliedJobs, job],
          error: null,
        }));
      },
      removeApplication: (id) =>
        set((state) => ({
          appliedJobs: state.appliedJobs.filter((job) => job.id !== id),
        })),

      // Local job list (preloaded with mock jobs)
      jobs: [...mockJobs], // Preload mock jobs here
      setJobs: (jobs) => set({ jobs }),

      // Filtered jobs
      getFilteredJobs: () => {
        const { keyword, location, type } = get().filters;
        return get().jobs.filter((job) => {
          return (
            (!keyword ||
              job.title.toLowerCase().includes(keyword.toLowerCase())) &&
            (!location ||
              job.location.toLowerCase().includes(location.toLowerCase())) &&
            (!type || job.type.toLowerCase() === type.toLowerCase())
          );
        });
      },
    }),
    {
      name: "job-store", // Key for localStorage
    }
  )
);

export default useJobStore;
