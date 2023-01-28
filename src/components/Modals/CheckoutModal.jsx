import { Modal, ModalDialog } from '@mui/joy';
import Checkout from '../Checkout/Checkout';
import { useSelector } from 'react-redux';

const CheckoutModal = () => {
  const { isCheckoutModalOpen } = useSelector((state) => state.global);

  return (
    <Modal open={isCheckoutModalOpen}>
      <ModalDialog>
        <Checkout />
      </ModalDialog>
    </Modal>
  );
};

export default CheckoutModal;
