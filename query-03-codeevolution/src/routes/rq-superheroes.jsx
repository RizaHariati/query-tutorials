import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getData } from "../util";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

const RqSuperheroes = () => {
  const { isLoading, isError, data, refetch, isFetching } =
    useSuperHeroesData();

  //   const { isLoading, isError, data, refetch } = useQuery({
  //     queryKey: ["data"],
  //     queryFn: getData,
  //     enabled: false,
  //     select: (data) => data.map((hero) => hero.name),
  //   });

  return (
    <div>
      <h1>RQ Super Heroes</h1>
      {isLoading && (
        <div>
          <h2> </h2>
        </div>
      )}
      {isError && (
        <div>
          <h2> Error...</h2>
        </div>
      )}
      <button onClick={() => refetch()}>Fetch</button>
      {isFetching && (
        <div>
          <h2>Fetching </h2>
        </div>
      )}
      {!isLoading &&
        !isError &&
        data.map((item) => {
          const { id, name, alterEgo } = item;
          return (
            <div key={id} className="superheroes">
              <h2>No.{id}</h2>
              <Link to={`/rq-superheroes/${id}`}>
                <h3>Name : {name}</h3>
              </Link>
              <h3>Alter Ego : {alterEgo}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default RqSuperheroes;
