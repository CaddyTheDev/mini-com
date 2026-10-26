import Dashboard from "./Dashboard";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
