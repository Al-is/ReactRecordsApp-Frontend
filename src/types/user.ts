import { ThunkDispatch } from "redux-thunk";

export interface User {
  message: string;
  username: string;
  email: string;
  fullname: string;
  token: string;
}

export interface LoginForm {
  username: string;
  password: string;
}

export interface UserState {
  data: User;
  loading: Boolean;
  error: string;
}

interface LOGİN_START {
  type: "LOGİN_START";
}

interface LOGİN_SUCCESS {
  type: "LOGİN_SUCCESS";
  payload: User;
}
interface LOGİN_ERROR {
  type: "LOGİN_ERROR";
}

interface IS_LOGED_IN_START {
  type: "IS_LOGED_IN_START";
}

interface IS_LOGED_IN_SUCCESS {
  type: "IS_LOGED_IN_SUCCESS";
  payload: User;
}
interface IS_LOGED_IN_ERROR {
  type: "IS_LOGED_IN_ERROR";
}

interface LOGOUT {
  type: "LOGOUT";
}

export type UserAction =
  | LOGİN_START
  | LOGİN_SUCCESS
  | LOGİN_ERROR
  | IS_LOGED_IN_START
  | IS_LOGED_IN_SUCCESS
  | IS_LOGED_IN_ERROR
  | LOGOUT;
export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;
