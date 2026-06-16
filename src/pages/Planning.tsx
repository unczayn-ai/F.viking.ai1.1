import { plannerData } from "../data/goals";

export default function Planning() {
  return (
    <div className="mt-10">
      <div className="mb-6">
        <p className="text-xs font-mono tracking-widest text-neutral-500">
          PLANNING.EXE
        </p>
        <h1 className="heading-font text-4xl font-extrabold">
          Developer Execution Plan
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 border border-neutral-800 p-6">
          <h2 className="font-bold mb-6">TODAY'S MISSION</h2>
          <div className="space-y-6">
            {plannerData.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-20 text-neutral-500 font-mono text-sm border-r border-neutral-800">
                  {item.time}
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-xs font-mono text-neutral-500 mt-1">
                    {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 border border-neutral-800 p-6">
          <div className="flex flex-col items-center">
            <p className="text-xs tracking-widest text-nuetral-500">
              FOCUS SCORE
            </p>
            <h2 className="text-5xl font-bold mt-4">82%</h2>
          </div>

          <div className="flex flex-col items-center mt-6 border-t border-neutral-800 pt-8">
            <p className="text-xs text-neutral-500">ACTIVE STREAK</p>
            <p className="font-bold mt-2">5 DAYS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
