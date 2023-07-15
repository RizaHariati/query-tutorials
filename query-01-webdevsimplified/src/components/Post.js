import React from "react";
import { getPost2, getUser } from "../api/posts";
import { useQuery } from "@tanstack/react-query";

const Post = ({ id }) => {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost2(id),
  });

  const userQuery = useQuery({
    queryKey: ["users", postQuery?.data?.userId],
    enabled: postQuery?.data?.userId ? true : false,
    queryFn: () => getUser(userId),
  });

  if (postQuery.status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }
  const { userId, title, body } = postQuery.data;
  return (
    <div>
      <h1>{title}</h1>
      {postQuery?.data?.userId ? (
        <h3> by {userQuery?.data?.name}</h3>
      ) : (
        <p>no name</p>
      )}
      <h3>{body}</h3>
    </div>
  );
};

export default Post;
