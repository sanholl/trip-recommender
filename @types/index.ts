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
export interface ChatResponseType {
  destination: string;
  recommendation: RecommendationType;
}
export interface RecommendationListProps {
  response: ChatResponseType;
}
export interface SelectListProps {
  onSelection: (who: string[], interest: string[]) => void;
}

export interface ErrorProps {
  message: string;
}