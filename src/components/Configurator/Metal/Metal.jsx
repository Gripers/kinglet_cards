import { useContext, useEffect } from 'react';
import styles from '../global.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { cardsSliceApi } from '../../../store/reducers/cardsSlice';
import { Context } from '../../../context';
import { changeVariant } from '../../../store/reducers/variantsSlice';

const Metal = ({ type }) => {
  const { setImage } = useContext(Context);
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);
  const { variants } = useSelector((state) => state.variants);

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
            onClick={() =>
              dispatch(changeVariant({ type: card.type, array: variants }))
            }
          >
            <img src={card.photo} alt='' />
            <p>+£ {card.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metal;
