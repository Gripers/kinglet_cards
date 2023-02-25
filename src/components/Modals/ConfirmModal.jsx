import { useCallback, useContext } from 'react';
import styles from './modals.module.scss';

import { Modal, ModalDialog } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { toBlob } from 'html-to-image';
import axios from 'axios';

import { confirmModalState } from '../../store/reducers/globalSlice';
import { switchToCheckout } from '../../nn';
import { Context } from '../../context';
import { API } from '../../api/api';
import ModalsHeader from './ModalsHeader/ModalsHeader';

const ConfirmModal = ({ formData }) => {
  const dispatch = useDispatch();
  const { isConfirmModalOpen } = useSelector((state) => state.global);
  const { cardRef } = useContext(Context);

  const request = useCallback(async (formData) => {
    const data = new FormData();

    await toBlob(cardRef.current, { cacheBust: true }).then((dataUrl) => {
      data.append('image', dataUrl, 'pic.jpg');
    });

    data.append('name', formData.name);
    data.append('country', formData.country);
    data.append('city', formData.city);
    data.append('email', formData.email);
    data.append('whatsapp_number', formData.whatsapp_number);
    data.append('state', formData.state);
    data.append('postal', formData.postal);
    data.append('address', formData.address);
    data.append('shipping', formData.shipping);
    data.append('method', formData.method);

    axios.post(`${API}Orders/`, data);
  }, [cardRef]);

  return (
    <Modal open={isConfirmModalOpen}>
      <ModalDialog className='cus_modal'>
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
                <li>{formData.whatsapp_number}</li>
                <li>{formData.shipping}</li>
                <li>{formData.address}</li>
              </ul>
            </div>
            <div className={styles.left__float}>
              <button onClick={() => switchToCheckout(dispatch)}>Back</button>
              <input
                type='button'
                value='Proceed to payment'
                onClick={() => request(formData)}
              />
            </div>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
};

export default ConfirmModal;
