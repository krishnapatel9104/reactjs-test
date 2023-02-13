import React from "react";
import "./App.css";
import { Home } from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategroyDetails } from "./components/CategoryDetails/CategroyDetails";
import { ItemDetailView } from "./components/ItemDetailView/ItemDetailView";
import { Shipping } from "./components/Shipping/Shipping";
import { Checkout } from "./components/Checkout/Checkout";
import { ConfirmationPage } from "./components/ConfirmationPage/ConfirmationPage";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:maincategory/:category/:subcategory" element={<CategroyDetails />} />
          <Route
            path={"/:maincategory/:category/:subcategory/:productname"}
            element={<ItemDetailView />}
          />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
