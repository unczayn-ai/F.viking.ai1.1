import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import Goals from "../pages/Goals";
import Coach from "../pages/Coach";
import Planning from "../pages/Planning";
import Insights from "../pages/Insights";
import Application from "../pages/Application";
import Learning from "../pages/Learning";
import Settings from "../pages/Settings";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/application" element={<Application />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
