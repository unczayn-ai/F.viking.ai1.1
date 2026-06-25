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
  velocity: string;
  streak: string;
}
