import { useState } from "react";
import Card from "../ui/Card";

export default function CreateGoalForm({
  onCreate,
}: {
  onCreate: (data: any) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [milestones, setMilestones] = useState(["", "", ""]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      title,
      description,
      priority: "HIGH",
      deadline: "T-30 Days",
      milestones: milestones
        .filter((item) => item.trim() !== "")
        .map((item) => ({
          title: item,
          completed: false,
        })),
      velocity: "0%",
      streak: "0 Days",
    });
    setTitle("");
    setDescription("");
    setMilestones(["", "", ""]);
  };

  return (
    <form onSubmit={submit}>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-12">
          <div className="border border-neutral-800 w-full p-6">
            <h3 className="heading-font font-bold mb-2">GOAL TITLE</h3>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Set your goal to success"
              className="font-mono bg-black border border-neutral-800 text-sm text-neutral-400 p-4 w-full mb-4"
            />
            <h3 className="heading-font font-bold mb-2">DESCRIPTION</h3>
            <textarea
              value={description}
              placeholder="Detailed breakdown of what success look like for this goal"
              onChange={(e) => setDescription(e.target.value)}
              className="font-mono bg-black border border-neutral-800 text-sm text-neutral-400 p-4 pb-8 w-full"
            />
          </div>
        </div>

        <div className="col-span-4 lg:col-span-6">
          <div className="border border-neutral-800 w-full p-6">
            <h3 className="heading-font font-bold mb-2">PRIORITY</h3>
            <div className="grid grid-cols-3">
              <button className="border border-neutral-800">HIGH</button>
              <button className="border border-neutral-800">MEDUIM</button>
              <button className="border border-neutral-800">LOW</button>
            </div>
          </div>
        </div>

        <div className="col-span-8 lg:col-span-6">
          <div className="border border-neutral-800 w-full p-6">
            <h3 className="heading-font font-bold mb-2">DEADLINE</h3>
            <p>This is schedule part</p>
          </div>
        </div>

        <div className="col-span-8 lg:col-span-8">
          <Card className="space-y-3">
            <h3 className="heading-font font-extrabold text-2xl">MILESTONES</h3>
            <p className="font-mono text-xs text-neutral-500 -mt-3">
              set up your milestones to tracking progress
            </p>
            {milestones.map((item, index) => (
              <input
                key={index}
                value={item}
                onChange={(e) => {
                  const copy = [...milestones];
                  copy[index] = e.target.value;
                  setMilestones(copy);
                }}
                placeholder={`Milestone ${index + 1}`}
                className="bg-black border border-neutral-800 font-mono text-sm w-full p-4"
              />
            ))}
          </Card>
        </div>
      </div>
      <button className="bg-white text-black text-sm px-5 py-2 font-bold mt-10">
        CREATE GOAL
      </button>
    </form>
  );
}
