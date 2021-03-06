import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from  './globalStyles';
import {productData, productDataTwo} from './components/Products/data';
import Feature from './components/Feature';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for you" data={productDataTwo} />
    </Router>
  );
}

export default App;
