import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import RouteDefinitions from "./routes/RouteDefinitions";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="body-container">
        <RouteDefinitions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
