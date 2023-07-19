import { Route, Routes } from 'react-router-dom';
import './App.css';
import PlantSearch from './pages/PlantSearch/PlantSearch';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import AppNavbar from './components/AppNavbar/AppNavbar';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path='/' element={<PlantSearch />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='checkout' element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
