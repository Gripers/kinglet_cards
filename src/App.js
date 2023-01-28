import { useContext, useEffect } from 'react';

import { Route, Routes } from 'react-router-loading';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Context } from './context';
import { removeBorder, setBigChip } from './store/reducers/configuratorSlice';

import Home from './pages/Home/Home';
import Drawer from './components/Drawer/Drawer';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Designs from './pages/Designs/Designs';
import TermsCondition from './pages/Terms&Conditions/TermsCondition';
import CreateOwn from './pages/CreateOwn/CreateOwn';
import OwnDesign from './pages/OwnDesign/OwnDesign';
import CheckoutModal from './components/Modals/CheckoutModal';

function App() {
  const dispatch = useDispatch();
  const pathname = useLocation();

  const { setName, setText, setNamePosition, setMinDataPosition } =
    useContext(Context);

  useEffect(() => {
    setName('kinglet');
    setText('');
    setNamePosition(0);
    setMinDataPosition(0);
    dispatch(setBigChip(false));
    dispatch(removeBorder());
  }, [pathname]);

  return (
    <div className='App'>
      <Routes maxLoadingTime={1000}>
        <Route exact path='/' element={<Home />} loading={true} />
        <Route path='/popular-designs' element={<Designs />} loading={true} />
        <Route path='/about-us' element={<AboutUs />} loading={true} />
        <Route path='/contact-us' element={<Contact />} loading={true} />
        <Route path='/create-your-own' element={<OwnDesign />} loading={true} />
        <Route
          path='/create-your-own/:title'
          element={<CreateOwn />}
          loading={true}
        />
        <Route
          path='/terms-conditions'
          element={<TermsCondition />}
          loading={true}
        />
      </Routes>
      <Drawer />

      <CheckoutModal />
    </div>
  );
}

export default App;
