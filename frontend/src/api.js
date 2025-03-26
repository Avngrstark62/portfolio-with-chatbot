import axios from "axios";

const API_BASE_URL = "/api";

export const sendMessageToChatbot = async (message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chat`, { message });
    return response.data.response;
  } catch (error) {
    console.error("Error communicating with chatbot:", error);
    return "Sorry, I couldn't process that request.";
  }
};