import React from 'react'
import {Avatar, CardMedia, colors, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";


const Background = () => {

  const userAuth = useSelector(state => state.authen.user) ;
  return (<Stack>
      <Stack direction='column'>
        <Stack width={1080}>
          <CardMedia
            component="img"
            image='https://lumiere-a.akamaihd.net/v1/images/csr_yt_ae2ddc55.jpeg?region=0,0,1920,1080'
            alt="Paella dish"
            height="400"
          />
        </Stack>
        <Stack sx={{display: {xs: 'none', md: 'flex'}}}>
          <Stack position='absolute' pl={15} sx={{top: 440}}>
            <Avatar src={userAuth.avatar} sx={{height: 140, width: 140}}/>
          </Stack>
          <Stack pl={35} pb={2} pt={2} color={colors.grey[300]}>
            <Typography fontSize={32} fontWeight={500}>{userAuth.username}</Typography>
            <Typography>{userAuth.friends.length} Friends</Typography>
            <Typography>{userAuth.posts.length} Posts </Typography>
          </Stack>
        </Stack>
        <Stack sx={{display: {xs: 'flex', md: 'none'}}}>
          <Stack position='absolute' pl={60} sx={{top: 440}}>
            <Avatar src={userAuth.avatar} sx={{height: 140, width: 140}}/>
          </Stack>
          <Stack alignItems='center' pt={14} pb={2} color={colors.grey[300]}>
            <Typography fontSize={32} fontWeight={500}>{userAuth.username}</Typography>
            <Typography>{userAuth.friends.length} Friends</Typography>
            <Typography>{userAuth.posts.length} Posts </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>)
}
export default Background
