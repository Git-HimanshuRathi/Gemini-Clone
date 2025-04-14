import { useState, useCallback } from 'react';
import geminiAPI from '../config/gemini';

export const useGemini = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState('');

    const generateResponse = useCallback(async (prompt) => {
        try {
            setLoading(true);
            setError(null);
            
            // Log the prompt for debugging
            console.log("Sending prompt to Gemini API:", prompt.substring(0, 50) + "...");
            
            const result = await geminiAPI.generateResponse(prompt);
            setResponse(result);
            return result;
        } catch (err) {
            console.error("Gemini API Error:", err);
            
            // Provide more specific error messages
            let errorMessage = err.message || 'Failed to generate response';
            
            if (errorMessage.includes("API key")) {
                errorMessage = "API key error. Please check your environment variables.";
            } else if (errorMessage.includes("model")) {
                errorMessage = "Model configuration error. Please check the API documentation.";
            } else if (errorMessage.includes("404")) {
                errorMessage = "API endpoint not found. The model may not be available in your region or with your API key.";
            }
            
            setError(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    }, []);

    const generateImage = useCallback(async (prompt) => {
        try {
            setLoading(true);
            setError(null);
            const result = await geminiAPI.generateImage(prompt);
            setResponse(result);
            return result;
        } catch (err) {
            console.error("Gemini API Error:", err);
            
            // Provide more specific error messages
            let errorMessage = err.message || 'Failed to generate image';
            
            if (errorMessage.includes("API key")) {
                errorMessage = "API key error. Please check your environment variables.";
            } else if (errorMessage.includes("model")) {
                errorMessage = "Model configuration error. Please check the API documentation.";
            } else if (errorMessage.includes("404")) {
                errorMessage = "API endpoint not found. The model may not be available in your region or with your API key.";
            }
            
            setError(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        error,
        response,
        generateResponse,
        generateImage,
    };
}; 