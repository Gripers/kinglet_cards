import { useContext, useState, useRef } from 'react';
import styles from './Cards.module.scss';

import { useSelector } from 'react-redux';
import { Context } from '../../context';
import Draggable from 'react-draggable';

import bg from '../../assets/images/metal/black.png';
import chip from '../../assets/icons/chip.png';


const Cards = ({ obj }) => {
  const { name, text, namePosition, minDataPosition, cardRef } = useContext(Context);

  const { isBigChip, border } = useSelector((state) => state.configurator);
  const { variant } = useSelector((state) => state.variants);

  const [isBorder, setIsBorder] = useState(false);
  const [isTextBorder, setIsTextBorder] = useState(false);

  const cusStyles = (position, n) => {
    return {
      visibility: position === n ? 'visible' : 'hidden',
    };
  };

  const cusSecStyles = (param1, param2) => {
    return {
      width: 'fit-content',
      visibility: param1 ? 'visible' : 'hidden',
      cursor: 'move',
      border: param2 ? '2px dashed white' : 'none',
    };
  };

  return (
    <div className={styles.own__design_cards}>
      <div
        ref={cardRef}     
        id='card'
        className={styles.own__design_cards_card}
        style={{
          backgroundImage: `url('${border ? border : null}'), url('${
            variant !== '' ? variant[0]?.front_img : obj?.front_image || bg
          }')`,
        }}
      >
        <Draggable onDrag={() => setIsTextBorder(true)}>
          <h3 style={cusSecStyles(text, isTextBorder)}>{text ? text : 'a'}</h3>
        </Draggable>
        <img style={{ width: isBigChip ? '15%' : '10%' }} src={chip} alt='' />
        <h2 style={cusStyles(minDataPosition, 0)}>0000 0000 0000 0000</h2>
        <h2 style={cusStyles(minDataPosition, 0)}>00/00</h2>
        <Draggable onDrag={() => setIsBorder(true)}>
          <h2 style={cusSecStyles(namePosition === 0, isBorder)}>
            {name ? name : 'kinglet'}
          </h2>
        </Draggable>
      </div>
      <div
        id='card'
        className={styles.own__design_cards_card}
        style={{
          backgroundImage: `url('${
            variant !== '' ? variant[0]?.back_img : obj?.back_image || bg
          }')`,
        }}
      >
        <div className={styles.own__design_cards_card_flexer}>
          <div className={styles.white_bg}></div>
          <h2>000</h2>
        </div>
        <h2 style={cusStyles(minDataPosition, 1)}>0000 0000 0000 0000</h2>
        <h2 style={cusStyles(minDataPosition, 1)}>00/00</h2>
        <h2 style={cusStyles(namePosition, 1)}>{name ? name : 'kinglet'}</h2>
      </div>
    </div>
  );
};

export default Cards;
