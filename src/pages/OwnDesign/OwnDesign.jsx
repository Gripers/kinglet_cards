import styles from './OwnDesign.module.scss';

import { useDispatch } from 'react-redux';

import { checkoutModalState } from '../../store/reducers/globalSlice';

import Navbar from '../../components/Navbar/Navbar';
import Configurator from '../../components/Configurator/Configurator';
import Cards from '../../components/Cards/Cards';

const OwnDesign = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className={styles.own__design_wrapper}>
        <Cards />
        <Configurator />
        <div className={styles.btn}>
          <button onClick={() => dispatch(checkoutModalState(true))}>
            Checkout
          </button>
        </div>
        {/* <Checkout /> */}
      </div>
    </>
  );
};

export default OwnDesign;
