import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Get the generative model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Create a chat session
export const startChat = async () => {
  const chat = model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 2048,
    },
  });
  return chat;
};

// Send a message to the chat
export const sendMessage = async (chat, message) => {
  try {
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}; 