import Card from "../components/ui/Card";
import { settingsData } from "../data/settings";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { user, logout } = useAuth();

  return (
    <div className="mt-10">
      <div className="mb-6">
        <p className="text-xs font-mono tracking-widest text-neutral-500">
          SETTINGS.EXE
        </p>
        <h1 className="heading-font text-4xl font-extrabold">
          System Configuration
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 lg:col-span-6">
          <h2 className="font-bold mb-6">PROFILE</h2>
          <div className="font-mono text-sm space-y-3">
            <p>
              NAME:
              <span className="text-neutral-400 ml-2">{user?.name}</span>
            </p>
            <p>
              EMAIL:
              <span className="text-neutral-400 ml-2">{user?.email}</span>
            </p>
            <p>
              ROLE:
              <span className="text-neutral-400 ml-2">{user?.role}</span>
            </p>
            <p>
              PHASE:
              <span className="text-neutral-400 ml-2">{user?.phase}</span>
            </p>
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-6">
          <h2 className="font-bold mb-6">AI ENGINE</h2>
          <div className="font-mono text-sm space-y-3">
            <p>
              MODEL:
              <span className="text-neutral-400 ml-2">
                {settingsData.ai.model}
              </span>
            </p>
            <p>
              MODE:
              <span className="text-neutral-400 ml-2">
                {settingsData.ai.mode}
              </span>
            </p>
            <p>
              STATUS:
              <span className="text-neutral-400 ml-2">
                {settingsData.ai.status}
              </span>
            </p>
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-7">
          <h2 className="font-bold mb-6">INTEGRATIONS</h2>
          <div className="space-y-4">
            {settingsData.integrations.map((item) => (
              <div
                key={item.name}
                className="flex justify-between border-b border-neutral-800 pb-3 font-mono text-sm"
              >
                <span>{item.name}</span>
                <span className="text-neutral-400">{item.status}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-5">
          <h2 className="font-bold mb-6">SYSTEM</h2>
          <div className="space-y-4">
            {settingsData.preferences.map((item) => (
              <div
                key={item.name}
                className="flex justify-between font-mono text-sm"
              >
                <span>{item.name}</span>
                <span className="text-neutral-400">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <button
        onClick={logout}
        className="mt-10 rounded font-mono text-red-400 text-sm bg-neutral-900 px-8 py-3 cursor-pointer hover:text-white"
      >
        LOGOUT
      </button>
    </div>
  );
}
