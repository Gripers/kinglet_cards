import styles from './Header.module.scss';

import ReactOwlCarousel from 'react-owl-carousel';

import header_carousel_config from './header_carousel_config';

import fst from '../../assets/images/1card-cover.png';
import sec from '../../assets/images/2-cover.png';
import third from '../../assets/images/3-cover.png';
import fourth from '../../assets/images/4-cover.png';

const Header = () => {
  return (
    <header className={styles.header__wrapper}>
      <ReactOwlCarousel
        {...header_carousel_config}
        className={styles.header__carousel}
      >
        {[
          {
            id: 1,
            pic: fst,
          },
          {
            id: 2,
            pic: sec,
          },
          {
            id: 3,
            pic: third,
          },
          {
            id: 4,
            pic: fourth,
          },
        ].map((item) => (
          <div
            key={item.id}
            className={styles.header__carousel_item}
            style={{ backgroundImage: `url('${item.pic}')` }}
          >
            <div className={styles.header__carousel_item_btns}>
              <button>Create your own</button>
              <button>Browse Pre-Made Designs</button>
            </div>
          </div>
        ))}
      </ReactOwlCarousel>
    </header>
  );
};

export default Header;
