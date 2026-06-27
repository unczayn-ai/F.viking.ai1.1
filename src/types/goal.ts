export interface Goal {
  _id: string;
  title: string;
  description: string;
  priority: string;
  progress: number;
  deadline: string;
  milestones: {
    title: string;
    completed: boolean;
    completedAt?: string;
  }[];
  activity: {
    type: string;
    message: string;
    createdAt: string;
  }[];
  velocity: string;
  streak: string;
}
