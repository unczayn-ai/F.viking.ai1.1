import { useState } from "react";

export default function CreateGoalForm({
  onCreate,
}: {
  onCreate: (data: any) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      title,
      description,
      priority: "HIGH",
      progress: 0,
      deadline: "T-30 Days",
      milestones: "0/10 Complete",
      velocity: "0%",
      streak: "0 Days",
    });
    setTitle("");
    setDescription("");
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
      </div>
      <button className="bg-white text-black text-sm px-5 py-2 font-bold">
        CREATE GOAL
      </button>
    </form>
  );
}
