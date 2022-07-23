import React, {useContext} from "react";
import { Datacontext } from "../../context/Dataprovied";
import { ProductsItem } from "./productitem";

export const ListProducts = () => {
  
  
  const value = useContext(Datacontext);
  const [Products] = value.Products
  console.log(Products)
  
  return (
    <>
      <h1 className="title">Productos</h1>
      <div className="products">
        {
          Products.map(Products =>(
            <ProductsItem 
            key={Products.id}
            id={Products.id}
            title={Products.title}
            price={Products.price}
            image={Products.image}
            category={Products.category}
            cantidad={Products.cantidad}
            tallas={Products.tallas}
            />
          ))
        }
      </div>
    </>
  );
};
