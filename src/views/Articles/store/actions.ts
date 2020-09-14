import { FetchArticles, ArticlesError } from "./types";
import axios from "axios";
import { urlApi } from "../../../config/api";
import { Article } from "../models/Article";

const fetchArticlesPending = () => ({
  type: FetchArticles.PENDING,
});

const fetchArticlesSuccess = (articles: Article[]) => {
  return {
    type: FetchArticles.SUCCESS,
    payload: { articles },
  };
};

const fetchArticlesError = (error: ArticlesError) => ({
  type: FetchArticles.ERROR,
  payload: { error },
});

export const fetchArticles = () => (dispatch: Function) => {
  dispatch(fetchArticlesPending());

  setTimeout(() => {
    axios
      .get(`${urlApi}/articles`)
      .then((response) => response.data)
      .then((articles) => dispatch(fetchArticlesSuccess(articles)))
      .catch((error) => dispatch(fetchArticlesError(error.message)));
  }, 1000);
};
