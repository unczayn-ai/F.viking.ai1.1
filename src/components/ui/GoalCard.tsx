import Card from "./Card";
import Badge from "./Badge";
import ProgressBar from "./ProgressBar";
import { Bot } from "lucide-react";

interface GoalProps {
  title: string;
  description: string;
  priority: string;
  progress: number;
  deadline: string;
  milestones: string;
  velocity: string;
  streak: string;
}

export default function GoalCard({
  title,
  description,
  priority,
  progress,
  deadline,
  milestones,
  velocity,
  streak,
}: GoalProps) {
  return (
    <Card>
      <div className="flex justify-between gap-4">
        <div>
          <Badge>{priority}</Badge>
          <h2 className="text-2xl font-bold mt-3">{title}</h2>
          <p className="text-neutral-400 mt-2">{description}</p>
        </div>

        <button className="flex items-center gap-2 h-3 bg-neutral-700 border border-neutral-700 text-xs px-4 py-6 tracking-widest hover:bg-white hover:text-black transition">
          <Bot size={18} />
          AI BREAKDOWN
        </button>
      </div>

      <div className="mt-8">
        <div className="flex justify-between text-xs mb-3">
          <span>Progress: {progress}%</span>
          <span>Deadline: {deadline}</span>
        </div>
        <ProgressBar value={progress} />
      </div>

      <div className="grid grid-cols-3 border-t border-neutral-800 mt-6 pt-5 text-sm">
        <div>
          <p className="text-neutral-500 text-xs">MILESTONES</p>
          <p>{milestones}</p>
        </div>

        <div>
          <p className="text-neutral-500 text-xs">VELOCITY</p>
          <p>{velocity}</p>
        </div>

        <div>
          <p className="text-neutral-500 text-xs">STREAK</p>
          <p>{streak}</p>
        </div>
      </div>
    </Card>
  );
}
