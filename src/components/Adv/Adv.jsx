import styles from './Adv.module.scss';

import adv_array from './arr';

const Adv = () => {
  return (
    <fieldset className={styles.adv__wrapper}>
      <legend>
        Our securing packaging is discreet and <br /> designed to protect your
        products during transit
      </legend>
      <div className={styles.adv__etaps}>
        {adv_array.map((item) => (
          <div key={item.id} className={styles.adv__etaps_etap}>
            <img src={item.pic} alt='' />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Adv;
