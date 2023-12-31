import "./App.css";

import PostList1 from "./components/PostList1";
import PostList2 from "./components/PostList2";
import { useState } from "react";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import PostListPaginated from "./components/PostListPaginated";
import PostListInfinite from "./components/PostListInfinite";
import { useQueryClient } from "@tanstack/react-query";
import { getPost2 } from "./api/posts";

function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);
  const queryClient = useQueryClient();
  function onHoverPostTwoLink() {
    queryClient.prefetchQuery({
      queryKey: ["posts", 1],
      queryFn: () => getPost2(1),
    });
    return;
  }
  return (
    <div>
      <h1>Tansack Query</h1>
      <div className="buttons">
        <button onClick={() => setCurrentPage(<PostList1 />)}>
          Post List 1
        </button>
        <button onClick={() => setCurrentPage(<PostList2 />)}>
          Post List 2
        </button>
        <button
          onMouseEnter={onHoverPostTwoLink}
          onClick={() => setCurrentPage(<Post id={1} />)}
        >
          First Post
        </button>
        <button
          onClick={() =>
            setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
          }
        >
          Create Post
        </button>
        <button onClick={() => setCurrentPage(<PostListPaginated />)}>
          Post List Paginated
        </button>
        <button onClick={() => setCurrentPage(<PostListInfinite />)}>
          Post List Infinite
        </button>
      </div>
      {currentPage}
    </div>
  );
}

export default App;

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
