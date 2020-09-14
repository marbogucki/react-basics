import { FetchArticles, ArticlesState } from "./types";

type ArticlesAction = {
  type: FetchArticles;
  payload: ArticlesState;
};

const articlesInitialState: ArticlesState = {
  articles: [],
  loading: false,
  error: undefined,
};

const articleReducer = (
  state: ArticlesState = articlesInitialState,
  { type, payload }: ArticlesAction
): ArticlesState => {
  switch (type) {
    case FetchArticles.PENDING:
      return {
        ...state,
        loading: true,
      };

    case FetchArticles.SUCCESS:
      return {
        ...state,
        loading: false,
        articles: payload.articles,
      };

    case FetchArticles.ERROR:
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
