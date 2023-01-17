import { Route, Routes } from 'react-router-loading';

import Home from './pages/Home/Home';
import Drawer from './components/Drawer/Drawer';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Designs from './pages/Designs/Designs';

function App() {
  return (
    <div className='App'>
      <Routes maxLoadingTime={1000}>
        <Route exact path='/' element={<Home />} loading={true} />
        <Route path='/popular-designs' element={<Designs />} loading={true} />
        <Route path='/about-us' element={<AboutUs />} loading={true} />
        <Route path='/contact-us' element={<Contact />} loading={true} />
      </Routes>

      <Drawer />
    </div>
  );
}

export default App;
