

// For Node.js or projects using a bundler (like Webpack/Vite)
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (replace with your actual key or environment variable)
const API_KEY = "AIzaSyAEHHhBAyorrkgxLK2cYEt1NfnHSQiXPCQ"; // <<< Replace with your actual API key

async function runGenerativeAI(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

//const prompt = "Write a short, engaging story about a brave squirrel.";

  try {
    const result = await model.generateContent(prompt);
    const response =  result.response;
    const text = response.text();
    console.log(text);
   return response.text();
  } catch (error) {
    console.error("Error generating content:", error);
  }

}

export default runGenerativeAI;