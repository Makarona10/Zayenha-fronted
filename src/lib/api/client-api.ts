import Cookies from "js-cookie";
import { createApiInstance } from "./api-factory";

const getClientApi = () => {
  const token = Cookies.get("access_token");
  const locale = Cookies.get("NEXT_LOCALE") || "ar";

  return createApiInstance(token, locale);
};

export const clientApi = getClientApi();
