import MessageBubble from "./MessageBubble";
import { Paperclip, ArrowUp } from "lucide-react";

interface Message {
  role: string;
  text: string;
}

export default function ChatWindow({ messages }: { messages: Message[] }) {
  return (
    <div className="flex flex-col border border-neutral-800 h-[500px]">
      <div className="flex-1 space-y-5 p-6 overflow-y-auto">
        {messages.map((msg, index) => (
          <MessageBubble key={index} role={msg.role} text={msg.text} />
        ))}
      </div>

      <div className="h-30 border-t border-neutral-800 flex items-center p-4">
        <div className="w-full h-16 flex items-center justify-between border gap-4 rounded-lg border-neutral-400 pl-6 pr-2">
          <input
            type="text"
            placeholder="Ask anything..."
            className="bg-transparent outline-none flex-1 font-mono text-sm"
          />
          <div className="flex items-center gap-4">
            <Paperclip size={20} />
            <button className="flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2 font-mono text-xs font-bold">
              EXECUTE
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
