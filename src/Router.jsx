import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs";
import Portfolio from "./pages/Portfolio";
import Thankyou from "./pages/Thankyou";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/sucess-response" element={<Thankyou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
