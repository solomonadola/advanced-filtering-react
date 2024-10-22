import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//input filter
const 
function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
