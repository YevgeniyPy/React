export const setLanguage = language => async (dispatch) => {
  dispatch({ type: 'SET_LANGUAGE', payload: language });
};
