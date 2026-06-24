import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGoals from "../hooks/useGoals";
import Card from "../components/ui/Card";

export default function EditGoal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { goals, updateGoal } = useGoals();
  const goal = goals.find((item) => item._id === id);

  const [title, setTitle] = useState(goal?.title || "");
  const [description, setDescription] = useState(goal?.description || "");

  const handleUpdate = async () => {
    await updateGoal(id!, {
      title,
      description,
    });

    navigate("/goals");
  };

  return (
    <div className="mt-10 max-w-xl">
      <h1 className="text-4xl font-bold mb-8">Edit Goal</h1>
      <Card className="space-y-4">
        <input
          value={title}
          placeholder="edit goal title"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-black border border-neutral-800 font-mono text-sm w-full p-3"
        />
        <textarea
          value={description}
          placeholder="edit goal description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-black border border-neutral-800 font-mono text-sm w-full p-3 pb-6"
        />
      </Card>
      <button
        onClick={handleUpdate}
        className="bg-white rounded text-black px-6 py-3 mt-6"
      >
        UPDATE
      </button>
    </div>
  );
}
