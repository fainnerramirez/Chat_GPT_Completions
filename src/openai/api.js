
import OpenAI from "openai";

const API_KEY = process.env.REACT_APP_API_KEY

const openai = new OpenAI({
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true
});

export const getResponseQuestion = async (question) => {

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        max_tokens: 1000,
        messages: [
            { "role": "system", "content": "Eres un asistente útil que responde de manera elegante, detallada y muy amigable " },
            { "role": "user", "content": question }
        ],
        stream: true,
    });

    return completion;
}