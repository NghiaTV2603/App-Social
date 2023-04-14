import * as React from 'react';
import { Badge, colors, Stack } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { persistor } from 'src/app/store';
import { useNavigate } from 'react-router';
import {useEffect, useMemo, useState} from 'react';
import {fetchChat} from "src/features/message/messageSlice";

const RightAppBar = React.memo(() => {
   const dataMessage = useSelector((state) => state.message.chats);
   const dispatch = useDispatch();
   const token = useSelector(state => state.authen.token)
   useEffect(() => {
     if(dataMessage.length === 0){
       dispatch(fetchChat(token));
     }
   },[])
   const dataNotifications = [];
   const userAuth = useSelector((state) => state.authen.user);
   const [anchorElUser, setAnchorElUser] = React.useState(null);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [anchorElMessage, setAnchorElMessage] = React.useState(null);
   const open = Boolean(anchorEl);
   const openMessage = Boolean(anchorElMessage);
   const navigate = useNavigate();

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      // setAnchorEl(document.querySelector("#right-app-bar"));
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   const handleClickMessage = (event) => {
      setAnchorElMessage(event.currentTarget);
      // setAnchorEl(document.querySelector("#right-app-bar"));
   };
   const handleCloseMessage = () => {
      setAnchorElMessage(null);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };
   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };
   const handleLogout = () => {
      persistor.purge();
      window.location.reload();
   };

   const handleOpenChat = (chatId) => {
      console.log(chatId);
      navigate(`chat/${chatId}`);
   };
   const count = useMemo(() => {
      var sum = 0;
      dataMessage.map((item) => {
         if (!item.seen && item.latestMessage?.sender !== userAuth._id) {
            sum++;
         }
      });
      return sum ;
   }, [dataMessage]);
   const [numberSeen, setNumberSeen] = useState(count);

   return (
      <>
         <Stack direction="row" sx={{ flexGrow: 0 }} spacing={1.5}>
            <Tooltip title="Messger">
               <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  sx={{
                     '&:hover': {
                        backgroundColor: colors.grey[700],
                     },
                     backgroundColor: colors.grey[700],
                     height: 42,
                     width: 42,
                  }}
                  onClick={handleClickMessage}
               >
                  <Badge badgeContent={count} color="error">
                     <MessageIcon />
                  </Badge>
               </IconButton>
            </Tooltip>
            <Menu
               anchorEl={anchorElMessage}
               open={openMessage}
               onClose={handleCloseMessage}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               sx={{
                  '& .MuiPaper-root': {
                     backgroundColor: colors.grey[800],
                  },
               }}
            >
               <Stack color={colors.grey[300]} width={400} px={1}>
                  <Stack direction="row" justifyContent="space-between">
                     <Typography
                        py={0.5}
                        px={0.5}
                        fontSize={28}
                        fontWeight={600}
                     >
                        Chats
                     </Typography>
                     <Stack direction="row" alignItems="center">
                        <Tooltip title={'Sea all in messenger'}>
                           <IconButton
                              sx={{
                                 height: 32,
                                 width: 32,
                                 color: colors.grey[400],
                              }}
                           >
                              <ZoomOutMapIcon fontSize="small" />
                           </IconButton>
                        </Tooltip>
                        <Tooltip title={'New Message'}>
                           <IconButton
                              sx={{
                                 height: 32,
                                 width: 32,
                                 color: colors.grey[400],
                              }}
                           >
                              <LibraryAddIcon fontSize="small" />
                           </IconButton>
                        </Tooltip>
                     </Stack>
                  </Stack>
                  <input
                     placeholder="Search Messenger"
                     style={{
                        height: 34,
                        backgroundColor: colors.grey[900],
                        border: 'none',
                        borderRadius: 24,
                        color: colors.grey[400],
                        outline: 'none',
                        paddingLeft: 16,
                        marginBottom: 8,
                     }}
                  />
                  <Stack style={{ maxHeight: 350, overflow: 'auto' }}>
                     {dataMessage.map((msg) => (
                        <Stack
                           pl={1}
                           key={msg._id}
                           borderRadius={2}
                           direction="row"
                           justifyContent={'space-between'}
                           alignItems={'center'}
                           sx={{
                              '&:hover': { backgroundColor: colors.grey[900] },
                              cursor: 'pointer',
                           }}
                           onClick={() => {
                              handleOpenChat(msg._id);
                           }}
                        >
                           <Stack direction={'row'} py={1} spacing={1}>
                              <Avatar
                                 src={
                                    msg.users.find(
                                       (item) => item._id !== userAuth._id
                                    )?.avatar
                                 }
                                 sx={{ height: 48, width: 48 }}
                              />
                              <Stack>
                                 <Typography fontSize={18} fontWeight={400}>
                                    {
                                       msg.users.find(
                                          (item) => item._id !== userAuth._id
                                       )?.username
                                    }
                                 </Typography>
                                 <Stack direction={'row'}>
                                    <Typography
                                       fontSize={13}
                                       sx={{ marginRight: 1 }}
                                    >
                                       {msg.latestMessage?.sender ===
                                          userAuth._id ||
                                       msg.latestMessage?.sender?._id ===
                                          userAuth._id
                                          ? 'You : '
                                          : ''}
                                    </Typography>
                                    <Typography
                                       fontSize={
                                          !msg.seen &&
                                          msg.latestMessage?.sender !==
                                             userAuth._id
                                             ? 15
                                             : 13
                                       }
                                       fontWeight={500}
                                       color={
                                          !msg.seen &&
                                          msg.latestMessage?.sender !==
                                             userAuth._id
                                             ? colors.blue[500]
                                             : ''
                                       }
                                    >
                                       {msg.latestMessage?.content.length > 45
                                          ? msg.message.slice(0, 45) + '...'
                                          : msg.latestMessage?.content}
                                    </Typography>
                                 </Stack>
                              </Stack>
                           </Stack>
                           {!msg.seen &&
                              msg.latestMessage?.sender !== userAuth._id && (
                                 <Stack
                                    height={10}
                                    width={10}
                                    borderRadius={5}
                                    bgcolor={colors.blue[500]}
                                    mr={1}
                                 ></Stack>
                              )}
                        </Stack>
                     ))}
                  </Stack>
                  <Stack alignItems="center" pt={1}>
                     <Link to="/chat/0">
                        <Typography
                           fontSize={16}
                           fontWeight={400}
                           color={colors.blue[400]}
                        >
                           See all in Messenger
                        </Typography>
                     </Link>
                  </Stack>
               </Stack>
            </Menu>

            <Tooltip title="Notifications">
               <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  sx={{
                     '&:hover': {
                        backgroundColor: colors.grey[700],
                     },
                     backgroundColor: colors.grey[700],
                     height: 42,
                     width: 42,
                  }}
                  onClick={handleClick}
               >
                  <Badge badgeContent={17} color="primary">
                     <NotificationsIcon />
                  </Badge>
               </IconButton>
            </Tooltip>
            <Menu
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               onClick={handleClose}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               sx={{
                  '& .MuiPaper-root': {
                     backgroundColor: colors.grey[700],
                  },
               }}
            >
               {dataNotifications.map((noti) => (
                  <MenuItem
                     key={noti.id}
                     sx={{
                        '&:hover': {
                           backgroundColor: colors.grey[800],
                        },
                     }}
                  >
                     <Avatar src={noti.avatar} />
                     <Typography fontSize={18} color={colors.grey[100]} mx={1}>
                        {noti.username}
                     </Typography>
                     <Typography color={colors.grey[300]}>
                        {noti.massage}
                     </Typography>
                  </MenuItem>
               ))}
            </Menu>
            <Tooltip title="Open settings">
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                     alt="Remy Sharp"
                     sx={{ height: 42, width: 42 }}
                     src={userAuth?.avatar}
                  />
               </IconButton>
            </Tooltip>
            <Menu
               sx={{ mt: '45px' }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
               sx={{
                  '& .MuiPaper-root': {
                     backgroundColor: colors.grey[700],
                  },
               }}
            >
               <MenuItem
                  onClick={() => {
                     handleCloseUserMenu();
                  }}
                  sx={{
                     '&:hover': {
                        backgroundColor: colors.grey[800],
                     },
                  }}
               >
                  <Stack
                     direction="row"
                     alignItems="center"
                     spacing={1}
                     color={colors.grey[200]}
                  >
                     <SettingsIcon fontSize="small" />
                     <Typography textAlign="center">Setting</Typography>
                  </Stack>
               </MenuItem>
               <MenuItem
                  onClick={() => {
                     handleCloseUserMenu();
                     handleLogout();
                  }}
                  sx={{
                     '&:hover': {
                        backgroundColor: colors.grey[800],
                     },
                  }}
               >
                  <Stack
                     direction="row"
                     alignItems="center"
                     spacing={1}
                     color={colors.grey[200]}
                  >
                     <LogoutIcon fontSize="small" />
                     <Typography textAlign="center">Logout</Typography>
                  </Stack>
               </MenuItem>
            </Menu>
         </Stack>
      </>
   );
});

export default RightAppBar;
