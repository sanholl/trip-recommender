import { PlaceAction, PlaceState, PlaceType } from "trip-recommender";


export const placeReducer = (state: PlaceState, action: PlaceAction): PlaceState => {
  switch (action.type) {
    case 'SET_PLACE':
      return { ...state, selectedPlace: action.payload };
    case 'CLEAR_PLACE':
      return { ...state, selectedPlace: null };
    default:
      return state;
  }
};