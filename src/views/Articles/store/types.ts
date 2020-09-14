import { Article } from "../models/Article";

export enum FetchArticles {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export type ArticlesLoading = boolean;

export type ArticlesError = string | undefined;

export interface ArticlesState {
  articles: Article[];
  loading: ArticlesLoading;
  error: ArticlesError;
}
