import React from "react";
import styled from 'styled-components'

export type CardType = {
    title: string;
    price: number;
    imgUrl: string;
  };

export const ProductCard = ({title, price, imgUrl} : CardType) => {
    return (
        <CardWrapper>
            <CardImage background={imgUrl} />
            <CardTextWrapper>
                <CardTextPrice>${price}</CardTextPrice>
                <CardTextTitle>{title}</CardTextTitle>
                <CardTextBody>
                    
                </CardTextBody>
            </CardTextWrapper>
        </CardWrapper>
    )
}

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 410px 70px 80px;
    grid-template-areas: "image" "text" "desc";
    border-radius: 18px;
    background: black;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    text-align: center;
    background: black;

    &:hover {
      transform: scale(1.1);
    }
    
`;


export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background:white;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextPrice = styled.span`
  color: rgb(37, 150, 179);
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 1rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: white;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

