/* eslint-disable react/react-in-jsx-scope */
import { Box, Toolbar } from "@mui/material";
import { useSharedContext } from "../../../context/SharedContext";
import Header from "../../Header";
import SideMenu from "../../SideMenu";
import { Outlet } from "@tanstack/react-router";

const AppLayout: React.FC = () => {
  const { isOpen, setOpen } = useSharedContext();

  return (
    <Box sx={{ display: "flex" }}>
      <Header onToggleMenu={() => setOpen(!isOpen)} />
      <SideMenu />
      <Box component="main" sx={{ flexGrow: 1, px: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
      {/* {process.env.NODE_ENV !== "production" && <TanStackRouterDevtools />} */}
    </Box>
  );
};

export default AppLayout;