import React from "react";
import RouteTour from "../../router/RouteTour";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <RouteTour />
      <Footer />
    </div>
  );
};

export default Layout;
