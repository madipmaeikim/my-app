import authReducer from './authReducer';
import clientReducer from './clientReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  clients: clientReducer,
  stats: statsReducer
});

export default rootReducer;
