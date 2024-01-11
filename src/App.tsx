import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import RouteDefinitions from "./routes/RouteDefinitions";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app-nav-and-page-content">
        <Navbar />
        <RouteDefinitions />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
