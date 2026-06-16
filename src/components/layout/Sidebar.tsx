import {
  LayoutDashboard,
  Target,
  Calendar,
  ChartBar,
  Briefcase,
  BookOpen,
  Bot,
  Settings,
} from "lucide-react";

import { Link } from "react-router-dom";

const items = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Goals", icon: Target, path: "/goals" },
  { name: "Planning", icon: Calendar, path: "/planning" },
  { name: "Insights", icon: ChartBar, path: "/insights" },
  { name: "Application", icon: Briefcase, path: "/application" },
  { name: "Learning", icon: BookOpen, path: "/learning" },
];

export default function SideBar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-neutral-800 flex flex-col">
      <div className="text-center mt-6">
        <h1 className="heading-font text-2xl font-extrabold tracking-tight">
          VIKING.AI
        </h1>
        <p className="font-mono text-[10px] mt-1 tracking-widest opacity-60">
          PRECISION &amp; STRENGTH
        </p>
      </div>
      <nav className="flex-1 space-y-1 ml-6 mt-12">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center space-x-3 text-white font-bold border-l-2 border-neutral-400 pl-4 py-3 hover:bg-neutral-800 transition"
            >
              <Icon size={24} />
              <span className="font-mono font-extrabold text-sm">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4 mb-8">
        <div className="px-4">
          <button className="w-full flex items-center justify-center bg-white text-black text-sm font-mono font-extrabold py-3 space-x-2 transition-all active:scale-95 hover:opacity-90">
            NEW GOAL
          </button>
        </div>
        <div className="px-4 mt-auto border-t border-neutral-600 pt-6 space-y-2">
          <Link
            to="/coach"
            className="flex items-center gap-3 text-neutral-400 px-8 py-2 hover:bg-neutral-800"
          >
            <Bot size={24} />
            Coach
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-3 text-neutral-400 px-8 py-2 hover:bg-neutral-800"
          >
            <Settings size={24} />
            Settings
          </Link>
        </div>
      </div>
    </aside>
  );
}
