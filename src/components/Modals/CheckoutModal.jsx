import { useState } from 'react';
import styles from './modals.module.scss';

import { Modal, ModalDialog } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';

import { checkoutModalState } from '../../store/reducers/globalSlice';
import { switchToConfirm } from '../../nn';
import ModalsHeader from './ModalsHeader/ModalsHeader';
import ConfirmModal from './ConfirmModal';

const CheckoutModal = () => {
  const dispatch = useDispatch();
  const { isCheckoutModalOpen } = useSelector((state) => state.global);
  const [formValue, setFormValue] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormValue({
      name: event.target[0].value,
      email: event.target[1].value,
      country: event.target[2].value,
      state: event.target[3].value,
      city: event.target[4].value,
      postal: event.target[5].value,
      address: event.target[6].value,
    });

    switchToConfirm(event, dispatch);
  };

  return (
    <>
      <Modal open={isCheckoutModalOpen}>
        <ModalDialog style={{ width: '80%' }}>
          <div className={styles.wrapper}>
            <ModalsHeader close={checkoutModalState} active='fst' />
            <form autoComplete='on' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' required={true} />
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' required={true} />
              </div>
              <div>
                <label htmlFor='country'>Country</label>
                <input type='text' id='country' required={true} />
              </div>
              <div>
                <label htmlFor='state'>State</label>
                <input type='text' id='state' required={true} />
              </div>
              <div>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' required={true} />
              </div>
              <div>
                <label htmlFor='postal/zip'>Postal/Zip Code</label>
                <input type='text' id='postal/zip' required={true} />
              </div>
              <div>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' required={true} />
              </div>
              <input type='submit' value='Continue' />
            </form>
          </div>
        </ModalDialog>
      </Modal>

      <ConfirmModal formData={formValue} />
    </>
  );
};

export default CheckoutModal;
