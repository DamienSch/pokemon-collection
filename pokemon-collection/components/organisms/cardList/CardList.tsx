import React from 'react';
import { Grid } from '@material-ui/core';
import CardItem from '../../molecules/cardItem/CardItem';

type pokemon = {
  name: string;
  numero: string;
};

type pokemonCollection = {
  basePokemonData: [pokemon];
};

function CardList({ basePokemonData }: pokemonCollection) {
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
            cardImageAlt={`image de carte ${pokemon?.name}`}
            cardImageSrc={`./setDeBase/${pokemon?.numero}.webp`}
            pokemonName={pokemon?.name}
            numberInPokedex={`${pokemon?.numero}/151`}
            pokemonId={pokemon?.numero}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
