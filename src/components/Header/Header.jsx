import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
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
          <div key={item.id} className={styles.header__carousel_item}>
            <img src={item.pic} alt='' />
          </div>
        ))}
      </ReactOwlCarousel>
      <div className={styles.header__carousel_item_btns}>
        <Link to='/create-your-own'>
          <button>Create your own</button>
        </Link>
        <Link to='/popular-designs'>
          <button>Browse Pre-Made Designs</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
