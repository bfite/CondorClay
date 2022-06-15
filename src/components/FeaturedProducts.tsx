import React from "react";
import styled from "styled-components";
import { ProductCard } from "./ProductCards";

import img1 from "../assets/lemon.jpg";
import img2 from "../assets/peach.jpg";


const FeaturedProducts = () => {
    return (
        <div>
            <h2>Featured Products</h2>
            <div className='underline' />
            <CardContainer>
            <ProductCard title={"Lemons"} price={20.00} imgUrl={img1} />
            <Separator />
            <ProductCard title={"Peaches"} price={15.00} imgUrl={img2} />
            </CardContainer>
        </div>
        

    )
}

export default FeaturedProducts


const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;