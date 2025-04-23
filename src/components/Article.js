// src/components/Article.js
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  function getReadTime(minutes) {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const divisor = minutes < 30 ? 5 : 10;
    const count = Math.ceil(minutes / divisor);
    return emoji.repeat(count) + ` ${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {getReadTime(minutes)}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
