export const coachData = {
  status: "ONLINE",
  messages: [
    {
      role: "coach",
      text: "Your development velocity is increasing. I detect strong consistency in Rust and system design tasks.",
    },

    {
      role: "user",
      text: "I want to improve my backend architecture skills.",
    },

    {
      role: "coach",
      text: "Focus next on distributed systems, API design, and database optimization.",
    },

    {
      role: "user",
      text: "Break down the authentication module into specific technical sub-tasks.",
    },

    {
      role: "coach",
      text: "Initiating breakdown for auth-service. I recommend prioritizing the JWT implementation to unblock the frontend team.",
    },

    {
      role: "coach",
      text: "analyzing dependencies...",
    },
  ],

  recommendations: [
    "Complete Rust async patterns",
    "Build production API gateway",
    "Study distributed caching",
  ],

  goalsBreakdown: [
    {
      id: 1,
      title: "auth_mudule",
      progress: 49,
      tasks: [
        { name: "Define-scheme", completed: true },
        { name: "JWT Implementation", completed: false },
        { name: "Redis caching layer", completed: false },
      ],
    },

    {
      id: 2,
      title: "DATA_PERSISTENCE",
      progress: 0,
      tasks: [
        { name: "Define DSA", completed: false },
        { name: "managing that data efficiently", completed: false },
        { name: "writing permanent storage", completed: false },
      ],
    },
  ],
};
