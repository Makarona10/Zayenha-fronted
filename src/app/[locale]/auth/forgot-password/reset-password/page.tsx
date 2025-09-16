"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const ResetPasswordPage = () => {
  const t = useTranslations();
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert(t("resetPassword.passwordsNotMatch"));
      return;
    }
    alert(t("resetPassword.success"));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-primary-600 mb-6">
          {t("resetPassword.title")}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Reset Code */}
          <div>
            <label
              htmlFor="resetCode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("resetPassword.resetCode")}
            </label>
            <input
              type="text"
              id="resetCode"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              placeholder={t("resetPassword.resetCodePlaceholder") || ""}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

          {/* New Password */}
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("resetPassword.newPassword")}
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={t("resetPassword.newPasswordPlaceholder") || ""}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("resetPassword.confirmPassword")}
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t("resetPassword.confirmPasswordPlaceholder") || ""}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-md transition-colors duration-300"
          >
            {t("resetPassword.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
