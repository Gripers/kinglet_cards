import { useContext, useState } from 'react';
import styles from './Cards.module.scss';

import { useSelector } from 'react-redux';
import Draggable from 'react-draggable';
import { Context } from '../../context';
import bg from '../../assets/images/metal/black.png';
import chip from '../../assets/icons/chip.png';

const Cards = ({ obj }) => {
  const { name, text, namePosition, minDataPosition } = useContext(Context);

  const { isBigChip, border } = useSelector((state) => state.configurator);
  const { variant } = useSelector((state) => state.variants);

  const [isBorder, setIsBorder] = useState(false);
  const [isTextBorder, setIsTextBorder] = useState(false);

  const fst_styles = {
    width: 'fit-content',
    visibility: namePosition === 0 ? 'visible' : 'hidden',
    cursor: 'move',
    border: isBorder ? '2px dashed white' : 'none',
  };

  const sec_styles = {
    visibility: namePosition === 1 ? 'visible' : 'hidden',
  };

  const third_styles = {
    visibility: minDataPosition === 0 ? 'visible' : 'hidden',
  };

  const fourth_styles = {
    visibility: minDataPosition === 1 ? 'visible' : 'hidden',
  };

  const textStyles = {
    width: 'fit-content',
    visibility: text ? 'visible' : 'hidden',
    cursor: 'move',
    border: isTextBorder ? '2px dashed white' : 'none',
  };

  return (
    <div className={styles.own__design_cards}>
      <div
        className={styles.own__design_cards_card}
        style={{
          backgroundImage: `url('${border ? border : null}'), url('${
            variant !== '' ? variant[0]?.front_img : obj?.back_image || bg
          }')`,
        }}
      >
        <Draggable onDrag={() => setIsTextBorder(true)}>
          <h3 style={textStyles}>{text ? text : 'a'}</h3>
        </Draggable>
        <img style={{ width: isBigChip ? '15%' : '10%' }} src={chip} alt='' />
        <h2 style={third_styles}>0000 0000 0000 0000</h2>
        <h2 style={third_styles}>00/00</h2>
        <Draggable onDrag={() => setIsBorder(true)}>
          <h2 style={fst_styles}>{name ? name : 'kinglet'}</h2>
        </Draggable>
      </div>
      <div
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
        <h2 style={fourth_styles}>0000 0000 0000 0000</h2>
        <h2 style={fourth_styles}>00/00</h2>
        <h2 style={sec_styles}>{name ? name : 'kinglet'}</h2>
      </div>
    </div>
  );
};

export default Cards;
