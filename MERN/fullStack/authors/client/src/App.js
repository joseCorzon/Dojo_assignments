import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllAuthors from './components/AllAuthors';
import EditAuthorForm from './components/EditAuthorForm';
import AuthorForm from './components/AuthorForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
      
        <Switch>
          <Route exact path="/">
            <AllAuthors></AllAuthors>
          </Route>
          <Route exact path='/edit/:_id'>
            <EditAuthorForm></EditAuthorForm>
          </Route>
          <Route exact path='/create/:_id'>
            <AuthorForm></AuthorForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
