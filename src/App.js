import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Drawer from './components/Drawer/Drawer';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>

      <Drawer />
    </div>
  );
}

export default App;
