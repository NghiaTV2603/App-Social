import * as React from "react";
import {Badge, colors, Stack} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import {Link} from "react-router-dom"

const dataNotifications = [
  {
    id: 1,
    username: 'Nam Nguyen Van',
    avatar: '',
    massage: 'commented on your post',
  },
  {
    id: 2,
    username: 'Nam Nguyen Van',
    avatar: '',
    massage: 'liked your post',
  },
]

const dataMessage = [
  {
    id: 1,
    username: 'Minh Tran',
    avatar: '',
    message: 'Hello my fr',
  },
  {
    id: 2,
    username: 'Nam Nguyen',
    avatar: '',
    message: 'Hello my fr Hello my fr Hello my fr Hello my fr Hello my fr Hello my fr ',
  },
  {
    id: 3,
    username: 'Hang Dinh',
    avatar: '',
    message: 'param mentor sao ',
  },
  {
    id: 4,
    username: 'Piter Mile',
    avatar: '',
    message: 'Hello my fr',
  },
  {
    id: 5,
    username: 'Piter Mile',
    avatar: '',
    message: 'Hello my fr',
  },
  {
    id: 6,
    username: 'Piter Mile',
    avatar: '',
    message: 'Hello my fr',
  },
  {
    id: 7,
    username: 'Piter Mile',
    avatar: '',
    message: 'Hello my fr',
  },
];

const RightAppBar = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElMessage, setAnchorElMessage] = React.useState(null);
  const open = Boolean(anchorEl);
  const openMessage = Boolean(anchorElMessage);

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

  return (
    <>
      <Stack direction='row' sx={{flexGrow: 0}} spacing={1.5}>
        <Tooltip title='Messger'>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: colors.grey[700]
              },
              backgroundColor: colors.grey[700],
              height: 42, width: 42,
            }}
            onClick={handleClickMessage}
          >
            <Badge badgeContent={0} color="primary">
              <MessageIcon/>
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
            "& .MuiPaper-root": {
              backgroundColor: colors.grey[800]
            },
          }}
        >
          <Stack color={colors.grey[300]} width={400} px={1}>
            <Stack direction='row' justifyContent='space-between'>
              <Typography py={0.5} px={0.5} fontSize={28} fontWeight={600}>Chats</Typography>
              <Stack direction='row' alignItems='center'>
                <Tooltip title={'Sea all in messenger'}>
                  <IconButton sx={{height: 32, width: 32, color: colors.grey[400]}}>
                    <ZoomOutMapIcon fontSize='small'/>
                  </IconButton>
                </Tooltip>
                <Tooltip title={"New Message"}>
                  <IconButton sx={{height: 32, width: 32, color: colors.grey[400]}}>
                    <LibraryAddIcon fontSize='small'/>
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <input placeholder="Search Messenger" style={{
              height: 34,
              backgroundColor: colors.grey[900],
              border: "none",
              borderRadius: 24,
              color: colors.grey[400],
              outline: 'none',
              paddingLeft: 16,
              marginBottom: 8
            }}
            />
            <Stack style={{maxHeight: 350, overflow: 'auto'}}>
              {
                dataMessage.map(msg => (
                  <Stack pl={1} key={msg.id} borderRadius={2} direction='row' py={1} spacing={1}
                         sx={{'&:hover': {backgroundColor: colors.grey[900]}, cursor: 'pointer'}}
                  onClick={()=> {
                    props.onOpenChat();
                    handleCloseMessage();
                  }} >
                    <Avatar src={msg.avatar} sx={{height: 48, width: 48}}/>
                    <Stack>
                      <Typography fontSize={18} fontWeight={400}>{msg.username}</Typography>
                      <Typography
                        fontSize={13}>{(msg.message.length > 45) ? msg.message.slice(0, 45) + "..." : msg.message}</Typography>
                    </Stack>
                  </Stack>
                ))
              }
            </Stack>
            <Stack alignItems='center' pt={1}>
              <Link to="/message">
                <Typography fontSize={16} fontWeight={400} color={colors.blue[400]}>See all in Messenger</Typography>
              </Link>
            </Stack>
          </Stack>
        </Menu>

        <Tooltip title='Notifications'>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: colors.grey[700]
              },
              backgroundColor: colors.grey[700],
              height: 42, width: 42,
            }}
            onClick={handleClick}
          >
            <Badge badgeContent={17} color="primary">
              <NotificationsIcon/>
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
            "& .MuiPaper-root": {
              backgroundColor: colors.grey[700]
            },
          }}
        >
          {dataNotifications.map((noti) => (
            <MenuItem key={noti.id} sx={{
              "&:hover": {
                backgroundColor: colors.grey[800]
              }
            }}>
              <Avatar src={noti.avatar}/>
              <Typography fontSize={18} color={colors.grey[100]} mx={1}>{noti.username}</Typography>
              <Typography color={colors.grey[300]}>{noti.massage}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
            <Avatar alt="Remy Sharp" sx={{height: 42, width: 42,}}
                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/messiworldcupkiss-sixteen_nine.jpg?VersionId=KWx9GiX6ck7S__64GF0Obl4osEdybDZW&size=690:388"/>
          </IconButton>
        </Tooltip>
        <Menu
          sx={{mt: '45px'}}
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
            "& .MuiPaper-root": {
              backgroundColor: colors.grey[700]
            },
          }}
        >
          <MenuItem onClick={
            () => {
              handleCloseUserMenu();
            }}
                    sx={{
                      "&:hover": {
                        backgroundColor: colors.grey[800]
                      }
                    }}
          >
            <Stack direction='row' alignItems='center' spacing={1} color={colors.grey[200]}>
              <SettingsIcon fontSize='small'/>
              <Typography textAlign="center">Setting</Typography>
            </Stack>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu} sx={{
            "&:hover": {
              backgroundColor: colors.grey[800]
            }
          }}>
            <Stack direction='row' alignItems='center' spacing={1} color={colors.grey[200]}>
              <LogoutIcon fontSize='small'/>
              <Typography textAlign="center">Logout</Typography>
            </Stack>
          </MenuItem>
        </Menu>
      </Stack>


      {/*<Stack sx={{flexGrow: 0}}>*/}
      {/*  <Stack  direction='row' spacing={1.5} id='right-app-bar'>*/}
      {/*    <Tooltip title='Notifications'>*/}
      {/*      <IconButton*/}
      {/*        size="large"*/}
      {/*        aria-label="show 17 new notifications"*/}
      {/*        color="inherit"*/}
      {/*        sx={{*/}
      {/*          '&:hover': {*/}
      {/*            backgroundColor: colors.grey[700]*/}
      {/*          },*/}
      {/*          backgroundColor: colors.grey[700],*/}
      {/*          width: 42, height: 42,*/}
      {/*        }}*/}
      {/*        onClick={handleClick}*/}
      {/*      >*/}
      {/*        <Badge badgeContent={0} color="primary">*/}
      {/*          <MessageIcon/>*/}
      {/*        </Badge>*/}
      {/*      </IconButton>*/}
      {/*    </Tooltip>*/}
      {/*    <Tooltip title='Notifications'>*/}
      {/*      <IconButton*/}
      {/*        size="large"*/}
      {/*        aria-label="show 17 new notifications"*/}
      {/*        color="inherit"*/}
      {/*        sx={{*/}
      {/*          '&:hover': {*/}
      {/*            backgroundColor: colors.grey[700]*/}
      {/*          },*/}
      {/*          backgroundColor: colors.grey[700],*/}
      {/*          width: 42, height: 42,*/}
      {/*        }}*/}
      {/*        onClick={handleClick}*/}
      {/*      >*/}
      {/*        <Badge badgeContent={17} color="primary">*/}
      {/*          <NotificationsIcon/>*/}
      {/*        </Badge>*/}
      {/*      </IconButton>*/}
      {/*    </Tooltip>*/}
      {/*    <Tooltip title="Open settings">*/}
      {/*      <IconButton onClick={handleClick} sx={{p: 0}}>*/}
      {/*        <Avatar alt="Remy Sharp" sx={{width: 42, height: 42}}*/}
      {/*                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/messiworldcupkiss-sixteen_nine.jpg?VersionId=KWx9GiX6ck7S__64GF0Obl4osEdybDZW&size=690:388"/>*/}
      {/*      </IconButton>*/}
      {/*    </Tooltip>*/}
      {/*  </Stack>*/}
      {/*  <Menu*/}
      {/*    anchorEl={anchorEl}*/}
      {/*    open={open}*/}
      {/*    onClose={handleClose}*/}
      {/*    onClick={handleClose}*/}
      {/*    anchorOrigin={{*/}
      {/*      vertical: 'bottom',*/}
      {/*      horizontal: 'right',*/}
      {/*    }}*/}
      {/*    keepMounted*/}
      {/*    transformOrigin={{*/}
      {/*      vertical: 'top',*/}
      {/*      horizontal: 'right',*/}
      {/*    }}*/}
      {/*    sx={{*/}
      {/*      "& .MuiPaper-root": {*/}
      {/*        backgroundColor: colors.grey[700]*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {dataNotifications.map((noti) => (*/}
      {/*      <MenuItem key={noti.id} sx={{*/}
      {/*        "&:hover": {*/}
      {/*          backgroundColor: colors.grey[800]*/}
      {/*        }*/}
      {/*      }}>*/}
      {/*        <Avatar src={noti.avatar}/>*/}
      {/*        <Typography fontSize={18} color={colors.grey[100]} mx={1}>{noti.username}</Typography>*/}
      {/*        <Typography color={colors.grey[300]}>{noti.massage}</Typography>*/}
      {/*      </MenuItem>*/}
      {/*    ))}*/}
      {/*  </Menu>*/}
      {/*</Stack>*/}
    </>
  )
}

export default RightAppBar
