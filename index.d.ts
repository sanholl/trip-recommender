declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module 'trip-recommender' {
  export const ChatResponse: React.FC<ChatResponseProps>;
  export const SelectList: React.FC<SelectListProps>;
  export const RecommendationList: React.FC<RecommendationListProps>;
  export const ChatLoading: React.FC;
  export const Error: React.FC<ErrorProps>;
}