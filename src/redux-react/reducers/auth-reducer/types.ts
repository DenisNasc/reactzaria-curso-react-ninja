import {Action} from 'redux';

export type user = {
  name: string;
  uid: string;
};

type stateController = {
  start: boolean;
  success: boolean;
  fail: boolean;
};

export interface AuthReducerState {
  errorMessage: string;
  user?: null | user;
  login: stateController;
  logout: stateController;
}

export type authReducerActionPayload = {
  errorMessage: string;
  user?: null | user;
};

export interface AuthReducerAction extends Action<string> {
  payload?: authReducerActionPayload;
}
