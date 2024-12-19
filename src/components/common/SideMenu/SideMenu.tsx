import React from 'react';
import { Box, Drawer, Toolbar } from '@mui/material';
import { useSharedContext } from '../../../context/SharedContext';

const DRAWER_WIDTH = 240;

const SideMenu: React.FC = () => {
  const { isOpen } = useSharedContext();

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={isOpen}
      sx={
        isOpen
          ? {
            width: DRAWER_WIDTH,
            flexShrink: 0,
          }
          : { width: 0 }
      }
    >
      <Box
        sx={{
          width: DRAWER_WIDTH,
          m: 2,
        }}
      >
        <Toolbar />
      </Box>
    </Drawer>
  );
};

export default SideMenu;