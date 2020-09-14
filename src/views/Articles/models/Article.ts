export type ArticleItemProps = {
  article: Omit<Article, "id">;
};

export type Article = {
  id: number;
  username: string;
  name: string;
  body: string;
};
