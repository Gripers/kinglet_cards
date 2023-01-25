import styles from './How.module.scss';

import how_array from './arr';

const How = () => {
  return (
    <div className={styles.how__wrapper}>
      <h1>How it works?</h1>
      <div className={styles.how__etaps}>
        {how_array.map((item) => (
          <>
            <div key={item.id}>
              <div className={styles.how__pic}>
                <img src={item.pic} alt='' />
              </div>
              <h2>{item.title}</h2>
              <p>{item.des}</p>
            </div>
            <div className={styles.how__line}></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default How;
