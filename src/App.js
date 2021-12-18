import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
