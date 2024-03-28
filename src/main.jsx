import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { MantineProvider } from "@mantine/core";
import Footer from "./components/Footer.jsx";

const theme = {};
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MantineProvider theme={{ primaryColor: "red" }}>
      <React.StrictMode>
        <Navbar />
        <App />
        <Footer />
      </React.StrictMode>
    </MantineProvider>
  </BrowserRouter>
);
