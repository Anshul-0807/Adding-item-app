import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return (
  props.productList.length > 0 ?
  props.productList.map((product, i) => {
    return (
      
      <Product
        product={product}
        key={i}
        incrementquantity={props.incrementquantity}
        decrementquantity={props.decrementquantity}
        index={i}
        Removeitem={props.Removeitem}
      />
    );
  })
  : <h1>No product exist in the cart..!</h1>
  )
}
