import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import FooterNav from "./Components/FooterNav/FooterNav";

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
                </Routes>
                <FooterNav />
            </BrowserRouter>
        </div>
    );
}

export default App;
