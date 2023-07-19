import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getColors } from "../utils/util";

const Infinite = () => {
  const {
    isLoading,
    isError,
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["colors"],
    queryFn: ({ pageParam = 1 }) => getColors(pageParam),

    getNextPageParam: (_lastPage, pages) => {
      if (pages.length <= 4) {
        return pages.length + 1;
      } else {
        return;
      }
    },
  });

  if (isLoading) {
    return (
      <div>
        <h2> Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2> Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Infinite</h1>

      {data?.pages.map((group, index) => {
        return (
          <div key={index}>
            {group.map((color) => {
              return (
                <h2 style={{ marginLeft: "20px" }}>
                  {color.id}. {color.name}
                </h2>
              );
            })}
          </div>
        );
      })}
      <div>
        {/* <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((page) => page - 1)}
        >
          Previous
        </button> */}
        <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          Next
        </button>
      </div>
      {isFetchingNextPage && <h2>Loading..</h2>}
    </div>
  );
};

export default Infinite;
