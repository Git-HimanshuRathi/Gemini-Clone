import { GoogleGenerativeAI } from "@google/generative-ai";

class GeminiAPI {
    constructor() {
        this.apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!this.apiKey) {
            throw new Error("Missing Gemini API key. Please add VITE_GEMINI_API_KEY to your .env file");
        }

        this.genAI = new GoogleGenerativeAI(this.apiKey);
        
        // Use gemini-1.5-pro model which is confirmed to work
        this.model = this.genAI.getGenerativeModel({ 
            model: "gemini-1.5-pro",
            generationConfig: {
                temperature: 0.7,
                topP: 0.95,
                topK: 40,
                maxOutputTokens: 2048,
            }
        });
    }

    async generateResponse(prompt) {
        try {
            if (!prompt || typeof prompt !== 'string') {
                throw new Error('Invalid prompt. Please provide a non-empty string.');
            }

            // Use generateContent directly
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            return response.text();
        } catch (error) {
            console.error('Error generating response:', error);
            throw new Error(error.message || 'Failed to generate response');
        }
    }

    async generateImage(prompt) {
        try {
            // Use gemini-1.5-pro-vision for image generation
            const model = this.genAI.getGenerativeModel({ 
                model: "gemini-1.5-pro-vision",
                generationConfig: {
                    temperature: 0.7,
                    topP: 0.95,
                    topK: 40,
                    maxOutputTokens: 2048,
                }
            });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text();
        } catch (error) {
            console.error('Error generating image:', error);
            throw new Error(error.message || 'Failed to generate image');
        }
    }
}

// Create and export a single instance
const geminiAPI = new GeminiAPI();
export default geminiAPI;