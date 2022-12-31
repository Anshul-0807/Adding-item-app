import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/Productlist";
import Footer from "./component/Footer.js";
import Additem from "./component/Additem";


function App() {
  const products = [
    {
      Price: 195000,
      Name: "Iphone 13 pro max",
      quantity: 0,
    },
    {
      Price: 20000,
      Name: "Redmi note 10 pro",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementquantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].Price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const decrementquantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].Price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const Resetquantity = () => {
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const Removeitem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].Price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const additem = (Price,name) =>{
    let newProductList = [...productList];
newProductList.push({
  price:Price,
  name:name,
  quantity:0
})
setProductList(newProductList);

  }

  return (
    <>
      <Navbar />
      <main className="container mt-4">
      <Additem additem={additem}/>
        <ProductList
          productList={productList}
          incrementquantity={incrementquantity}
          decrementquantity={decrementquantity}
          Removeitem={Removeitem}
        />
      </main>
      <Footer totalAmount={totalAmount} Resetquantity={Resetquantity} />
    </>
  );
}

export default App;
