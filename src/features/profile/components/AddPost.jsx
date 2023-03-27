import React, {useState} from 'react'
import {Avatar, Box, Button, colors, Divider, Input, Stack, Typography} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import BurstModeIcon from '@mui/icons-material/BurstMode';

const AddPost = (props) => {
  const [caption, setCaption] = useState('')
  const user = props.user
  const handleClosePopup = () => {
    setTimeout(() => {
      props.onClose()
    }, 0)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      caption: data.get('caption'),
    });
  }
  return (
    <>
      <Stack
        sx={{bgcolor: colors.grey[800], width: 500, color: colors.grey[200]}}
      >
        <DialogTitle fontSize={24} align="center">
          Create Post
        </DialogTitle>
        <Divider sx={{backgroundColor: colors.grey[600]}}/>
        <DialogContent>
          <Stack direction='row' alignItems='center' spacing={1}>
            <Avatar src={user.avatar}/>
            <Typography variant='h6'>{user.username}</Typography>
          </Stack>
          <Input fullWidth multiline sx={{marginY: 1, color: colors.grey[300]}} placeholder="What's on your mind ?"
                 autoFocus name="caption"/>
          <Stack mt={1} px={2} direction='row' alignItems='center' bgcolor={colors.grey[900]} borderRadius={4}
                 height={40}
                 justifyContent='space-between'
                 sx={{'&:hover': {backgroundColor: colors.grey[700]}, cursor: 'pointer'}}>
            <Typography color={colors.grey[400]}>Add Photo/Video</Typography>
            <BurstModeIcon sx={{color: colors.grey[400]}}/>
          </Stack>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Box pt={3} align="right">
              <Button
                sx={{marginRight: 2, color: 'white'}}
                onClick={handleClosePopup}
              >
                Cancel
              </Button>
              <Button onClick={handleClosePopup} type="submit" variant="contained">
                Post
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Stack>
    </>
  )
}
export default AddPost
