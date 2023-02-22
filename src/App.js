import "./App.css";
import Navbar from "./components/e-commerce/navbar/Navbar";
import ProductList from "./components/e-commerce/productList/ProductList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProductList></ProductList>
      {/* App */}
    </div>
  );
}

export default App;
