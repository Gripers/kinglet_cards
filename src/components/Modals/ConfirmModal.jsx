import { useCallback, useContext } from 'react';
import styles from './modals.module.scss';

import { Modal, ModalDialog } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { toBlob, toCanvas, toJpeg, toPng } from 'html-to-image';
import axios from 'axios';

import { confirmModalState } from '../../store/reducers/globalSlice';
import { switchToCheckout } from '../../nn';
import ModalsHeader from './ModalsHeader/ModalsHeader';
import { Context } from '../../context';

const ConfirmModal = ({ formData }) => {
  const dispatch = useDispatch();
  const { isConfirmModalOpen } = useSelector((state) => state.global);
  const { cardRef } = useContext(Context);

  const request = useCallback(() => {
    toBlob(cardRef.current, { cacheBust: true }).then((dataUrl) => {
      console.log(dataUrl);

      const data = new FormData();

      data.append('image', dataUrl, 'pic.jpg');

      axios.post('https://api.kingletcards.com/api/card-images/', data);
    });
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
                <li>{formData.address}</li>
              </ul>
            </div>
            <div className={styles.left__float}>
              <button onClick={() => switchToCheckout(dispatch)}>Back</button>
              <input
                type='button'
                value='Proceed to payment'
                onClick={request}
              />
            </div>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
};

export default ConfirmModal;
