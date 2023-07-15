import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getPostPaginated } from "../api/posts";

const PostListPaginated = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data, isPreviousData } = useQuery({
    queryKey: ["posts", { page }],
    keepPreviousData: true,
    queryFn: () => getPostPaginated(page),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>error nih</h1>;
  }

  return (
    <div>
      <h1>Post List Paginated</h1>
      <small>{isPreviousData && "Previous Data"}</small>
      <ul>
        <li>title: {data.data.title}</li>
        <li>body: {data.data.body}</li>
      </ul>
      <div className="buttons">
        <button
          hidden={!data.previous}
          onClick={() => {
            setPage(data.previous);
          }}
        >
          Previous
        </button>
        <button
          hidden={!data.next}
          onClick={() => {
            setPage(data.next);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostListPaginated;
