import styles from './OwnDesign.module.scss';

import { useSelector } from 'react-redux';

import Navbar from '../../components/Navbar/Navbar';
import Configurator from '../../components/Configurator/Configurator';
import Cards from '../../components/Cards/Cards';
import CheckoutBtn from '../../components/Checkout/CheckoutBtn';

const OwnDesign = () => {
  const { inc } = useSelector((state) => state.global);

  return (
    <>
      <Navbar />
      <div className={styles.own__design_wrapper}>
        <Cards />
        <Configurator />
        <h2 className={styles.total}>Total: {49.9 + inc}</h2>
        <CheckoutBtn />
      </div>
    </>
  );
};

export default OwnDesign;
