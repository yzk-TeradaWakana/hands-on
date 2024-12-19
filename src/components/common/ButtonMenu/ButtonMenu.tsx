import React, { useContext } from 'react';
import styles from './ButtonMenu.style';
import { IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { menuContext } from '../../../store/appState';


const ButtonMenu: React.FC = () => {
  const { isOpened, setOpened } = useContext(menuContext);
  const toggleOpen = () => setOpened(!isOpened);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleOpen}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default ButtonMenu;