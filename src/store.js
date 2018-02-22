import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './reducers/loginReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    loggedUserState: loginReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;