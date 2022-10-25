import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import FooterNav from "./Components/FooterNav/FooterNav";
import About from "./Pages/About/About";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route
                        path="/portfolio"
                        exact
                        element={<PortfolioPage />}
                    ></Route>
                    <Route
                        path="/project/:id"
                        element={<ProjectPage />}
                    ></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
                <FooterNav />
            </HashRouter>
        </div>
    );
}

export default App;
