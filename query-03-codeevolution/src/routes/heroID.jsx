import React from "react";
import { useParams } from "react-router-dom";
import { useSingleHeroesData } from "../hooks/useSingleHeroesData";

const Heroes = () => {
  const { heroID } = useParams();

  const { isLoading, isError, data, refetch, isFetching } =
    useSingleHeroesData(heroID);

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
  const { name, alterEgo } = data;
  return (
    <div>
      <h1>RQ Super Heroes</h1>

      <div className="superheroes">
        <div>
          <h3>Name : {name}</h3>
        </div>
        <h3>Alter Ego : {alterEgo}</h3>
      </div>
    </div>
  );
};

export default Heroes;
