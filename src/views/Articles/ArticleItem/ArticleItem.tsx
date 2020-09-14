import React from "react";
import { ArticleItemProps } from "../models/Article";

const ArticleItem = ({
  article: { username, name, body },
}: ArticleItemProps) => (
  <div>
    <h3>{name}</h3>
    <p>{body}</p>
    <p>
      <em>{username}</em>
    </p>
    <hr />
  </div>
);

export default ArticleItem;
