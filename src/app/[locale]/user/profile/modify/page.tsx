"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const UpdatePasswordPage = () => {
  const t = useTranslations();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert(t("updatePassword.passwordsNotMatch"));
      return;
    }

    alert(t("updatePassword.success"));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-primary-600 mb-6">
          {t("updatePassword.title")}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Current Password */}
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("updatePassword.currentPassword")}
            </label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder={t("updatePassword.currentPasswordPlaceholder") || ""}
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
              {t("updatePassword.newPassword")}
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={t("updatePassword.newPasswordPlaceholder") || ""}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <label
              htmlFor="confirmNewPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("updatePassword.confirmNewPassword")}
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder={
                t("updatePassword.confirmNewPasswordPlaceholder") || ""
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-md transition-colors duration-300"
          >
            {t("updatePassword.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordPage;
