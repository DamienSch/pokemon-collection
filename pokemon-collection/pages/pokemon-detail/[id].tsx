import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';

function PokemonDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState<any>();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((pokemon) => {
        setPokemon(pokemon);
      });
  }, [id]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={10}>
        <Card>
          <CardActionArea>
            <img
              src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
              alt={pokemon?.name}
              title={pokemon?.name}
            />
            <CardContent>
              {pokemon.length === 151 && (
                <Typography gutterBottom variant="h5" component="h2">
                  {pokemon?.name}
                </Typography>
              )}

              {/*{pokemon &&
                pokemon?.flavor_text_entries?.map((item) =>
                  item?.language?.name == 'fr' ? <p>{item?.flavor_text}</p> : ''
                )}*/}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

export default PokemonDetail;
