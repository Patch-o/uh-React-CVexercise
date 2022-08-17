import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/pages/Profile";
import Formation from "./components/pages/Formation";
import AboutMe from "./components/pages/AboutMe";
import Code from "./components/pages/Code";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/code" elemen={<Code/>}/>
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
