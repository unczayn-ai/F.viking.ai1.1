import { Search, Bell } from "lucide-react";
import Profile1 from "../../assets/pf1.jpg";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-black border-b border-neutral-800 flex items-center justify-between px-8 mb-10">
      <div className="flex items-center gap-3 border border-neutral-800 pl-2 pr-10 py-1.5">
        <div className="flex gap-3 relative w-full">
          <Search size={18} className="text-neutral-500" />
          <input
            placeholder="CMD + K TO EXPLORE..."
            className="bg-transparent outline-none text-xs font-mono w-80"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="border border-neutral-800 px-4 py-2 text-xs">
          ⚡ 12 DAY STREAK
        </div>
        <Bell size={18} />
        <Link to="/settings">
          <div className="w-8 h-8 bg-neutral-800">
            <img
              alt="Developer Profile"
              className="w-full h-full object-cover overflow-hidden"
              src={Profile1}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
