import Card from "../ui/Card";

interface Analysis {
  status: string;
  risk: string;
  recommendation: string;
}

interface Props {
  analysis: Analysis | null;
}

export default function GoalAIAnalysis({ analysis }: Props) {
  if (!analysis) return null;

  return (
    <Card className="mt-5">
      <h3 className="heading-font font-bold mb-5">VIKING AI ANALYSIS</h3>
      <div className="space-y-4 font-mono text-sm">
        <div>
          <p className="text-neutral-500 text-xs">STATUS</p>
          <p>{analysis.status}</p>
        </div>
        <div>
          <p className="text-neutral-500 text-xs">RISK</p>
          <p>{analysis.risk}</p>
        </div>
        <div>
          <p className="text-neutral-500 text-xs">RECOMMENDATION</p>
          <p>{analysis.recommendation}</p>
        </div>
      </div>
    </Card>
  );
}
