export const dashboardData = {
  profile: {
    name: "Developer",
    phase: "SYSTEM ARCHITECT",
  },

  commitBars: [
    { height: 20, active: false },
    { height: 45, active: false },
    { height: 30, active: false },
    { height: 80, active: true },
    { height: 60, active: false },
    { height: 40, active: false },
    { height: 25, active: false },
    { height: 90, active: false },
    { height: 55, active: true },
    { height: 70, active: false },
    { height: 85, active: false },
    { height: 65, active: false },
    { height: 40, active: false },
    { height: 100, active: true },
  ],

  streak: {
    days: 12,
    consistency: 94,
  },

  goals: [
    {
      title: "Deep Learning Mastery",
      progress: "4/10 Units",
    },

    {
      title: "Open Source Contributions",
      progress: "12 PRs",
    },

    {
      title: "Rust Systems Design",
      progress: "IN PROGRESS",
    },
  ],

  coach: {
    message:
      "Optimization is not just about code performance, but developer ergonomics. Shiftyour focus to automated testing cycles this week to reduce cognitive load.",
  },

  sprint: [40, 80, 50, 90, 60, 20, 30],

  activity: [
    {
      entity: "api-gateway",
      action: "Pushed 4 commits",
      time: "14m ago",
      status: "SUCCESS",
    },

    {
      entity: "learning-module",
      action: "Completed Vector Database",
      time: "2h ago",
      status: "FINISHED",
    },

    {
      entity: "opensource-ui",
      action: "Merged PR #142",
      time: "5h ago",
      status: "MERGED",
    },
  ],
};
