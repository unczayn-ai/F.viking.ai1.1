import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import { Square, Check } from "lucide-react";

interface Tasks {
  name: string;
  completed: boolean;
}
interface AIbreakdown {
  id: number;
  title: string;
  progress: number;
  tasks: Tasks[];
}

export default function GoalsBreakdown({
  id,
  title,
  progress,
  tasks,
}: AIbreakdown) {
  return (
    <Card className="h-50 space-y-5">
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="heading-font font-extrabold text-sm">{id}.</span>
            <h3 className="heading-font font-extrabold uppercase text-sm">
              {title}
            </h3>
          </div>
          <span className="text-xs text-neutral-500">{progress}%</span>
        </div>

        <ProgressBar value={progress} />

        <div className="border-l border-neutral-800 mt-6">
          {tasks?.map((item, index) => (
            <div key={index} className="flex items-center gap-3 mb-1">
              <div className="border border-neutral-300 flex justify-center items-center w-4 h-4">
                {item.completed ? <Check size={18} /> : ""}
              </div>
              <span
                className={`text-sm capitalize font-mono
                ${item.completed ? "text-neutral-400 line-through" : "text-white "}`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
