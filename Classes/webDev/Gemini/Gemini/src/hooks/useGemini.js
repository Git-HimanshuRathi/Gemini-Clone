import { useState, useCallback } from 'react';
import geminiAPI from '../config/gemini';

export const useGemini = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [resultText, setResultText] = useState('');

  const generateResponse = useCallback(async (userInput) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      console.log("Prompt sent to Gemini:", userInput);

      const response = await geminiAPI.generateResponse(userInput);
      setResultText(response);

      return response;
    } catch (e) {
      console.log("Something went wrong with Gemini API:", e);

      let errText = 'Failed to generate response';

      if (e.message) {
        errText = e.message;

        if (e.message.includes('API key')) {
          errText = 'API key seems to be invalid or missing.';
        } else if (e.message.includes('model')) {
          errText = 'There might be a model issue. Check API docs.';
        } else if (e.message.includes('404')) {
          errText = 'Couldn’t find the API endpoint. Double-check URL or key access.';
        }
      }

      setErrorMessage(errText);
      throw new Error(errText);
    } finally {
      setLoading(false);
    }
  }, []);

  const generateImage = useCallback(async (text) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await geminiAPI.generateImage(text);
      setResultText(response);
      return response;
    } catch (e) {
      console.log("Image generation error:", e);

      let errText = 'Something went wrong generating image';

      if (e.message) {
        errText = e.message;

        if (e.message.includes('API key')) {
          errText = 'API key seems to be invalid or missing.';
        } else if (e.message.includes('model')) {
          errText = 'Model config seems wrong. Check docs maybe.';
        } else if (e.message.includes('404')) {
          errText = 'Couldn’t reach image endpoint. Check URL or access.';
        }
      }

      setErrorMessage(errText);
      throw new Error(errText);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading: loading,
    error: errorMessage,
    response: resultText,
    generateResponse: generateResponse,
    generateImage: generateImage,
  };
};
