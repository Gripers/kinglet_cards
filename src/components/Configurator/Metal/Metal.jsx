import { useEffect } from 'react';
import styles from '../global.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { cardsSliceApi } from '../../../store/reducers/cardsSlice';
import { changeVariant } from '../../../store/reducers/variantsSlice';
import defaultColors from '../../../dbs/defaultColors';

const Metal = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);
  const { variants } = useSelector((state) => state.variants);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(cardsSliceApi());
  }, []);

  return (
    <div className={styles.base__wrapper}>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{ border: card?.type === '' ? '5px solid white' : null }}
            onClick={() =>
              dispatch(
                changeVariant({
                  type: card.type,
                  array:
                    pathname === '/create-your-own' ? defaultColors : variants,
                })
              )
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
