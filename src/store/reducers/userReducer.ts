import { User, UserState, UserAction } from "./../../types/user";

const defaultState: UserState = {
  data: {} as User,
  loading: false,
  error: "",
};

const userReducer = (state: UserState = defaultState, action: UserAction) => {
  switch (action.type) {
    case "LOGİN_START":
    case "IS_LOGED_IN_START":
      return { ...state, loading: true, error: "" };
    case "LOGİN_SUCCESS":
    case "IS_LOGED_IN_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "LOGİN_ERROR":
      return { ...state, loading: false, error: "Login failed" };
    case "IS_LOGED_IN_ERROR":
      return { ...state, loading: false, error: "Token missing or invalid" };
    case "LOGOUT":
      return { ...state, data: {} as User };
    default:
      return state;
  }
};
// reducer bir fonksiyondur state ve action'ı parametre alır her zaman state döndürür

export default userReducer;
