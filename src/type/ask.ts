export interface ChatAskMessage{
    role: 'system' | 'user' | 'assistant'
    content: string
}
export interface ChatAskItem{
    model: "gpt-3.5-turbo",
    messages: ChatAskMessage[],
    temperature: 0.6,
    stream: true,
}

export interface ChatImageItem{
    prompt: string,
    n: 4,
    size:"1024x1024"
}