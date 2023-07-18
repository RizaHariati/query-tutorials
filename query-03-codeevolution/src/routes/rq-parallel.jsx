import { useQueries } from "@tanstack/react-query";
import React from "react";
import { getData2 } from "../util";

const RqParallel = ({ arrayIds }) => {
  const queries = useQueries({
    queries: arrayIds.map((id) => {
      return {
        queryKey: ["data", id],
        queryFn: () => getData2(id),
      };
    }),
  });

  return (
    <div>
      <h1>RqParallel</h1>
      {queries.map(({ isLoading, data }, index) => {
        return (
          <div key={index}>
            {isLoading && <h2>Loading...</h2>}
            {!isLoading && (
              <div>
                <h2>{data.name}</h2>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RqParallel;
