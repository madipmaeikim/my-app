import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { authReducer } from '../reducers/authReducer';
import { clientReducer } from '../reducers/clientReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  clients: clientReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
