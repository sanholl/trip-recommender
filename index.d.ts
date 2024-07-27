declare module '*.png';
declare module '*.gif';
declare module 'trip-recommender' {
import { ChatLoading } from './src/features/ChatGpt/ui/ChatLoading/index';
import { RecommendationList } from './src/features/ChatGpt/ui/RecommendationList/index';
import { Error } from './src/shared/ui/Error/index';
  export interface ChatResponseProps {
    keyword: string;
    openAiKey: string;
  }
  export interface TripActivity {
    placeType: string;
    name: string;
    description: string;
    location: string;
    recommendedMenu?: string;
    link: string;
  }
  export interface RecommendationType {
    tripType: string;
    tripStyle: string;
    tripActivities: TripActivity[];
  }
  export interface RecommendationListProps {
    recommendation: RecommendationType;
  }
  export interface SelectListProps {
    onSelection: (who: string[], interest: string[]) => void;
  }
  export interface ChatResponseType {
    destination: string;
    recommendation: RecommendationType;
  }

  export interface ErrorProps {
    message: string;
  }

  export const ChatResponse: React.FC<ChatResponseProps>;
  export const SelectList: React.FC<SelectListProps>;
  export const RecommendationList: React.FC<RecommendationListProps>;
  export const ChatLoading: React.FC;
  export const Error: React.FC<ErrorProps>;
}