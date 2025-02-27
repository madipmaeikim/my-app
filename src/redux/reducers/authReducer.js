const initialState = {
    user: null,
    error: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, user: action.payload };
      case 'LOGIN_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  