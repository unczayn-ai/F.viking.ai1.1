import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import Goals from "../pages/Goals";
import Coach from "../pages/Coach";
import Planning from "../pages/Planning";
import Insights from "../pages/Insights";
import Application from "../pages/Application";
import Learning from "../pages/Learning";
import Settings from "../pages/Settings";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CreateGoal from "../pages/CreateGoal";
import EditGoal from "../pages/EditGoal";
import AIBreakdown from "../pages/AIBreakdown";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/application" element={<Application />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/newgoal" element={<CreateGoal />} />
          <Route path="/editgoal/:id" element={<EditGoal />} />
          <Route path="/goal/:id/breakdown" element={<AIBreakdown />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
