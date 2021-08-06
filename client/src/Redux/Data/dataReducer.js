import {
  FETCH_DATA_SUCCESS,
  CREATE_LECTURE_SUCCESS,
  FETCH_LECTURE_SUCCESS,
  ZOIN_LECTURE_SUCCESS,
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
        lectures: payload.data,
      };
    }

    case FETCH_LECTURE_SUCCESS: {
      return {
        ...state,
        lecture: payload.data,
      };
    }

    // case CREATE_TEACHER_SUCCESS: {
    //   return {
    //     ...state,

    //     lectures: [...state.lectures, payload],
    //   };
    // }

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

    default: {
      return state;
    }
  }
};
