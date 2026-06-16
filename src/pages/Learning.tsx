import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";
import { learningData } from "../data/learning";
import { Check, Circle } from "lucide-react";

export default function Learning() {
  return (
    <div className="mt-10">
      <div className="mb-6">
        <p className="font-mono text-xs tracking-widest text-neutral-500">
          LEARNING.EXE
        </p>
        <h1 className="heading-font text-4xl font-extrabold">
          Developer Learning Path
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 lg:col-span-8">
          <div className="mb-6">
            <p className="text-xs text-neutral-500">CURRENT PATH</p>
            <h2 className="text-2xl font-bold mt-2">
              {learningData.currentPath}
            </h2>
          </div>

          <div className="flex justify-between mb-2">
            <span className="font-mono text-sm text-neutral-500">progress</span>
            <span className="font-mono text-xs text-neutral-500">
              {learningData.progress}%
            </span>
          </div>

          <ProgressBar value={learningData.progress} />

          <div className="space-y-8 mt-8">
            {learningData.modules.map((module) => (
              <div key={module.week}>
                <h3 className="font-mono text-xs text-neutral-500 mb-4">
                  {module.week}
                </h3>

                <div className="space-y-3">
                  {module.topics.map((topic) => (
                    <div
                      key={topic.name}
                      className="flex items-center gap-3 font-mono text-sm"
                    >
                      <div className="w-5 h-5 border border-neutral-800 flex items-center justify-center">
                        {topic.completed ? (
                          <Check size={14} />
                        ) : (
                          <Circle size={10} />
                        )}
                      </div>
                      <span
                        className={
                          topic.completed
                            ? "text-neutral-400 line-through"
                            : "text-white"
                        }
                      >
                        {topic.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-4">
          <h3 className="font-bold mb-6">AI ROADMAP</h3>
          <div className="space-y-4">
            {learningData.recommendations.map((item) => (
              <div
                key={item}
                className="border-b border-neutral-800 pb-3 font-mono text-sm"
              >
                → {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
