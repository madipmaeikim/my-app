const initialState = {
    clients: [],
    error: null,
  };
  
  export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CLIENT':
        return { ...state, clients: [...state.clients, action.payload] };
      case 'REMOVE_CLIENT':
        return { ...state, clients: state.clients.filter(client => client.id !== action.payload) };
      default:
        return state;
    }
  };
  