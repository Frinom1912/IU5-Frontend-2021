import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import { userReducer } from '../reducers/userReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    user: userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>