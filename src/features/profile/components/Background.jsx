import React from 'react'
import {Avatar, CardMedia, colors, Stack, Typography} from "@mui/material";

const userAuth = {
  avatar: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/messiworldcupkiss-sixteen_nine.jpg?VersionId=KWx9GiX6ck7S__64GF0Obl4osEdybDZW&size=690:388',
  username: 'Nghia Tran Van',
  email: 'nghiatv2603@gmail.com',
  numberPost: 3,
  totalLike: 12123,
  fr: 440,
}

const Background = () => {
  return (<Stack>
      <Stack height={69}></Stack>
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
            <Typography>{userAuth.fr} Friends</Typography>
            <Typography>{userAuth.numberPost} Posts - {userAuth.totalLike} Likes</Typography>
          </Stack>
        </Stack>
        <Stack sx={{display: {xs: 'flex', md: 'none'}}}>
          <Stack position='absolute' pl={60} sx={{top: 440}}>
            <Avatar src={userAuth.avatar} sx={{height: 140, width: 140}}/>
          </Stack>
          <Stack alignItems='center' pt={14} pb={2} color={colors.grey[300]}>
            <Typography fontSize={32} fontWeight={500}>{userAuth.username}</Typography>
            <Typography>{userAuth.fr} Friends</Typography>
            <Typography>{userAuth.numberPost} Posts - {userAuth.totalLike} Likes</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>)
}
export default Background
