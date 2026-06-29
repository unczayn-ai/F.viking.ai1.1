import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../components/ui/Card";
import GoalCard from "../components/ui/GoalCard";
import ProgressBar from "../components/ui/ProgressBar";
import useGoals from "../hooks/useGoals";
import { goalsData } from "../data/goals";
import { plannerData } from "../data/goals";
import { metricsData } from "../data/goals";
import GoalAIAnalysis from "../components/ai/GoalAIAnalysis";

export default function Goals() {
  const { goals, loading, deleteGoal, analyzeGoal } = useGoals();
  const [analysis, setAnalysis] = useState<any>(null);

  const handleAnalyze = async (id: string) => {
    const result = await analyzeGoal(id);
    setAnalysis(result);
  };

  return (
    <div>
      <div className="flex justify-between mb-10 mt-10">
        <div>
          <p className="text-xs text-neutral-500 tracking-widest">
            CURRENT TRAJECTORY
          </p>
          <h1 className="text-4xl font-bold mt-2">Strategic Goals</h1>
        </div>

        <div className="h-12 flex justify-between gap-4">
          <button className="bg-black text-white text-xs border border-neutral-800 px-6 py-3 font-bold hover:bg-neutral-800 cursor-pointer">
            EXPORT DATA
          </button>

          <Link
            to="/newgoal"
            className="bg-white text-black flex items-center text-xs px-6 py-2 font-bold hover:opacity-75 cursor-pointer"
          >
            CREATE TARGET
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <h3 className="text-xs tracking-widest font-bold">PRIORITY QUEUE</h3>

          {loading && (
            <div className="border border-neutral-800 p-6 font-mono text-sm text-neutral-400">
              LOADING GOALS...
            </div>
          )}

          {!loading && goals.length === 0 && (
            <div className="border border-neutral-800 p-6">
              <h3 className="font-bold">NO ACTIVE GOAL</h3>
              <p className="text-neutral-500 text-sm mt-2">
                Create your first mission to begin tracking progress
              </p>
            </div>
          )}

          {!loading &&
            goals.map((goal) => (
              <GoalCard key={goal._id} {...goal} onDelete={deleteGoal} />
            ))}
          <GoalAIAnalysis analysis={analysis} />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <Card className="mb-6">
            <h3 className="text-xs tracking-widest font-bold">
              WEEKLY PLANNER
            </h3>

            <div className="w-xs grid grid-cols-7 gap-2 mt-6">
              {goalsData.sprint.map((bar, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-full h-10 ${bar.active ? "bg-white" : "bg-neutral-800"}`}
                  />
                  <span className="font-mono text-sm ">{bar.day}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-3 p-6">
              {plannerData.map((item, index) => (
                <div key={index} className="grid grid-cols-12">
                  <div className="col-span-2 text-sm text-neutral-500 font-bold border-r border-neutral-800 pr-8">
                    {item.time}
                  </div>

                  <div className="col-span-10 pl-6">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-xs text-neutral-400">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="heading-font text-xs font-bold tracking-widest mb-6">
              COACH INTELLIGENCE
            </h3>
            <div className="flex justify-center items-center">
              <button className="w-full text-xs font-mono border border-neutral-800 tracking-widest py-4 hover:bg-white hover:text-black">
                VIEW FULL STRATEGY
              </button>
            </div>
          </Card>

          <Card>
            <h3 className="heading-font text-xs font-bold tracking-widest mb-6">
              METRICS
            </h3>

            {metricsData.map((item, index) => (
              <div key={index} className="p-2">
                <div className="flex justify-between mb-4">
                  <span className="text-xs text-neutral-500 font-mono">
                    {item.tech}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {item.progress}%
                  </span>
                </div>
                <ProgressBar value={item.progress} />
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
