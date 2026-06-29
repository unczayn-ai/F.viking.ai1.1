import { useParams, Link } from "react-router-dom";
import Card from "../components/ui/Card";

export default function AIBreakdown() {
  const { id } = useParams();

  return (
    <div className="mt-10">
      <div className="flex justify-between mb-8">
        <div>
          <p className="font-mono text-sm text-neutral-500">AI ANALYSIS</p>
          <h1 className="heading-font font-extrabold text-3xl">
            AI GOAL BREAKDOWN
          </h1>
          <p className="font-mono text-xs text-neutral-500 mt-2">
            Viking AI create a SMART raodmap from your goal.
          </p>
        </div>

        <Link to="/goals" className="border border-neutral-800 px-5 py-1">
          BACK
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <Card>
            <h2 className="font-mono text-xl mb-6">SMART GOAL</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="flex flex-col items-center">
                <span className="font-mono font-bold text-purple-400">S</span>
                <p>Specific</p>
                <small>Define your target</small>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-mono font-bold text-blue-400">M</span>
                <p>Measurable</p>
                <small>Tracking progress</small>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-mono font-bold text-green-400">A</span>
                <p>Achievable</p>
                <small>Realistic plan</small>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-mono font-bold text-orange-400">R</span>
                <p>Relevant</p>
                <small>Why it matters</small>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-mono font-bold text-red-400">T</span>
                <p>Time</p>
                <small>Deadline</small>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="heading-font font-extrabold mb-5">MIND MAP</h2>
            <div className="h-[500px] flex items-center justify-center border border-neutral-800">
              <div className="border border-purple-500 rounded-full p-10">
                Your Goal
              </div>
            </div>
          </Card>
        </div>

        <div className="col-span-4">
          <Card>
            <h2 className="heading-font font-extrabold mb-5">
              VIKING AI COACH
            </h2>
            <p className="text-sm text-neutral-400">
              I need more information to build your project goal.
            </p>
            <button className="mt-8 w-full bg-white text-black py-3 font-bold">
              GENERATE SMART GOAL
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
