import { useContext, useEffect } from 'react';
import './CreateOwn.scss';

import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Context } from '../../context';
import { variantsApi } from '../../store/reducers/variantsSlice';
import Navbar from '../../components/Navbar/Navbar';
import Configurator from '../../components/Configurator/Configurator';
import Cards from '../../components/Cards/Cards';
import CheckoutBtn from '../../components/Checkout/CheckoutBtn';

const CreateOwn = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const { cards } = useContext(Context);

  const currentCart = cards.find((el) => {
    return el.name == params.name;
  });

  useEffect(() => {
    dispatch(variantsApi({ id: currentCart?.id }));
  }, []);

  return (
    <>
      <Navbar />
      <div className='createown__wrapper'>
        <Cards obj={currentCart} />
        <Configurator />
        <CheckoutBtn />
      </div>
    </>
  );
};

export default CreateOwn;
