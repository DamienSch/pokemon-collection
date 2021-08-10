import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import CardItem from '../../molecules/cardItem/CardItem';

function CardList() {
  const [basePokemonData, setBasePokemonData] = useState([]);

  const fetchPokemonData = (pokemon: any) => {
    const pokemonDataUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`;

    fetch(pokemonDataUrl)
      .then((response) => {
        return response.json();
      })
      .then((pokemon) => {
        setBasePokemonData((basePokemonData): any => [
          ...basePokemonData,
          {
            name: `${pokemon.names[4].name}`,
            numero: `${pokemon.id}`,
          },
        ]);
      });
  };

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        return response.json();
      })
      .then((allPokemon) => {
        allPokemon.results.forEach((pokemon: any) => {
          fetchPokemonData(pokemon);
        });
      });
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {basePokemonData.map((pokemon: any, index: number) => (
        <Grid item xs={12} md={4} key={index}>
          <CardItem
            cardImageAlt={'ok'}
            cardImageSrc={'./01.png'}
            cardTitle={pokemon?.name}
            numberInPokedex={`${pokemon?.numero}/151`}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
