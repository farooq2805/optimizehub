import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedStrategy } from "../types";

// Initialize with the specific API key for this project
const ai = new GoogleGenAI({ apiKey: "AIzaSyA5Hjbs8ZSs_9unxlmnmrg1_Ab4e-y_wd4" });

export const generateMarketingStrategy = async (
  businessName: string,
  industry: string,
  targetAudience: string,
  marketingProblem: string
): Promise<GeneratedStrategy> => {
  try {
    const prompt = `
      Act as a world-class Digital Marketing Strategist.
      Create a concise, high-impact 3-point digital marketing strategy for a business with the following details:
      
      Business Name: ${businessName}
      Industry: ${industry}
      Target Audience: ${targetAudience}
      Current Marketing Challenge: ${marketingProblem}

      Focus on specific, actionable solutions that directly address their stated challenge.
      Prioritize high-ROI activities suitable for a competitive market.
      Keep the tone professional, visionary, and persuasive.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A catchy title for the strategy proposal" },
            points: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 strategic bullet points solving their specific problem"
            }
          },
          required: ["title", "points"]
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("No response from AI");
    }

    return JSON.parse(jsonText) as GeneratedStrategy;

  } catch (error) {
    console.error("Error generating strategy:", error);
    return {
      title: "Strategy Generation Failed",
      points: ["Please try again later.", "Ensure your inputs are valid.", "Contact us for a manual consultation."]
    };
  }
};