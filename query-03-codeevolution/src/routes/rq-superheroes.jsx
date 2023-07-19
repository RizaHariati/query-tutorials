import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getData } from "../utils/util";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

const RqSuperheroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { isLoading, isError, data, refetch, isFetching } =
    useSuperHeroesData();

  const { mutate: addHero } = useAddSuperHeroData();
  const handleSubmit = (e) => {
    e.preventDefault();
    addHero({ name, alterEgo });
    setName("");
    setAlterEgo("");
  };

  return (
    <div>
      <h1>RQ Super Heroes</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="alterego" className="form-label">
            Alter Ego
          </label>
          <input
            type="text"
            className="form-control"
            name="alterego"
            id="alterego"
            placeholder="alterego"
            value={alterEgo}
            onChange={(e) => setAlterEgo(e.target.value)}
          />
        </div>
        <button type="submit">Add Hero</button>
      </form>
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
      {/* <button onClick={() => refetch()}>Fetch</button> */}
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
