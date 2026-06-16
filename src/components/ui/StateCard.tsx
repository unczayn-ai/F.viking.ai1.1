import Card from "./Card";

interface Props {
  label: string;
  value: string | number;
}

export default function StatCard({ label, value }: Props) {
  return (
    <Card className="text-center">
      <h2 className="text-5xl font-bold">{value}</h2>
      <p className="text-xs text-neutral-500 tracking-widest mt-4">{label}</p>
    </Card>
  );
}
