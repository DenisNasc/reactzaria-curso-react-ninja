import {combineReducers} from 'redux';
import authReducer from 'redux-react/reducers/auth-reducer';

const reducers = {authReducer};

const rootReducer = combineReducers(reducers);

export default rootReducer;
