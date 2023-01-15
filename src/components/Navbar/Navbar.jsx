import { useContext, useState } from 'react';
import styles from './Navbar.module.scss';

import { NavLink } from 'react-router-dom';

import { Context } from '../../context';
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
          <button onClick={() => setIsDrawerOpen(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              fill='currentColor'
              className='bi bi-list'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </button>
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
