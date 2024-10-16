import { LOGIN, LOGOUT } from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  user: null,
  rememberMe: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const { user, rememberMe } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        user,
        rememberMe,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        rememberMe: false,
      };
    default:
      return state;
  }
};

export default authReducer;
