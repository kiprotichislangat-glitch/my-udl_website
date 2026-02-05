
import { GoogleGenAI } from "@google/genai";
import { DOCUMENT_CONTENT } from "../constants";

export async function askAIAssistant(question: string): Promise<string> {
  try {
    // Correct initialization: always use process.env.API_KEY directly as per SDK requirements.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert UDL and IB Design education consultant. Use the following document summary to answer the user question:
      
      DOCUMENT SUMMARY:
      ${DOCUMENT_CONTENT}
      
      USER QUESTION:
      ${question}`,
      config: {
        systemInstruction: "Keep answers concise, professional, and based purely on the document provided. Use a friendly tone.",
      },
    });

    // Directly access the .text property from GenerateContentResponse
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Error contacting AI service. Please try again.";
  }
}