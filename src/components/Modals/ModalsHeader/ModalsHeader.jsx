import { useDispatch } from 'react-redux';
import styles from './ModalsHeader.module.scss';

const ModalsHeader = ({ close, active }) => {
  const dispatch = useDispatch();

  const activeStyles = (activePage) => {
    return {
      color: active === activePage ? 'black' : 'rgba(23,23,23,.15)',
    };
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__top}>
        <h2>Create Order</h2>
        <div className={styles.close}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='14'
            viewBox='0 0 15 14'
            fill='none'
            onClick={() => dispatch(close(false))}
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.792893 0.292893C1.18342 -0.0976309 1.81658 -0.0976309 2.20711 0.292893L7.5 5.58579L12.7929 0.292893C13.1834 -0.0976311 13.8166 -0.0976311 14.2071 0.292893C14.5976 0.683417 14.5976 1.31658 14.2071 1.70711L8.91421 7L14.2071 12.2929C14.5976 12.6834 14.5976 13.3166 14.2071 13.7071C13.8166 14.0976 13.1834 14.0976 12.7929 13.7071L7.5 8.41421L2.20711 13.7071C1.81658 14.0976 1.18342 14.0976 0.792893 13.7071C0.402369 13.3166 0.402369 12.6834 0.792893 12.2929L6.08579 7L0.792893 1.70711C0.402369 1.31658 0.402369 0.683418 0.792893 0.292893Z'
              fill='#171717'
            />
          </svg>
        </div>
      </div>
      <div className={styles.header__bottom}>
        <ol>
          <li style={activeStyles('fst')}>Add Shipping Information</li>
          <li style={activeStyles('sec')}>Confirm Order</li>
          <li style={activeStyles('third')}>Payment Order</li>
        </ol>
      </div>
    </div>
  );
};

export default ModalsHeader;
