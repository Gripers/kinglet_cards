import {useState} from "react";

import styles from "./Checkout.module.scss"
import CheckoutForm from "../Forms/CheckoutForm/CheckoutForm";


const Checkout = () => {
    const [component, setComponent] = useState(<CheckoutForm type='base'/>);
    const [active, setActive] = useState(0);

    const shipping_info = {
        style: {
            color: active === 0 ? '#171717' : 'rgba(23,23,23,.15)',
        },
        onClick: () => {
            setActive(0);
            setComponent(<CheckoutForm/>);
        },
    };

    return (
        <div className={styles.checkout}>
            <div className={styles.checkout_top}>
                <h2 className={styles.checkout_title}>Create Order</h2>
                <button className={styles.close_btn}>X</button>
            </div>
            <div className={styles.current_step}>
                <button {...shipping_info}>1. Add Shipping Information</button>
                <button>2. Confirm Order</button>
                <button>3. Payment Order</button>
            </div>
            <CheckoutForm/>
        </div>
    );
};

export default Checkout;