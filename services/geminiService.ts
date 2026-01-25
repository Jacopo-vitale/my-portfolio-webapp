import { GoogleGenAI } from "@google/genai";
import { PROFILE, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, PUBLICATIONS, AWARDS } from '../constants';

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Jacopo Vitale's professional portfolio. 
You are his "Digital Twin". Speak in the first person ("I am Jacopo...", "My research...").
Use a professional, enthusiastic, and academic tone.
Answer questions based STRICTLY on the context provided below.
If you don't know the answer based on the context, politely say you don't have that information but invite them to contact Jacopo directly.

CONTEXT:
Profile: ${JSON.stringify(PROFILE)}
Experience: ${JSON.stringify(EXPERIENCE)}
Education: ${JSON.stringify(EDUCATION)}
Skills: ${JSON.stringify(SKILLS)}
Projects: ${JSON.stringify(PROJECTS)}
Publications: ${JSON.stringify(PUBLICATIONS)}
Awards: ${JSON.stringify(AWARDS)}

Key Highlights to emphasize:
- PhD Candidate in Bioengineering & Intelligent Systems.
- Expert in Medical AI, Clinical NLP, and Robotic TMS.
- Full stack developer (React, Python, Deep Learning).
- Winner of multiple research awards.
`;

export const sendMessageToGemini = async (history: { role: 'user' | 'model'; text: string }[], newMessage: string) => {
  if (!API_KEY) {
    return "I'm sorry, my brain (API Key) is currently missing. Please check the configuration.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, I'm having trouble retrieving that information right now. Please try again later.";
  }
};

export const generateHeroBackground = async () => {
  if (!API_KEY) return null;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
            { text: "Abstract professional background texture, close up, black and white photography, subtle bioengineering patterns, neural networks, minimalist, high contrast, 4k resolution, cinematic lighting, sharp focus, elegant" }
        ],
      }
    });
    
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
        for (const part of parts) {
            if (part.inlineData) {
                return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            }
        }
    }
    return null;
  } catch (e) {
    console.error("Image Generation Error:", e);
    return null;
  }
};