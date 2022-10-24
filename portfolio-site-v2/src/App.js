import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import FooterNav from "./Components/FooterNav/FooterNav";
import About from "./Pages/About/About";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route
                        path="/portfolio"
                        exact
                        element={<PortfolioPage />}
                    ></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
                <FooterNav />
            </BrowserRouter>
        </div>
    );
}

export default App;
