import { useNavigate } from "react-router-dom";
import useGoals from "../hooks/useGoals";
import CreateGoalForm from "../components/goals/CreateGoalForm";

export default function CreateGoal() {
  const { createGoal } = useGoals();
  const navigate = useNavigate();

  const handleCreate = async (data: any) => {
    await createGoal(data);
    navigate("/goals");
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div>
        <h1 className="heading-font text-4xl font-bold mb-3">
          Create New Goal
        </h1>
        <p className="font-mono text-sm text-neutral-500 mb-8">
          Define your objective and track your progress torward excellence. set
          priority Ai analysist systems and tracking milestones.
        </p>

        <CreateGoalForm onCreate={handleCreate} />
      </div>
    </div>
  );
}
