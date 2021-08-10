import React from 'react';
import { Card } from '@material-ui/core';
import { StyledCardItem } from './CardItem.style';

type Card = {
  cardImageSrc: string;
  cardImageAlt: string;
  cardTitle: string;
  numberInPokedex: string;
};

function CardItem({
  cardImageSrc,
  cardImageAlt,
  cardTitle,
  numberInPokedex,
}: Card) {
  return (
    <>
      <StyledCardItem src={cardImageSrc} alt={cardImageAlt} />
      <h2>{cardTitle}</h2>
      <p>{numberInPokedex}</p>
    </>
  );
}

export default CardItem;
