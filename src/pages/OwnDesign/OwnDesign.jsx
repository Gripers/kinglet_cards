import styles from './OwnDesign.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { checkoutModalState } from '../../store/reducers/globalSlice';

import Navbar from '../../components/Navbar/Navbar';
import Configurator from '../../components/Configurator/Configurator';
import Cards from '../../components/Cards/Cards';

const OwnDesign = () => {
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state) => state.global);

  return (
    <>
      <Navbar />
      <div className={styles.own__design_wrapper}>
        <Cards />
        <Configurator />
        <h2 className={styles.total}>Total: {totalPrice}</h2>
        <div className={styles.btn}>
          <button onClick={() => dispatch(checkoutModalState(true))}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default OwnDesign;
