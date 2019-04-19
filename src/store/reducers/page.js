export const initialState = {
  language: 'eng',
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
}
