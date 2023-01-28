import styles from './OwnDesign.module.scss';

import Navbar from '../../components/Navbar/Navbar';
import Configurator from '../../components/Configurator/Configurator';

import Cards from '../../components/Cards/Cards';
import Checkout from "../../components/Checkout/Checkout";

const OwnDesign = () => {
  return (
    <>
      <Navbar />
      <div className={styles.own__design_wrapper}>
          <Cards/>
          <Configurator/>
          <Checkout />
      </div>
    </>
  );
};

export default OwnDesign;
