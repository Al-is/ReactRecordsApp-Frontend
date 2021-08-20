import { LoginForm, User } from "./../../types/user";
import { UserDispatch } from "../../types/user";
import api from "../../utils/api";

export const login = (creds: LoginForm) => async (dispatch: UserDispatch) => {
  dispatch({ type: "LOGİN_START" });
  try {
    const response = await api().post<User>("/users/login", creds);
    dispatch({ type: "LOGİN_SUCCESS", payload: response.data });
    localStorage.setItem("token", response.data.token);
  } catch {
    dispatch({ type: "LOGİN_ERROR" });
  }
};

export const isLoggIn = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "IS_LOGED_IN_START" });
  try {
    const response = await api().post<User>("/users/is_loged_in");
    dispatch({ type: "IS_LOGED_IN_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "IS_LOGED_IN_ERROR" });
  }
};

export const logout=() => async(dispatch:UserDispatch)=>{
  localStorage.removeItem("token")
  dispatch({type:"LOGOUT"});
}