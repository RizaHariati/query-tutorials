import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { getPost, getPost2, getUser } from "../api/posts";

const PostList1 = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
  });

  const queries = useQueries({
    queries: (postQuery?.data ? postQuery?.data : []).map((post) => {
      return {
        queryKey: ["posts", post.id],
        queryFn: () => getPost2(post.id),
      };
    }),
  });

  if (postQuery.status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }

  return (
    <div>
      <h1>PostList1</h1>
      <ol>
        {queries.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item?.data?.title}</h3>
              <p>{item?.data?.body}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default PostList1;
