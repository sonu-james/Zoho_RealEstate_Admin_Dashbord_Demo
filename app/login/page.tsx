"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const adminEmail = "admin@zohoestate.com";
    const adminPassword = "Admin@123";

    if (
      email === adminEmail &&
      password === adminPassword
    ) {
      localStorage.setItem("isAdminLoggedIn", "true");

      router.push("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
        
        <h1 className="text-3xl font-bold text-white mb-2">
          Admin Login
        </h1>

        <p className="text-zinc-400 mb-8">
          Login to ZohoEstate Dashboard
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div>
            <label className="text-zinc-400 text-sm">
              Email
            </label>

            <input
              type="email"
              placeholder="admin@zohoestate.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="text-zinc-400 text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}