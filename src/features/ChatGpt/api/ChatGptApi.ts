import OpenAI from "openai";
import { generateTravelPrompt } from "../consts/propmt";


export const chatResponse = async (message: string, openAiKey: string): Promise<string> => {
  const openai = new OpenAI({
    apiKey: openAiKey,
    dangerouslyAllowBrowser: true,
  });

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: generateTravelPrompt
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return (
      chatCompletion.choices[0].message?.content ||
      "죄송합니다. 응답을 생성하는 데 문제가 발생했습니다."
    );
  } catch (error) {
    console.log("response error", error);
    throw new Error("AI 응답을 생성하는 데 문제가 발생했습니다.");
  }
};