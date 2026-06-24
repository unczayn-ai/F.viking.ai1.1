import { useAuth } from "../context/AuthContext";
import { dashboardData } from "../data/dashboard";
import Card from "../components/ui/Card";
import StatCard from "../components/ui/StateCard";
import ActivityTable from "../components/ui/ActivityTable";
import { Bot } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <div className="grid grid-cols-12 gap-6 mt-10">
        <Card className="flex flex-col justify-between col-span-12 lg:col-span-8 min-h-80">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="heading-font text-4xl font-extrabold tracking-tight mb-6">
                Mission: High Velocity
              </h2>
              <p className="text-neutral-400 font-mono max-w-md mt-3">
                Your codebase evolution is accelerating. 84 commits tracked this
                week across 4 primary repositories.
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-neutral-500 ">CURRENT PHASE</p>
              <h3 className="font-bold">SYSTEM ARCHITECT</h3>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex justify-between items-end mb-4">
              <span className="font-mono text-xs text-neutral-500">
                GIT ACTIVITY (LAST 14 DAYS)
              </span>
              <span className="font-mono text-xs text-white">
                +12% vs PREV WEEK
              </span>
            </div>

            <div className="flex items-end gap-1.5 w-full h-32">
              {dashboardData.commitBars.map((bar, index) => (
                <div
                  key={index}
                  style={{ height: `${bar.height}%` }}
                  className={`flex-1 transition-all ${bar.active ? "bg-white" : "bg-neutral-500 hover:bg-white"}`}
                />
              ))}
            </div>
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-4">
          <div className="flex justify-between items-center mb-8">
            <span className="heading-font text-sm text-neutral-500 tracking-widest">
              DAILY PULSE
            </span>
            <span className="h-2 w-2 rounded-full bg-neutral-500 animate-pulse" />
          </div>

          <div className="flex flex-col items-center justify-center mb-12">
            <div className="font-mono text-7xl font-bold ">
              <StatCard value={dashboardData.streak.days} label="DAY STREAK" />
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-500 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[12px] text-neutral-400">
                Consistency
              </span>
              <span className="font-mono text-[12px] text-neutral-500">
                94%
              </span>
            </div>
            <div className="w-full bg-neutral-400 h-1">
              <div className="bg-white h-full" style={{ width: "94%" }} />
            </div>
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-4">
          <h3 className="heading-font text-sm tracking-widest text-neutral-500 mb-6">
            ACTIVE GOALS
          </h3>
          <div className="space-y-6">
            {dashboardData.goals.map((goal) => (
              <div key={goal.title} className="group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">{goal.title}</h4>
                  <span className="mt-2 text-xs text-neutral-500">
                    {goal.progress}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-4">
          <h3 className="flex gap-2 text-sm heading-font tracking-widest text-neutral-500 mb-6">
            <Bot size={18} />
            AI COACH ADVICE
          </h3>
          <div className="border-l border-neutral-300 pl-4">
            <p className="text-sm italic">{dashboardData.coach.message}</p>
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-4">
          <h3 className="heading-font text-sm tracking-widest text-neutral-500 mb-6">
            WEEKLY SPRINT
          </h3>
          <div className="flex gap-2 items-end h-32">
            {dashboardData.sprint.map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className="flex-1 bg-white"
              />
            ))}
          </div>
        </Card>
      </div>
      <Card className="w-full mt-6">
        <h3 className="heading-font text-sm tracking-widest text-neutral-500 mb-6">
          RECENT WORKSPACE ACTIVITY
        </h3>
        <ActivityTable data={dashboardData.activity} />
      </Card>
    </div>
  );
}
