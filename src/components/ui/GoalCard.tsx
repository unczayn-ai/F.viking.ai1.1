import Card from "./Card";
import Badge from "./Badge";
import ProgressBar from "./ProgressBar";
import { Bot } from "lucide-react";
import { Link } from "react-router-dom";

interface GoalProps {
  _id: string;
  title: string;
  description: string;
  priority: string;
  progress: number;
  deadline: string;
  milestones: {
    _id: string;
    title: string;
    completed: boolean;
    completedAt?: Date;
  }[];
  velocity: string;
  streak: string;
  onDelete: (id: string) => void;
}

export default function GoalCard({
  _id,
  title,
  description,
  priority,
  progress,
  deadline,
  milestones,
  velocity,
  streak,
  onDelete,
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

      <div className="grid grid-cols-12 border-t border-neutral-800 mt-6 pt-5 text-sm">
        <div className="col-span-4">
          <p className="text-neutral-500 text-xs">MILESTONES</p>
          <div className="space-y-1">
            {milestones.map((milestone) => (
              <p
                key={milestone._id}
                className={
                  milestone.completed ? "line-through text-neutral-500" : ""
                }
              >
                {milestone.completed ? "✓" : "○"} {milestone.title}
              </p>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <p className="text-neutral-500 text-xs">VELOCITY</p>
          <p>{velocity}</p>
        </div>

        <div className="col-span-2">
          <p className="text-neutral-500 text-xs">STREAK</p>
          <p>{streak}</p>
        </div>

        <div className="col-span-4 flex justify-center items-center gap-3">
          <Link
            to={`/editgoal/${_id}`}
            className="border border-neutral-400 rounded bg-neutral-800 font-mono text-neutral-200 text-xs px-6 py-2 hover:bg-neutral-200 hover:text-neutral-800"
          >
            EDIT
          </Link>
          <button
            onClick={() => onDelete(_id)}
            className="border border-red-800 rounded bg-neutral-800 font-mono text-red-400 text-xs hover:text-black hover:bg-white px-8 py-2"
          >
            DELETE
          </button>
        </div>
      </div>
    </Card>
  );
}
