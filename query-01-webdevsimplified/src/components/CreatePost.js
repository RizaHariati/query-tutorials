import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import { createPost } from "../api/posts";
import Post from "./Post";

const CreatePost = ({ setCurrentPage }) => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.setQueryData(["posts", data.id], data);
      queryClient.invalidateQueries(["posts"], { exact: true });
      setCurrentPage(<Post id={data.id} />);
      console.log("success");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostMutation.mutate({
      title: titleRef.current.value,
      body: bodyRef.current.value,
    });
  };
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            ref={titleRef}
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Insert Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <input
            ref={bodyRef}
            type="text"
            className="form-control"
            name="body"
            id="body"
            aria-describedby="bodyId"
            placeholder=" Insert post"
          />
        </div>
        <button type="submit" disabled={createPostMutation.isLoading}>
          {createPostMutation.isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
