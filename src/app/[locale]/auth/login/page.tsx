import { useTranslations } from "next-intl";

const Login = () => {
  const t = useTranslations("Login");

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-primary-100 via-primary-200 to-primary-400">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-8 text-primary-500">
          {t("title")}
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              {t("emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              placeholder={t("emailPlaceholder")}
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              {t("passwordLabel")}
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              placeholder={t("passwordPlaceholder")}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-400 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-primary-500 focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 transition"
          >
            {t("submitButton")}
          </button>
        </form>

        {/* Optional extra links */}
        <div className="flex flex-col items-center mt-6 text-center gap-2">
          <p className="text-sm text-gray-500">
            {t("noAccount")}{" "}
            <a
              href="/auth/register"
              className="text-primary-500 font-medium hover:underline"
            >
              {t("createAccount")}
            </a>
          </p>
          <p className="text-sm text-gray-500">
            <a
              href="/auth/forgot-password"
              className="text-red-500 font-medium hover:underline"
            >
              {t("forgotPassword")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
