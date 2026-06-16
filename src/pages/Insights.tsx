import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";
import { insightsData } from "../data/insight";

export default function Insights() {
  return (
    <div className="mt-10">
      <div className="mb-6">
        <p className="text-xs font-mono tracking-widest text-neutral-500">
          INSIGHTS.EXE
        </p>
        <h1 className="heading-font text-4xl font-extrabold">
          Developer Intelligence
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 lg:col-span-4">
          <p className="text-xs text-neutral-500 tracking-widest">
            DEVELOPER SCORE
          </p>
          <div className="flex justify-center items-center">
            <h2 className="text-6xl font-bold mt-6">
              {insightsData.developerScore}
            </h2>
            <p className="font-mono text-sm text-neutral-500 mt-12">/100</p>
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-8">
          <p className="text-xs text-neutral-500 tracking-widest">
            VELOCITY TREND
          </p>
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-4xl font-bold mt-5">{insightsData.velocity}</h2>
            <p className="font-mono text-sm text-neutral-500 mt-10">
              vs previous cycle
            </p>
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-7">
          <h3 className="font-bold mb-6">SKILL MATRIX</h3>
          <div className="space-y-5">
            {insightsData.codingStats.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2 font-mono text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <ProgressBar value={skill.level} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-5">
          <h3 className="font-bold mb-5">AI ANALYSIS</h3>
          <p className="text-xs text-neutral-500 mb-3">STRONG AREAS</p>
          {insightsData.strengths.map((item) => (
            <div key={item} className="font-mono text-sm mb-2">
              ✓ {item}
            </div>
          ))}
          <p className="text-xs text-neutral-500 mt-6 mb-3">
            IMPROVEMENT AREAS
          </p>
          {insightsData.weaknesses.map((item) => (
            <div key={item} className="font-mono text-sm mb-2">
              ○ {item}
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
