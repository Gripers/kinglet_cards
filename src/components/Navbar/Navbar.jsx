import {useContext, useState} from 'react';
import styles from './Navbar.module.scss';

import {NavLink} from 'react-router-dom';

import {Context} from '../../context';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const { setIsDrawerOpen } = useContext(Context);
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener('resize', (event) =>
    setSize(event.target.innerWidth)
  );

  return (
    <div className={styles.navbar__wrapper}>
      <div className={styles.navbar__logo}>
        <img src={logo} alt='' />
      </div>
      <div className={styles.navbar__links}>
        {size < 1000 ? (
          <button onClick={() => setIsDrawerOpen(true)}>...</button>
        ) : (
          <>
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
                <NavLink
                  key={nav.route}
                  to={nav.route}
                  style={({ isActive }) =>
                    isActive ? { color: '#de9d6b' } : { color: 'white' }
                  }
                >
                  {nav.title}
                </NavLink>
              ))}
            </nav>
            <button>Create Your Own</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
