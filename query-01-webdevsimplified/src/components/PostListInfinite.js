import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getPostPaginated } from "../api/posts";

const PostListInfinite = () => {
  const {
    isLoading,
    isError,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts", "infinite"],
    getNextPageParam: (prevData) => {
      if (prevData.next !== 0) {
        return prevData.next;
      } else {
        return false;
      }
    },
    queryFn: ({ pageParam = 1 }) => getPostPaginated(pageParam),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>error nih</h1>;
  }

  return (
    <div>
      <h1> PostListInfinite</h1>
      {data.pages.map((item) => {
        const { title, id, body } = item.data;
        return (
          <div key={id} style={{ marginBottom: "10px" }}>
            <h3>{title}</h3>
            <p> {body}</p>
          </div>
        );
      })}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "loading..." : "fetch"}
        </button>
      )}
    </div>
  );
};

export default PostListInfinite;
