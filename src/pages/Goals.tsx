import Card from "../components/ui/Card";
import GoalCard from "../components/ui/GoalCard";
import ProgressBar from "../components/ui/ProgressBar";
import { goalsData } from "../data/goals";
import { plannerData } from "../data/goals";
import { metricsData } from "../data/goals";

export default function Goals() {
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
            CREATE TARGET
          </button>
          <button className="bg-white text-black text-xs px-6 py-3 font-bold hover:opacity-75 cursor-pointer">
            CREATE TARGET
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <h3 className="text-xs tracking-widest font-bold">PRIORITY QUEUE</h3>

          {goalsData.goals.map((goal) => (
            <GoalCard key={goal.title} {...goal} />
          ))}
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
