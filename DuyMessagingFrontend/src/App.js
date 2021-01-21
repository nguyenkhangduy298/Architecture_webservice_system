import logo from './logo.svg';
import './App.css';
import DataLoader from "./DataLoader";
import PostRequest from "./PostRequest";
import PutRequest from "./PutRequest";
import DataLoaderSearch from "./DataLoaderSearch";
import PostRequestSpring from "./PostRequestSpring";
import DataLoaderSpring from "./DataLoaderSpring";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>My Chat App</h1>
      </header>
      <main>
          <DataLoaderSpring/>
          {/*<DataLoader/><PostRequest/><PutRequest/><DataLoaderSearch/>*/}
      </main>
    </div>
  );
}

export default App;
