import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import { ReactNavbar } from "./lib/overlay-nav";
import image from "../src/assets/images/logo.png";
import DialogDefault from "./components/burgerMenu";

function App() {
    return (
        <>
            <div className="absolute z-[10] right-4 lg:left-4 top-4">
                <DialogDefault />
            </div>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/Home" element={<Home />}></Route>
                <Route exact path="/team" element={<OurTeam />}></Route>
                <Route exact path="/events" element={<Events />}></Route>
            </Routes>
        </>
    );
}

export default App;
