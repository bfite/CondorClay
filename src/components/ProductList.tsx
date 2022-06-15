import React from "react";
import styled from "styled-components";

import { ProductCard } from "./ProductCards";


import {Product } from "../pages/Products";

type ProductListProps = {
  products: Product[] | undefined;
};

function ProductList(props: ProductListProps) {
  return (
    <div>
      <CardContainer>
        {props?.products?.slice(0,4).map((p) => (
          <>
            <ProductCard title={p.title} price={p.price} imgUrl={p.image} />
            <Separator />
          </>
        ))}
      </CardContainer>

      <CardContainer>

      {props?.products?.slice(4,8).map((p) => (
        <>
          <ProductCard title={p.title} price={p.price} imgUrl={p.image} />
          <Separator />
          </>

      ))}
      </CardContainer>

        
    </div>
  );
    
}

export default ProductList

const CardContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  overflow: hidden;
`;

const Title = styled.div`
  background: white;
  border-bottom: 2px solid black;  
  font-size: 2rem;
  color:white;

`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;