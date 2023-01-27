import { useContext, useEffect } from 'react';
import styles from '../global.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { Context } from '../../../context';
import {
  configuratorApi,
  setBigChip,
} from '../../../store/reducers/configuratorSlice';

const Base = () => {
  const dispatch = useDispatch();
  const {
    setName,
    namePosition,
    setNamePosition,
    minDataPosition,
    setMinDataPosition,
  } = useContext(Context);
  const { isBigChip, borders, border } = useSelector(
    (state) => state.configurator
  );

  useEffect(() => {
    dispatch(configuratorApi({}));
  }, []);

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
        <div>
          <h3>Border:</h3>
          <div className={styles.borders}>
            {borders.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundImage:
                    item.img === border
                      ? 'linear-gradient(276deg,#523a2b,#3e2f26,#523a2b)'
                      : 'unset',
                }}
                onClick={() => dispatch(configuratorApi({ id: item.id }))}
              >
                <img
                  style={{
                    opacity: item.img === border ? 1 : 0.2,
                  }}
                  src={item.img}
                  alt=''
                />
                <p>£ {item.price}</p>
              </div>
            ))}
          </div>
          <div className={styles.chip}>
            <h3>Is big chip:</h3>
            <input type='checkbox' onChange={() => dispatch(setBigChip())} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Base;
