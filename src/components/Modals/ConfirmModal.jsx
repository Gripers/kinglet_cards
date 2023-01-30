import styles from './modals.module.scss';

import { Modal, ModalDialog } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';

import { confirmModalState } from '../../store/reducers/globalSlice';
import ModalsHeader from './ModalsHeader/ModalsHeader';
import { switchToCheckout } from '../../nn';

const ConfirmModal = ({ formData }) => {
  const dispatch = useDispatch();
  const { isConfirmModalOpen } = useSelector((state) => state.global);

  console.log(formData);

  return (
    <Modal open={isConfirmModalOpen}>
      <ModalDialog style={{ width: '80%' }}>
        <div className={styles.wrapper}>
          <ModalsHeader close={confirmModalState} active='sec' />
          <div className={styles.body}>
            <div>
              <strong>Shipping Information</strong>
              <ul>
                <li>{formData.name}</li>
                <li>{formData.email}</li>
                <li>{formData.country}</li>
                <li>{formData.state}</li>
                <li>{formData.city}</li>
                <li>{formData.postal}</li>
                <li>{formData.address}</li>
              </ul>
            </div>
            <div className={styles.left__float}>
              <button onClick={() => switchToCheckout(dispatch)}>Back</button>
              <input type='button' value='Proceed to payment' />
            </div>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
};

export default ConfirmModal;
