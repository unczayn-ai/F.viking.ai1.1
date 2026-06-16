interface CardProps {
  children: React.ReactNode;
  className: "";
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-black border border-neutral-800 p-6 ${className}`}>
      {children}
    </div>
  );
}
