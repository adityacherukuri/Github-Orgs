import {
  SEARCH_ORGANIZATIONS,
  GET_ORGANIZATION,
  GET_REPOS,
  CLEAR_ORGANIZATIONS,
  SET_LOADING,
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SEARCH_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload,
        loading: false,
      };
    case GET_ORGANIZATION:
      return {
        ...state,
        organization: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_ORGANIZATIONS:
      return {
        ...state,
        organizations: [],
        loading: false,
      };
    default:
      return state;
  }
};
