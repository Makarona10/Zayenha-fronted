"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const ForgotPasswordPage = () => {
  const t = useTranslations("forgotPassword");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: add API call for forgot password
    alert(t("confirmationMessage"));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {t("title")}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t("emailPlaceholder")}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                         focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary-500 text-white font-medium 
                       rounded-xl hover:bg-primary-600 transition-colors"
          >
            {t("submitButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
