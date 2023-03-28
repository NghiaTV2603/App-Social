import React from 'react';
import {colors, Stack} from '@mui/material';
import SideBarApp from './components/AppBar'
import MainApp from "src/features/home/components/MainApp";
import TabMessage from "src/features/message/TabMessage";
import {Outlet} from "react-router-dom";


const HomePage = () => {

  const [indexPage, setIndexPage] = React.useState(0)
  const handleSetIndex = (index) => {
    setIndexPage(index)
  }
  const [isTabChat,setIsTabChat] = React.useState(false);
  const handleOpenChat = () => {
    setIsTabChat(true);
  }
  const handleCloseChat = () => {
    setIsTabChat(false);
  }
  return (
    <React.Fragment>
      <Stack>
        <SideBarApp handleSetIndex={handleSetIndex} onOpenChat ={handleOpenChat} />
        <Stack height={"70px"} bgcolor={colors.grey[800]}>
        </Stack>
        <Outlet/>
      </Stack>
    </React.Fragment>
  );
};
export default HomePage;
