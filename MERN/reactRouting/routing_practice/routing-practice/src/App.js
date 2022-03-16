import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Practice from './components/Practice'

function App() {
  return (

    <div className="App container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            </Route>
          <Route exact path="/:id">
            <Practice></Practice>
          </Route>
          {/* <Route exact path="/:word/"><Practice></Practice></Route> */}
          <Route exact path="/:id/:textColor/:bgColor">
            <Practice></Practice>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
