/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import { Footer } from './Component/FooterComponent/FooterComponent';
import { Header } from './Component/HeaderComponent/HeaderComponent';
import { Home } from './Component/HomeComponent/HomeComponent';
import { Routes, Route } from "react-router-dom";
import { FullProduct } from './Component/ProductComponent/FullProductComponent';
import DetailProduct from './Component/DetailComponent/DetailComponent';
import { Contact } from './Component/ContactComponent/ContactComponent';
import { Card } from './Component/CardComponent/CardComponent';
import { Checkout } from './Component/CardComponent/CheckoutComponent';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<FullProduct />} />
          <Route path="product/detail/:productID" element={<DetailProduct />} exact />
          <Route path="/card" element={<Card />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    )
  }
}

export default App;
