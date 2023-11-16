import React, { useEffect } from "react";
import useStore from "../store";
import "./pokemon.css";

const Pokemon = () => {
  const { data, fetchData } = useStore();

  useEffect(() => {
    fetchData(generateRandomId);
  }, [fetchData]);

    const generateRandomId = () => {
      return Math.floor(Math.random() * 150) + 1;
    };

    const handleButtonClick = () => {
      const randomId = generateRandomId();
      console.log(randomId);
      fetchData(randomId);
    };

  return (
    <>
      <button onClick={handleButtonClick}>Pick a Pokemon Random</button>
      <article className="card">
        <p className="name-pokemon">{data.name}</p>
        <p className="type-pokemon">Tipo: {data.types[0].type.name}</p>
        <img
          src={data.sprites.other.dream_world.front_default}
          alt="imagen-del-pokemon"
        />
        <section className="card-stats">
          <section className="hp-stat">
            <p className="name-stat">Vida</p>
            <p>{data.stats[0].base_stat}</p>
          </section>
          <section className="attack-stat">
            <p className="name-stat">Ataque</p>
            <p>{data.stats[1].base_stat}</p>
          </section>
          <section className="defense-stat">
            <p className="name-stat">Defensa</p>
            <p>{data.stats[2].base_stat}</p>
          </section>
          <section className="speed-stat">
            <p className="name-stat">Velocidad</p>
            <p>{data.stats[5].base_stat}</p>
          </section>
        </section>
      </article>
    </>
  );
};

export default Pokemon;
