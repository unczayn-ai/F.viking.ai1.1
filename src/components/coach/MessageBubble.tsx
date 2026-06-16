interface Props {
  role: string;
  text: string;
}

export default function MessageBubble({ role, text }: Props) {
  return (
    <div
      className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-lg p-4 border border-neutral-800 ${role === "user" ? "bg-white text-black" : "bg-neutral-900 text-white"}`}
      >
        <p className="font-mono text-sm">{text}</p>
      </div>
    </div>
  );
}
