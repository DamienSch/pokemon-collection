import React from 'react';
import { Card } from '@material-ui/core';
import { StyledCardItem } from './CardItem.style';
import Link from 'next';

type Card = {
  cardImageSrc: string;
  cardImageAlt: string;
  pokemonName: string;
  numberInPokedex: string;
  pokemonId: string;
};

function CardItem({
  cardImageSrc,
  cardImageAlt,
  pokemonName,
  numberInPokedex,
  pokemonId,
}: Card) {
  return (
    <>
      <a href={`/pokemon-detail/${pokemonId}`}>
        <StyledCardItem src={cardImageSrc} alt={cardImageAlt} />
      </a>
      <h2>{pokemonName}</h2>
      <p>{numberInPokedex}</p>
    </>
  );
}

export default CardItem;
