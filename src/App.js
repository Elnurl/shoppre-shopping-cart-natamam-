import "./App.css";
// import About from "./About";
// import Home from "./Home";
import Register from "./companent/register";
import { Routes, Route } from "react-router-dom";
import Login from "./companent/Login";
import Home from "./companent/home";
import Shoppingcart from "./companent/cartcompanents/shoppingcart";
// import data from "./Data";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shoppingcart" element={<Shoppingcart />} />
    </Routes>
  );
}

export default App;
