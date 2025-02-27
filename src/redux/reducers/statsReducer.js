const initialState = {
    stats: [],
    error: null,
  };
  
  export const statsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_STATS_SUCCESS':
        return { ...state, stats: action.payload };
      default:
        return state;
    }
  };
  