import Card from "./Card";

interface Props {
  activity: {
    type: string;
    message: string;
    createdAt: string;
  }[];
}

export default function ActivityHistory({ activity }: Props) {
  return (
    <Card>
      <h3 className="heading-font font-bold mb-5">ACTIVITY LOG</h3>
      <div className="space-y-4">
        {activity.map((item, index) => (
          <div key={index} className="border-l-2 border-neutral-700 pl-4">
            <p className="font-mono text-sm">{item.message}</p>
            <span className="font-mono text-xs text-neutral-500">
              {new Date(item.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
