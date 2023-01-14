import { useContext } from 'react';

import { Context } from '../../context';
import EZDrawer from 'react-modern-drawer';

const Drawer = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(Context);

  return (
    <EZDrawer
      open={isDrawerOpen}
      direction='right'
      onClose={() => setIsDrawerOpen(false)}
    >
    </EZDrawer>
  );
};

export default Drawer;
