import { useContext, useEffect } from 'react';
import styles from './Drawer.module.scss';

import EZDrawer from 'react-modern-drawer';
import { useLocation } from 'react-router-dom';

import { Context } from '../../context';
import routes_array from '../Navbar/arr';
import { NavLink } from 'react-router-dom';

const Drawer = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(Context);

  const routeChange = useLocation();

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [routeChange]);

  return (
    <EZDrawer
      open={isDrawerOpen}
      direction='top'
      onClose={() => setIsDrawerOpen(false)}
      className={styles.drawer}
    >
      <nav className={styles}>
        {routes_array.map((nav) => (
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
    </EZDrawer>
  );
};

export default Drawer;
