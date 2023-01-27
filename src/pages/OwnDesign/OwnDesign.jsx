import styles from './OwnDesign.module.scss';

import Navbar from '../../components/Navbar/Navbar';
import Configurator from '../../components/Configurator/Configurator';

import Cards from '../../components/Cards/Cards';

const OwnDesign = () => {
  return (
    <>
      <Navbar />
      <div className={styles.own__design_wrapper}>
          <Cards/>
          <Configurator/>
      </div>
    </>
  );
};

export default OwnDesign;
