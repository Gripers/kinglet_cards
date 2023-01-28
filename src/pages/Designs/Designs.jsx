import { useContext, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DesignHeader from '../../components/Design/DesignHeader/DesignHeader';
import DesignLists from '../../components/Design/DesignLists/DesignLists';

import { Context } from '../../context';
import {
  removeBorder,
  setBigChip,
} from '../../store/reducers/configuratorSlice';

const Designs = () => {
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
    <>
      <Navbar />
      <DesignHeader />
      <DesignLists />
      <Footer />
    </>
  );
};

export default Designs;
