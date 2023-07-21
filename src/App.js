import { Route, Routes } from "react-router-dom";
import "./App.css";
import PlantSearch from "./pages/PlantSearch/PlantSearch";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <div className="view-container">
        <Routes>
          <Route path="/" element={<PlantSearch />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
