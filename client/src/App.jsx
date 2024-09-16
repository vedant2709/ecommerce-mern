import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { useLocation } from "react-router-dom";
import Signin from "./components/Signin";
import ProductSection from "./components/ProductSection";
import ProductDetails from "./components/ProductDetails";

function App() {
  let location = useLocation();

  const hideComponentsOnPaths = ["/signup", "/signin"];
  const shouldHideComponents = hideComponentsOnPaths.includes(
    location.pathname
  );
  return (
    <>
      {!shouldHideComponents && <Navbar />}
      {!shouldHideComponents && <SubNavbar />}
      <Routes>

        <Route path="/products/:catid/:catname" element={<ProductSection />} />
        <Route path="/:productid" element={<ProductDetails />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<MainComponent />} />
      </Routes>
      {!shouldHideComponents && <Footer />}
    </>
  );
}

export default App;
