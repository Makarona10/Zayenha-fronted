"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MerchantLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example login logic
    if (email && password) {
      console.log("Merchant Login:", { email, password });
      router.push("/merchant/dashboard"); // Redirect after login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary-400 flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            Merchant Login
          </h1>
          <p className="mt-1 text-gray-500 text-sm">
            Sign in to access your merchant dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="merchant@example.com"
              required
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 px-4 py-2 text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 px-4 py-2 text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-400 hover:bg-primary-500 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 flex justify-between text-sm text-gray-600">
          <button
            onClick={() => router.push("/merchant/forgot-password")}
            className="hover:text-primary-400"
          >
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
}
