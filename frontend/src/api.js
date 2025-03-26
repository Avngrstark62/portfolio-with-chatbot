import axios from "axios";

const API_BASE_URL = "https://portfolio-with-chatbot-chatbot-service.onrender.com";

export const sendMessageToChatbot = async (message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chat`, { message });
    return response.data.response; // Extracts the chatbot's response
  } catch (error) {
    console.error("Error communicating with chatbot:", error);
    return "Sorry, I couldn't process that request.";
  }
};