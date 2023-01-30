import {
  checkoutModalState,
  confirmModalState,
} from './store/reducers/globalSlice';

export const switchToCheckout = (dispatch) => {
  dispatch(checkoutModalState(true));
  dispatch(confirmModalState(false));
};

export const switchToConfirm = (event, dispatch) => {
  event.preventDefault();

  dispatch(checkoutModalState(false));
  dispatch(confirmModalState(true));
};
