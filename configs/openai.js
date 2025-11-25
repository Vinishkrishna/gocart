import OpenAI from "openai"

export const openai = new OpenAI({
    apiKey: process.env.OPENAPI_API_KEY,
    baseURL: process.env.OPENAPI_BASE_URL
})