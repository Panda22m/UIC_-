import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Challenge, GeneratorOptions } from "../types";

const apiKey = process.env.API_KEY;
const ai = new GoogleGenAI({ apiKey });

const challengeSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    challenges: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "A catchy title for the challenge" },
          description: { type: Type.STRING, description: "A brief, inspiring description of what to do" },
          target: { type: Type.STRING, enum: ["Individual", "Group"], description: "Target audience" },
          difficulty: { type: Type.STRING, enum: ["Easy", "Medium", "Hard"] },
          impact: { type: Type.STRING, description: "The environmental or social impact of completing this challenge" },
          duration: { type: Type.STRING, description: "Suggested duration (e.g., '1 week', '1 day')" },
          category: { type: Type.STRING, description: "Category like 'Environment', 'Social', 'Governance'" },
          actionItems: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "3-5 specific actionable steps to complete the challenge" 
          }
        },
        required: ["title", "description", "target", "difficulty", "impact", "duration", "category", "actionItems"]
      }
    }
  }
};

export const generateChallenges = async (options: GeneratorOptions): Promise<Challenge[]> => {
  try {
    const prompt = `
      Create 3 unique, engaging, and actionable ESG (Environmental, Social, Governance) challenges.
      
      Target Audience: ${options.target === 'Individual' ? 'An individual person' : 'A company, team, or organization'}
      ${options.theme ? `Focus Theme: ${options.theme}` : 'Theme: General ESG sustainability'}
      ${options.difficulty ? `Difficulty Level: ${options.difficulty}` : ''}
      
      Language: Korean (The response must be in Korean).
      
      Ensure the challenges are practical, measurable, and inspiring.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: challengeSchema,
        systemInstruction: "You are an expert ESG consultant helping people and companies adopt sustainable habits. Generate high-quality, actionable challenges.",
      },
    });

    const result = JSON.parse(response.text || "{}");
    return result.challenges || [];
  } catch (error) {
    console.error("Error generating challenges:", error);
    throw error;
  }
};
