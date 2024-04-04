import "./App.css";
import { Routes, Route } from "react-router-dom";
//Pages
import Login from "./pages/login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
//Components
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
