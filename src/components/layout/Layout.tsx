import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SideBar />
      <Topbar />
      <main className="ml-64 pt-16 p-8">
        <Outlet />
      </main>
    </div>
  );
}
