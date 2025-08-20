import { useTranslations } from "next-intl";

const Register = () => {
  const t = useTranslations("Register");

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-primary-100 via-primary-200 to-primary-400">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-8 text-primary-500">
          {t("title")}
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              {t("nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              placeholder={t("namePlaceholder")}
            />
          </div>

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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              {t("confirmPasswordLabel")}
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              placeholder={t("confirmPasswordPlaceholder")}
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
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            {t("haveAccount")}{" "}
            <a
              href="/login"
              className="text-primary-500 font-medium hover:underline"
            >
              {t("login")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
