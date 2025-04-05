import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

let chatSession;

export const initializeChat = async () => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  chatSession = model.startChat({
    history: [],
    generationConfig: {
      temperature: 0.9,
    },
    systemInstruction: {
      parts: [
        {
          text: `You are a gentle, supportive emotional support companion.
Always respond with empathy and encouragement.
Use warm and reassuring language.
Avoid technical or factual responses unless asked directly.
Keep your tone calm, positive, and understanding.
If someone expresses distress, validate their feelings.`,
        },
      ],
    },
  });
};

export const getGeminiResponse = async (userMessage) => {
  if (!chatSession) await initializeChat();
  const result = await chatSession.sendMessage(userMessage);
  return result.response.text();
};
