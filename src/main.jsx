import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import HotelDetails from "./components/hotel-details/HotelDetails";

import Error from "./pages/Error/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/pages/hotel" element={<DetailsHotel />} /> */}
        <Route path="/hotel/:name" element={<HotelDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
