import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";
import { applicationData } from "../data/application";

export default function Application() {
  return (
    <div className="mt-10">
      <div className="mb-6">
        <p className="text-xs font-mono tracking-widest text-neutral-500">
          APPLICATION.EXE
        </p>
        <h1 className="heading-font text-4xl font-extrabold">
          Career Command Center
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 lg:col-span-8">
          <h2 className="font-bold mb-6">OPEN POSITIONS</h2>
          <div className="space-y-5">
            {applicationData.positions.map((job) => (
              <div
                key={job.role}
                className="border border-neutral-800 p-5 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold">{job.role}</h3>
                  <p className="text-xs text-neutral-500 font-mono mt-1">
                    {job.company}
                  </p>
                </div>

                <span className="text-xs font-mono border border-neutral-800 px-3 py-1">
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-4">
          <p className="text-xs tracking-widest text-neutral-500">PORTFOLIO</p>
          <div className="flex justify-center items-center text-5xl font-bold mt-5">
            {applicationData.portfolioScore}%
          </div>
          <div className="mt-6">
            <ProgressBar value={applicationData.portfolioScore} />
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-7">
          <h2 className="font-bold mb-6">CAREER SKILLS</h2>
          <div className="space-y-5">
            {applicationData.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between font-mono text-sm mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <ProgressBar value={skill.level} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-5">
          <h2 className="font-bold mb-6">AI CAREER ANALYSIS</h2>
          <div className="space-y-4">
            {applicationData.recommendations.map((item) => (
              <p
                key={item}
                className="font-mono text-sm border-b border-neutral-800 pb-3"
              >
                → {item}
              </p>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
