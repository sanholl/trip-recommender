declare module 'trip-recommender' {
  export interface ChatResponseProps {
    keyword: string;
    openAiKey: string;
  }
  export const ChatResponse: React.FC<ChatResponseProps>;
}