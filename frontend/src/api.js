import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000"; // Adjust this if your Flask backend runs on a different port

export const sendMessageToChatbot = async (message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chat`, { message });
    return response.data.response; // Extracts the chatbot's response
  } catch (error) {
    console.error("Error communicating with chatbot:", error);
    return "Sorry, I couldn't process that request.";
  }
};