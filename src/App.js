import "./App.css";
import Filters from "./Components/Filters";
import ItemCard from "./Components/ItemCard";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Filters />
      <Main />
    </div>
  );
}

export default App;
