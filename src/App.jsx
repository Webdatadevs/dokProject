import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import About from "./components/page/aboutpage/About";
import BreadCrumb from "./components/BreadCrumb";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <div className=" bg-layout-bg ">
                <BreadCrumb />
                <Routes>
                    <Route path={"/"} element={<Main />} />
                    <Route path={"/about/:title"} element={<About />} />
                </Routes>
            </div>
            <Footer/>
        </>
    );
};

export default App;
