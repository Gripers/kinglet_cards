import { useContext, useState } from 'react';
import styles from './Configurator.module.scss';

import { Context } from '../../context';
import Base from './Base/Base';
import Metal from './Metal/Metal';
import Custom from './Custom/Custom';

const Configurator = () => {
  const { component, setComponent } = useContext(Context);
  const [active, setActive] = useState(0);

  const fst_args = {
    style: {
      color: active === 0 ? '#cc8f68' : 'white',
      borderBottom: active === 0 ? '1px solid #cc8f68' : 'none',
    },
    onClick: () => {
      setActive(0);
      setComponent(<Base />);
    },
  };

  const sec_args = {
    style: {
      color: active === 1 ? '#cc8f68' : 'white',
      borderBottom: active === 1 ? '1px solid #cc8f68' : 'none',
    },
    onClick: () => {
      setActive(1);
      setComponent(<Metal />);
    },
  };

  const third_args = {
    style: {
      color: active === 2 ? '#cc8f68' : 'white',
      borderBottom: active === 2 ? '1px solid #cc8f68' : 'none',
    },
    onClick: () => {
      setActive(2);
      setComponent(<Custom />);
    },
  };

  return (
    <div className={styles.configurator}>
      <div className={styles.configurator__selectors}>
        <button {...fst_args}>Card info</button>
        <button {...sec_args}>Metal</button>
        <button {...third_args}>Custom Design</button>
      </div>
      {component}
    </div>
  );
};

export default Configurator;
