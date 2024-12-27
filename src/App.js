import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header";
import BurgerDetails from "./components/Pages/BurgerDetails.jsx";
import ItemDetails from "./components/Pages/ItemDetails.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import Products from "./components/Pages/Products.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details/:id" element={<BurgerDetails />} />
          <Route path="/item/:name" element={<ItemDetails />} />
          <Route path="/products" element={<Products/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
