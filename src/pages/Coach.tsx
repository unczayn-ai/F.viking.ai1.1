import ChatWindow from "../components/coach/ChatWindow";
import GoalsBreakdown from "../components/coach/GoalsBreakdown";
import { coachData } from "../data/coach";
import { BotMessageSquare, Circle } from "lucide-react";

export default function Coach() {
  return (
    <div className="mt-10">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <p className="text-sm heading-font font-extrabold tracking-widest">
            COACH.EXE
          </p>
          <p className="text-xs text-neutral-500">
            SYSTEM READY / LOCAL_LLM_v4.2
          </p>

          <Circle
            size={12}
            className="border-white rounded-full fill-green-500"
          />
        </div>
        <div className="flex items-center gap-3">
          <BotMessageSquare size={30} />
          <h1 className="heading-font text-4xl font-extrabold">
            AI Development Coach
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <ChatWindow messages={coachData.messages} />
        </div>

        <div className="col-span-12 lg:col-span-4 border border-neutral-800 -mt-34">
          <div className="flex flex-col h-100">
            <div className="h-12 pl-6 pt-6 mb-10">
              <div className="flex flex-col gap-1">
                <h3 className="heading-font text-sm font-bold ">
                  GOAL BREAKDOWNS
                </h3>
                <p className="font-mono uppercase text-[10px] text-neutral-500 tracking-widest">
                  Active Refactor Track
                </p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {coachData.goalsBreakdown.map((goal) => (
                <GoalsBreakdown key={goal.id} {...goal} />
              ))}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xs tracking-widest text-neutral-500">
              AI RECOMMENDATIONS
            </h3>
            <div className="mt-6 space-y-4">
              {coachData.recommendations.map((item) => (
                <div
                  key={item}
                  className="border-b border-neutral-800 pb-3 font-mono text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
