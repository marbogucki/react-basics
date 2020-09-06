import {
  FETCH_ARTICLES_PENDING,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
} from "./types";
import axios from "axios";
import { urlApi } from "../../../config/api";

const fetchArticlesPending = () => ({
  type: FETCH_ARTICLES_PENDING,
});

const fetchArticlesSuccess = (articles) => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles },
  };
};

const fetchArticlesError = (error) => ({
  type: FETCH_ARTICLES_ERROR,
  payload: { error },
});

export const fetchArticles = () => (dispatch) => {
  dispatch(fetchArticlesPending());

  setTimeout(() => {
    axios
      .get(`${urlApi}/articles`)
      .then((response) => response.data)
      .then((articles) => dispatch(fetchArticlesSuccess(articles)))
      .catch((error) => dispatch(fetchArticlesError(error.message)));
  }, 1000);
};
