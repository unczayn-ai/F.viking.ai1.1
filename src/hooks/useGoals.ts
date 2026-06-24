import { useEffect, useState } from "react";
import type { Goal } from "../types/goal";

export default function useGoals() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGoals = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/goals", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setGoals(data);
  };

  useEffect(() => {
    fetchGoals().finally(() => setLoading(false));
  }, []);

  const createGoal = async (goalData: Partial<Goal>) => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(goalData),
    });

    const newGoal = await res.json();
    setGoals((prev) => [...prev, newGoal]);
  };

  const updateGoal = async (id: string, goalData: Partial<Goal>) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:5000/api/goals/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(goalData),
    });

    const updateGoal = await res.json();

    setGoals((prev) =>
      prev.map((goal) => (goal._id === id ? updateGoal : goal)),
    );
  };

  const deleteGoal = async (id: string) => {
    const token = localStorage.getItem("token");

    await fetch(`http://localhost:5000/api/goals/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setGoals((prev) => prev.filter((goal) => goal._id !== id));
  };
  return { goals, loading, deleteGoal, createGoal, updateGoal };
}
