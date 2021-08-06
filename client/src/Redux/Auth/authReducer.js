import { AUTH, LOGOUT } from "./actionTypes";

const init = {
  authData: null,
};

export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case AUTH: {
      console.log(payload);
      localStorage.setItem("profile", JSON.stringify(payload));
      return {
        ...state,
        authData: payload,
      };
    }
    case LOGOUT: {
      localStorage.clear();
      return {
        ...state,
        authData: null,
      };
    }

    default: {
      return state;
    }
  }
};
