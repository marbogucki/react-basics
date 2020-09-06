import {
  FETCH_ARTICLES_PENDING,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
} from "./types";

const articlesInitialState = {
  articles: [],
  loading: false,
  error: undefined,
};

const articleReducer = (state = articlesInitialState, { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLES_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: payload.articles,
      };

    case FETCH_ARTICLES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default articleReducer;
