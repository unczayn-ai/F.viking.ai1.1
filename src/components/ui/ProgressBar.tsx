interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full h-1 bg-neutral-800 ">
      <div className="h-full bg-white" style={{ width: `${value}%` }} />
    </div>
  );
}
