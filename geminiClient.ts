import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function analyzeLog(log: string): Promise<string> {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
You are a senior developer AI assistant.

Analyze the error log below. Respond in a short, easy-to-understand format:
- Start with a short summary of the issue
- Give possible reasons
- Suggest a simple fix or two
- Keep the whole response under 10 lines
- Avoid technical jargon or lengthy explanations
---
${log}
---`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text().trim();
    } catch (error) {
        console.error("Gemini API error:", error);
        return "❌ Could not analyze the log.";
    }
}
