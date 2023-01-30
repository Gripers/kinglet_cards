import { useDispatch } from 'react-redux';

import styles from './Checkout.module.scss';
import CheckoutForm from '../Forms/CheckoutForm/CheckoutForm';

import { checkoutModalState } from '../../store/reducers/globalSlice';

const Checkout = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_top}>
        <h2 className={styles.checkout_title}>Create Order</h2>
        <button
          className={styles.close_btn}
          onClick={() => dispatch(checkoutModalState(false))}
        >
          X
        </button>
      </div>
      <div className={styles.current_step}>
        <button style={{ color: 'black' }}>1. Add Shipping Information</button>
        <button>2. Confirm Order</button>
        <button>3. Payment Order</button>
      </div>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
