import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home.jsx";
import NewAccount from "./pages/NewAccount.jsx";
//hello
export default function App() {
  return (
    <div className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/createAccount" element={<NewAccount/>} />
        </Routes>
      </Router>
    </div>
  );
}