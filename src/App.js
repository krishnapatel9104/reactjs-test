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
import { ProtectedRoute } from "./utils/ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/:maincategory/:category/:subcategory"
            element={
              <ProtectedRoute>
                <CategroyDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/:maincategory/:category/:subcategory/:productname"}
            element={
              <ProtectedRoute>
                <ItemDetailView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shipping"
            element={
              <ProtectedRoute>
                <Shipping />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/confirmation"
            element={
              <ProtectedRoute>
                <ConfirmationPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
