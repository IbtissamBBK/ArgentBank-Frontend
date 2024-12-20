import React from "react";
import { Routes, Route } from "react-router-dom";
console.log("React Router is working");
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";
import "./styles/main.css";

function App () {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
