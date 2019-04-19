import architectsList from '../data/architects';

export const initialState = {
  currentArchitect: architectsList[0],
  architects: architectsList,
};

export function architectsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ARCHITECT':
      return { ...state, currentArchitect: action.payload };
    default:
      return state;
  }
}
