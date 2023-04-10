import React, {useCallback, useEffect} from 'react';
import { colors, Stack } from '@mui/material';
import SideBarApp from './components/AppBar';
import MainApp from 'src/features/home/components/MainApp';
import TabMessage from 'src/features/message/TabMessage';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const HomePage = () => {
   const [indexPage, setIndexPage] = React.useState(0);
   const handleSetIndex = useCallback(
     (index) => {
       setIndexPage(index);
     }
   ,[])

   const isLogin = useSelector((state) => state.authen.isLogin);
   console.log(isLogin);
   const navigate = useNavigate();
   useEffect(() => {
      if (!isLogin) {
         navigate('authen/login');
      }
   }, [isLogin]);

   return (
      <React.Fragment>
         <Stack>
            <SideBarApp
               handleSetIndex={handleSetIndex}
            />
            <Stack height={'70px'} bgcolor={colors.grey[800]}></Stack>
            <Outlet />
         </Stack>
      </React.Fragment>
   );
};
export default HomePage;
