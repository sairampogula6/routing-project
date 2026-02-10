import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./pages/about/about.jsx";
import Home from "./pages/home/home.jsx";
import Contact from "./pages/contact/contact.jsx";
import Recipe from "./components/recipe/Recipe.jsx";
import SingleRecipe from "./components/singleRecipe/singleRecipe.jsx";
import Product from "./components/product/product.jsx";
import SingleProduct from "./components/singleProduct/singleProduct.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Recipe" element={<Recipe/>}></Route>
        <Route path="/singleRecipe/:id" element={<SingleRecipe/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/Product/:id" element={<SingleProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
