import { useContext, useState } from 'react';
import styles from './OwnDesign.module.scss';

import Draggable from 'react-draggable';

import { Context } from '../../context';
import Navbar from '../../components/Navbar/Navbar';
import Configurator from '../../components/Configurator/Configurator';

import chip from '../../assets/icons/chip.png';

const OwnDesign = () => {
  const { name, text, namePosition, minDataPosition, image } =
    useContext(Context);
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
    <>
      <Navbar />
      <div className={styles.own__design_wrapper}>
        <div className={styles.own__design_cards}>
          <div
            className={styles.own__design_cards_card}
            style={{
              backgroundImage: image ? `url('${image}')` : null,
            }}
          >
            <Draggable onDrag={() => setIsTextBorder(true)}>
              <h3 style={textStyles}>{text ? text : 'a'}</h3>
            </Draggable>
            <img src={chip} alt='' />
            <h2 style={third_styles}>0000 0000 0000 0000</h2>
            <h2 style={third_styles}>00/00</h2>
            <Draggable onDrag={() => setIsBorder(true)}>
              <h2 style={fst_styles}>{name ? name : 'kinglet'}</h2>
            </Draggable>
          </div>
          <div
            className={styles.own__design_cards_card}
            style={{
              backgroundImage: image ? `url('${image}')` : null,
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
        <Configurator />
      </div>
    </>
  );
};

export default OwnDesign;
