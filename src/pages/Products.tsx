import React from 'react';
import { useQuery, QueryClient, QueryClientProvider  } from 'react-query';
import { ProductList, PageHeader } from '../components'


export type Product = {
    title: string;
    price: number;
    image: string;
}


const getproducts = async ():Promise<Product[]> =>
await (await  fetch('https://fakestoreapi.com/products')).json();


const Products = () => {

    const {data,error} =useQuery<Product[]>(
        'products',
        getproducts
        
      )
    return (
        <div>
        <PageHeader title={"Products"} />
        <main>
            <ProductList products={data}/>
        </main>
        </div>
    )
}


export default Products