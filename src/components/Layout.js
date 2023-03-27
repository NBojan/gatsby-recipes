import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/css/bigclass.css";
import "../assets/css/index.css";

const Layout = ({children}) => {
    return (  
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
 
export default Layout;