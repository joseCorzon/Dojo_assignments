import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StarWars from './components/StarWars'
import Data from './components/Data'

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <StarWars></StarWars>
        <Switch>
          <Route exact path="/:word/:id">
            <Data></Data>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
