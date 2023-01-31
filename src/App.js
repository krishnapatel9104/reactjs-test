import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategroyDetails } from "./components/CategroyDetails";
import { ItemDetailView } from "./components/ItemDetailView/ItemDetailView";
import { Shipping } from "./components/Shipping/Shipping";
import { Checkout } from "./components/Checkout/Checkout";
import { ConfirmationPage } from "./components/ConfirmationPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categorydetails" element={<CategroyDetails />} />
                <Route path="/itemdetailview" element={<ItemDetailView />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
