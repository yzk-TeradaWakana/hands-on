import React from 'react';
import styles from './Header.style';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useNavigate } from '@tanstack/react-router';
import ButtonMenu from '../ButtonMenu';

const Header: React.FC<{ onToggleMenu: () => void }> = ({ onToggleMenu }) => {
  // const { signOut } = useAuthenticator();
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar variant="dense" sx={{ backgroundColor: "#00339" }}>
        <Button
          style={{ fill: "#E8E8E8" }}
          size="small"
          onClick={onToggleMenu}
          sx={{ color: "inherit", display: "block" }}
        >
          <ButtonMenu />
        </Button>
        <Button
          onClick={() => {
            // navigate({
            //   to: "/suzuki/order/master",
            // });
          }}
          sx={{ color: "inherit", display: "block" }}
        >
          <Typography color="#E8E8E8" component="span">
            {import.meta.env.VITE_APP_TITLE}
          </Typography>
        </Button>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconButton
          style={{ fill: "#E8E8E8" }}
          size="small"
          onClick={() => {
            // signOut();
          }}
        >
          <Logout fontSize="small" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;