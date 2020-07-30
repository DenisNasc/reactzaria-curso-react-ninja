import {Reducer} from 'redux';
import * as authReducerActions from 'redux-react/actions/auth-reducer';

import {AuthReducerAction, AuthReducerState} from './types';

const initialState: AuthReducerState = {
  errorMessage: '',
  user: null,
  login: {
    start: false,
    success: false,
    fail: false,
  },
  logout: {
    start: false,
    success: false,
    fail: false,
  },
};

const defaultErrorMessage = 'um erro inesperado aconteceu!';

const authReducer: Reducer<AuthReducerState, AuthReducerAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case authReducerActions.LOGIN_START: {
      const controller = {start: true, success: false, fail: false};
      return {...state, login: controller, errorMessage: ''};
    }
    case authReducerActions.LOGIN_SUCCESS: {
      const controller = {start: false, success: true, fail: false};
      return {...state, login: controller, errorMessage: '', user: action.payload?.user};
    }
    case authReducerActions.LOGIN_FAIL: {
      const controller = {start: false, success: false, fail: true};
      const errorMessage = action.payload?.errorMessage || defaultErrorMessage;

      return {...state, login: controller, errorMessage};
    }

    case authReducerActions.LOGOUT_START: {
      const controller = {start: true, success: false, fail: false};
      return {...state, logout: controller, errorMessage: ''};
    }
    case authReducerActions.LOGOUT_SUCCESS: {
      const controller = {start: false, success: true, fail: false};
      return {...state, logout: controller, errorMessage: '', user: null};
    }
    case authReducerActions.LOGOUT_FAIL: {
      const controller = {start: false, success: false, fail: true};
      const errorMessage = action.payload?.errorMessage || defaultErrorMessage;

      return {...state, logout: controller, errorMessage};
    }

    default: {
      return {...state};
    }
  }
};

export default authReducer;
