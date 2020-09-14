import { ArticlesState, ArticlesLoading, ArticlesError } from "./types";
import { Article } from "../models/Article";

type GetArticles = (state: ArticlesState) => Article[];
type GetLoading = (state: ArticlesState) => ArticlesLoading;
type GetError = (state: ArticlesState) => ArticlesError;

export const getArticles: GetArticles = ({ articles }: ArticlesState) =>
  articles;
export const getLoading: GetLoading = ({ loading }: ArticlesState) => loading;
export const getError: GetError = ({ error }: ArticlesState) => error;
