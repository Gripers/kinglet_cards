import { useContext } from 'react';
import styles from '../global.module.scss';

import { Context } from '../../../context';

const Base = () => {
  const {
    setName,
    namePosition,
    setNamePosition,
    minDataPosition,
    setMinDataPosition,
  } = useContext(Context);

  return (
    <div className={styles.base__wrapper}>
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          <h3>Card holder name</h3>
          <div className={styles.btns}>
            <button
              onClick={() => setNamePosition(0)}
              style={{
                backgroundColor: namePosition === 0 ? '#4d372a' : 'transparent',
              }}
            >
              Front
            </button>
            <button
              onClick={() => setNamePosition(1)}
              style={{
                backgroundColor: namePosition === 1 ? '#4d372a' : 'transparent',
              }}
            >
              Back
            </button>
          </div>
          <input
            type='text'
            placeholder='Name'
            onChange={(event) => setName(event.target.value)}
            maxLength={20}
          />
          <h3>Card number on</h3>
          <div className={styles.btns}>
            <button
              onClick={() => setMinDataPosition(0)}
              style={{
                backgroundColor:
                  minDataPosition === 0 ? '#4d372a' : 'transparent',
              }}
            >
              Front
            </button>
            <button
              onClick={() => setMinDataPosition(1)}
              style={{
                backgroundColor:
                  minDataPosition === 1 ? '#4d372a' : 'transparent',
              }}
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Base;
