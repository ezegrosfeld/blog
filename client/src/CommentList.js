import React from "react";

export default ({ comments }) => {
  const renderComments = comments?.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    } else if (comment.status === "pending") {
      content = "Comment pending moderation";
    } else if (comment.status === "rejected") {
      content = "Comment rejected";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderComments}</ul>;
};
