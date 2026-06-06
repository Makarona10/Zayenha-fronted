import { cookies } from "next/headers";
import { createApiInstance } from "./api-factory";

export const serverApi = async (localeParam?: string) => {
  const cookieStore = cookies();

  const token = cookieStore.get("access_token")?.value;

  const finalLocale = localeParam || "en";

  return createApiInstance(token, finalLocale);
};
