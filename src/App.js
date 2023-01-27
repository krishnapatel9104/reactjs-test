import React from "react";
import "./App.css";
import { Home } from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategroyDetails } from "./components/CategoryDetails/CategroyDetails";
import { ItemDetailView } from "./components/ItemDetailView/ItemDetailView";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categorydetails" element={<CategroyDetails />} />
                <Route path="/itemdetailview" element={<ItemDetailView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
