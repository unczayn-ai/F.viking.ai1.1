import Card from "./Card";

interface Props {
  analysis: any;
}

export default function AIBreakdown({ analysis }: Props) {
  return (
    <Card className="mt-6">
      <h3 className="heading-font font-bold mb-5">VIKING AI ANALYSIS V1</h3>
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
