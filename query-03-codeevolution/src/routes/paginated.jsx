import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getColors } from "../utils/util";

const Paginated = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, data, isFetching } = useQuery({
    queryKey: ["colors", pageNumber],
    queryFn: () => getColors(pageNumber),
    keepPreviousData: true,
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
      <h1>Paginated</h1>
      {isFetching && <h2>Loading..</h2>}
      {data.map((color, index) => {
        return (
          <div key={index}>
            <h2 style={{ marginLeft: "20px" }}>
              {color.id}. {color.name}
            </h2>
          </div>
        );
      })}
      <div>
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((page) => page - 1)}
        >
          Previous
        </button>
        <button
          disabled={pageNumber === 4}
          onClick={() => setPageNumber((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginated;
