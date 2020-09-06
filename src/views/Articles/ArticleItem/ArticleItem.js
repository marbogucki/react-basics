import React from "react";

const ArticleItem = ({ article: { username, name, body } }) => (
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
