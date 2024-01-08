import axios from "axios";

export async function getItemById(itemId) {
  try {
    const response = await axios.get(`/api/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
}
