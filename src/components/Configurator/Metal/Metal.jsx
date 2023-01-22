import { useContext, useEffect } from 'react';
import styles from '../global.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { cardsSliceApi } from '../../../store/reducers/cardsSlice';
import { Context } from '../../../context';

const Metal = ({ type }) => {
  const { setImage } = useContext(Context);
  const dispatch = useDispatch();
  const { cards, isLoading } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(cardsSliceApi());
  }, []);

  return (
    <div className={styles.base__wrapper}>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{ border: card?.type === type ? '1px solid white' : null }}
          >
            <img src={card.photo} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metal;
