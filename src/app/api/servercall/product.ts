import { serverAxios } from "@/config/AxiosConfig";

export async function getProductList() {
  try {
    const response = await serverAxios.get(`/api/new-products/`);
    return response;
  } catch (error) {
    console.log(error)
  }
}

export async function getOrderList() {
  try {
    const response = await serverAxios.get(`/api/user-orders/`);
    return response;
  } catch (error) {
    console.log(error)
  }
}

