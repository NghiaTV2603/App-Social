import React from 'react'
import {Avatar, Button, colors, Divider, Stack, Typography,Slide,Dialog} from "@mui/material";
import {DialogChangePassword, DialogEditUsername} from "src/features/profile/components/DialogEdit";

const userAuth = {
  avatar: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/messiworldcupkiss-sixteen_nine.jpg?VersionId=KWx9GiX6ck7S__64GF0Obl4osEdybDZW&size=690:388',
  username: 'Nghia Tran Van',
  email: 'nghiatv2603@gmail.com',
  numberPost: 3,
  totalLike: 12123,
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SettingUser = () => {


  // edit username
  const [openEditName, setOpenEditName] = React.useState(false);
  const handleClickOpen = () => {
    setOpenEditName(true);
  };
  const handleClose = () => {
    setOpenEditName(false);
  };

  // change password
  const[openChangePassword,setOpenChangePassword] = React.useState(false);
  const handleClickOpenChangePassword = () => {
    setOpenChangePassword(true);
  };
  const handleCloseChangePassword = () => {
    setOpenChangePassword(false);
  };

  return (
    <>
      <Stack m={1} direction='row-reverse' color={colors.grey[400]} sx={{display: {xs: 'none', md: 'flex'}}}>
        <Stack  width={360} bgcolor={colors.grey[800]} borderRadius={4}>
          <Stack direction='row' py={2} px={3} alignItems='center'>
            <Avatar src={userAuth.avatar} sx={{height: 72, width: 72}}/>
            <Stack ml={2}>
              <Typography color={colors.grey[300]} variant='h6' fontSize={24}>{userAuth.username}</Typography>
              <Stack>
                <Typography fontSize={14} sx={{color: colors.grey[400]}}>{userAuth.numberPost} Posts
                  - {userAuth.totalLike} Likes</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack px={2}>
            <Divider sx={{backgroundColor: colors.grey[600]}}/>
            <Stack direction='row' alignItems='center' mt={2}>
              <Typography fontSize={16} mr={1}>Username:</Typography>
              <Typography color={colors.grey[300]} variant='h6' fontSize={20} mr={4}>{userAuth.username}</Typography>
              <Button onClick={handleClickOpen} sx={{
                backgroundColor: colors.grey[700],
                color: colors.grey[300],
                '&:hover': {backgroundColor: colors.grey[900]}
              }}>Edit</Button>
            </Stack>
            <Dialog
              open={openEditName}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogEditUsername user={userAuth} handleCloseModal={handleClose}/>
            </Dialog>
            <Stack direction='column' pt={1.5}>
              <Typography variant='h6' fontSize={18}>Change Password </Typography>
              <Button sx={{width:90}} variant='contained' onClick={handleClickOpenChangePassword}>Change</Button>
            </Stack>
            <Dialog
              open={openChangePassword}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleCloseChangePassword}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogChangePassword onCloseModal={handleCloseChangePassword}/>
            </Dialog>
            <Stack direction='column' pt={1.5} pb={2}>
              <Typography fontSize={18} variant='h6'>Change Avatar </Typography>
              <Stack direction='row'>
                <Button variant='contained'>Change</Button>
                <Button sx={{color:colors.grey[300] ,marginLeft:2}}>Remote</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default SettingUser
