import styles from './Navbar.module.scss';

import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar__wrapper}>
      <div className={styles.navbar__logo}>
        <img src={logo} alt='' />
      </div>
      <div className={styles.navbar__links}>
        <nav>
          {[
            {
              title: 'Home',
              route: '/',
            },
            {
              title: 'Popular Designs',
              route: '/popular-designs',
            },
            {
              title: 'Contact Us',
              route: '/contact-us',
            },
            {
              title: 'About Us',
              route: '/about-us',
            },
          ].map((nav) => (
            <NavLink to={nav.route}>{nav.title}</NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
