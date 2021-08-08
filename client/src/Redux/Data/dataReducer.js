import {
  FETCH_DATA_SUCCESS,
  CREATE_LECTURE_SUCCESS,
  FETCH_LECTURE_SUCCESS,
  ZOIN_LECTURE_SUCCESS,
  DELETE_POST,
} from "./actionTypes";

const init = {
  lectures: [],
  lecture: {},
};

export const dataReducer = (state = init, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        lectures: payload,
      };
    }

    case FETCH_LECTURE_SUCCESS: {
      return {
        ...state,
        lecture: payload.data,
      };
    }

    case CREATE_LECTURE_SUCCESS: {
      return {
        ...state,
        lectures: [...state.lectures, payload],
      };
    }

    case ZOIN_LECTURE_SUCCESS: {
      return {
        ...state,
        lectures: payload,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        lectures: state.lectures.filter((p) => p._id !== payload),
      };
    }

    default: {
      return state;
    }
  }
};
