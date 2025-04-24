import { create } from "zustand";

const useJobStore = create((set) => ({
  // Filters
  filters: {
    keyword: "",
    location: "",
    type: "",
  },
  setFilters: (filters) => set({ filters }),

  // Job applications
  appliedJobs: [],
  applyToJob: (job) =>
    set((state) => {
      // Prevent duplicate applications
      const alreadyApplied = state.appliedJobs.find((j) => j.id === job.id);
      if (alreadyApplied) return state;
      return { appliedJobs: [...state.appliedJobs, job] };
    }),
  removeApplication: (id) =>
    set((state) => ({
      appliedJobs: state.appliedJobs.filter((job) => job.id !== id),
    })),

  // Optional: Local job list (if not using backend yet)
  jobs: [], // Could preload mock jobs here
  setJobs: (jobs) => set({ jobs }),
}));

export default useJobStore;
