import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';
import OneProduct from './components/OneProduct';
import EditProductForm from './components/EditProductForm';

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);


  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <Link to='/' className='btn btn-primary'>Home Page</Link>
        <Switch>
          <Route exact path="/">
            <ProductForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}></ProductForm>
            <hr />
            <AllProducts formSubmitted = {formSubmitted}></AllProducts>
          </Route>
          <Route exact path="/details/:_id">
            <OneProduct></OneProduct>
          </Route>
          <Route exact path='/edit/:_id'>
            <EditProductForm></EditProductForm>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
