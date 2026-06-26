import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGoals from "../hooks/useGoals";
import Card from "../components/ui/Card";

export default function EditGoal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { goals, updateGoal } = useGoals();
  const goal = goals.find((item) => item._id === id);

  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState(goal?.title || "");
  const [description, setDescription] = useState(goal?.description || "");
  const [milestones, setMilestones] = useState(goal?.milestones || []);
  const [newMilestone, setNewMilestone] = useState("");

  useEffect(() => {
    if (goal) {
      setTitle(goal.title);
      setDescription(goal.description);
      setMilestones(goal.milestones);
    }
  }, [goal]);

  const toggleMilestone = (index: number) => {
    const updated = milestones.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    setMilestones(updated);
  };

  const addMilestone = () => {
    if (!newMilestone.trim()) return;

    setMilestones([
      ...milestones,
      {
        title: newMilestone,
        completed: false,
      },
    ]);

    setNewMilestone("");
  };

  const deleteMilestone = (index: number) => {
    const updated = milestones.filter((_, i) => i !== index);

    setMilestones(updated);
  };

  const handleUpdate = async () => {
    setSaving(true);

    await updateGoal(id!, {
      title,
      description,
      milestones,
    });

    setSaving(false);

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

        <div className="mt-6 space-y-3">
          <h3 className="heading-font font-bold">MILESTONES</h3>
          {milestones.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-3 border border-neutral-800 p-3"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleMilestone(index)}
                />
                <span
                  className={
                    item.completed ? "line-through text-neutral-500" : ""
                  }
                >
                  {item.title}
                </span>
              </div>
              <button
                onClick={() => deleteMilestone(index)}
                className="font-mono text-red-400 text-xs"
              >
                REMOVE
              </button>
            </div>
          ))}

          <div className="flex gap-3 mt-6">
            <input
              value={newMilestone}
              onChange={(e) => setNewMilestone(e.target.value)}
              placeholder="new milestone"
              className="bg-black border border-neutral-800 p-3 flex-1"
            />
            <button
              onClick={addMilestone}
              className="bg-white font-mono text-black text-xs px-8 font-bold"
            >
              ADD
            </button>
          </div>
        </div>
      </Card>
      <button
        onClick={handleUpdate}
        className="bg-white rounded text-black px-6 py-3 mt-6"
      >
        {saving ? "UPDATING..." : "UPDATE"}
      </button>
    </div>
  );
}
