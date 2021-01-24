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
    <div>
      <main>
          <DataLoaderSpring/>
          {/*<DataLoader/><PostRequest/><PutRequest/><DataLoaderSearch/>*/}
      </main>
    </div>
  );
}

export default App;
