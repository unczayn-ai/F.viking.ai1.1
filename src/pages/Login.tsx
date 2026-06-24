import { useState } from "react";
import Card from "../components/ui/Card";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    localStorage.setItem("token", data.token);
    window.location.href = "/";
  }

  return (
    <div className="flex flex-col justify-center items-center mt-30">
      <div className="flex flex-col items-center gap-3 mb-6">
        <h1 className="font-mono font-extrabold text-3xl">
          <span className="text-xl text-neutral-500">WELCOME TO</span> VIKING.AI
        </h1>
      </div>
      <Card className="max-w-100 min-h-70 flex flex-col items-center rounded bg-neutral-950 border border-neutral-800 p-6 gap-4">
        <h2 className="font-extrabold text-2xl">LOGIN ACC</h2>
        <p className="font-mono text-sm text-neutral-500 mb-6">
          Login to access
        </p>
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
          onClick={handleLogin}
          className="mt-5 bg-white border border-neutral-800 rounded text-sm text-black px-8 py-2"
        >
          LOGIN
        </button>
        <a href="/register" className="mt-5 font-mono text-sm">
          Create an account?
        </a>
      </Card>
    </div>
  );
}
