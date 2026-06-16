import Badge from "./Badge";

interface Activity {
  entity: string;
  action: string;
  time: string;
  status: string;
}

export default function ActivityTable({ data }: { data: Activity }) {
  return (
    <div className="border border-neutral-800">
      <div className="grid grid-cols-4 p-4 pl-8 text-xs text-neutral-500 heading-font font-bold bg-neutral-900 border-b border-neutral-800">
        <span>ENTITY</span>
        <span>ACTION</span>
        <span>TIME</span>
        <span>STATUS</span>
      </div>

      {data.map((item) => (
        <div
          key={item.entity}
          className="grid grid-cols-4 p-4 pl-8 text-sm border-b border-neutral-900"
        >
          <span>{item.entity}</span>
          <span className="text-neutral-400">{item.action}</span>
          <span className="text-neutral-500">{item.time}</span>
          <span>
            <Badge>{item.status}</Badge>
          </span>
        </div>
      ))}
    </div>
  );
}
