import React, { useEffect, useState } from "react";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const gettingData = async () => {
      try {
        const fetchingData = await fetch("http://localhost:4000/superheroes");
        const dataFetched = await fetchingData.json();

        setData(dataFetched);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    gettingData();
  }, []);

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
      <h1>Super Heroes</h1>
      {data.map((item) => {
        const { id, name, alterEgo } = item;
        return (
          <div key={id} className="superheroes">
            <h3>Name : {name}</h3>
            <h3>Alter Ego : {alterEgo}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default SuperHeroes;
