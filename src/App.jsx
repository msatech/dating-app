// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import { Home } from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <div
      className="App min-h-screen flex bg-slate-50 antialiased max-h-screen overflow-hidden pb-5"
      style={{ maxHeight: "100vh", maxWidth: "100vw" }}
    >
      <div className="max-w-md mx-auto flex flex-col gap-4 flex-1 min-h-full">
        <Header />
        <Router className="flex-1">
          <Routes>
            <Route path="/chat" Component={Chat} />
            <Route path="/" Component={Home} />
          </Routes>
        </Router>

        <Footer />

        {/* Header */}
        {/* Dating Cards */}
        {/* Buttons below dating cards */}

        {/* Chat screen */}
        {/* Individual chat screen */}
      </div>
    </div>
  );
}

export default App;
