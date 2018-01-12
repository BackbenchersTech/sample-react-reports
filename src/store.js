import { createStore, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';

const reducers = combineReducers({
    loggedUserState: loginReducer
})

const store = createStore(reducers);

export default store;