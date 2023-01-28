import styles from "./CheckoutForm.module.scss"

import { Icon } from '@iconify/react';

const CheckoutForm = () => {
    return (
        <div>
            <form action="" autoComplete="on" method="post" onSubmit={""}>
                <div className={styles.form_row}>
                    <div className={styles.input_box}>
                        <label htmlFor="">Name</label>
                        <input type="text" required />
                    </div>
                    <div className={styles.input_box}>
                        <label htmlFor="">Email</label>
                        <input type="text" required />
                    </div>
                    <div className={styles.input_box}>
                        <label htmlFor="">Country</label>
                        <input type="text" required />
                    </div>
                    <div className={styles.input_box}>
                        <label htmlFor="">State</label>
                        <input type="text" required />
                    </div>
                    <div className={styles.input_box}>
                        <label htmlFor="">City</label>
                        <input type="text" required />
                    </div>
                    <div className={styles.input_box}>
                        <label htmlFor="">Postal / Zip Code</label>
                        <input type="text" required />
                    </div>
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="">Address</label>
                    <input type="text" required />
                </div>
                <button className={styles.continue_btn}>Continue <Icon icon="tabler:arrow-narrow-right" color="black" width="18" height="30" /></button>
            </form>
        </div>
    );
};

export default CheckoutForm;