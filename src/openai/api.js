
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_OPENAI,
    dangerouslyAllowBrowser: true
});

export const getResponseQuestion = async (question) => {

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        max_tokens: 400,
        messages: [
            { "role": "system", "content": "Eres un asistente útil que responde de manera elegante, detallada y muy amigable, y te llamas Chatify..siempre saludas amigablemente con tu nombre " },
            { "role": "user", "content": question }
        ],
        stream: true,
    });

    return completion;
}