import axios from "axios";

export async function fetch_offered_products() {
  try {
    const prods = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}`);
    return prods.data;
  } catch (error: any) {
    return error?.response || error;
  }
}
