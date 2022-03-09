import logo from './logo.svg';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <List name = {"Doe, Jane"} age = {45} hairColor = {'Black'}></List>
      <List name = {"Smith, John"} age = {88} hairColor = {'Brown'}></List>
      <List name = {"Fillmore, Millard"} age = {50} hairColor = {'Brown'}></List>
      <List name = {"Smith, Maria"} age = {62} hairColor = {'Brown'}></List>
    </div>
  );
}

export default App;
