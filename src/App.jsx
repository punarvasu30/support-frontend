import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "../pages/Register";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
