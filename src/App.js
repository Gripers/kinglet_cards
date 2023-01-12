import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/about-us" element={<AboutUs />}/>
            </Routes>
        </div>
  );
}

export default App;
