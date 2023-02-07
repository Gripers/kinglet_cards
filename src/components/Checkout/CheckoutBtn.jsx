import styles from './CheckoutBtn.module.css';

import { useDispatch } from 'react-redux';

import { checkoutModalState } from '../../store/reducers/globalSlice';

const CheckoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.btn}>
      <button onClick={() => dispatch(checkoutModalState(true))}>
        Checkout
      </button>
    </div>
  );
};

export default CheckoutBtn;
