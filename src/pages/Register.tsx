import { useState } from "react";
import Card from "../components/ui/Card";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log("data", data);
    window.location.href = "/login";
  }

  return (
    <div className="flex flex-col justify-center items-center mt-30">
      <div className="flex flex-col items-center gap-3 mb-6">
        <h1 className="font-mono font-extrabold text-3xl">
          <span className="text-xl text-neutral-500">WELCOME TO</span> VIKING.AI
        </h1>
      </div>
      <Card className="max-w-100 min-h-70 flex flex-col items-center rounded bg-neutral-950 border border-neutral-800 p-6 gap-4">
        <h2 className="font-extrabold text-2xl">CREATE VIKING ACC</h2>
        <p className="font-mono text-sm text-neutral-500 mb-6">
          Personal Assistant
        </p>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-neutral-800 rounded px-4 py-3"
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-neutral-800 rounded px-4 py-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-neutral-800 rounded px-4 py-3"
        />
        <button
          onClick={handleRegister}
          className="mt-5 bg-white border border-neutral-800 rounded text-sm text-black px-8 py-2"
        >
          REGISTER
        </button>
      </Card>
    </div>
  );
}
