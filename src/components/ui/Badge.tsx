interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="text-[10px] uppercase tracking-widest border border-neutral-700 px-2 py-1 text-neutral-300">
      {children}
    </span>
  );
}
