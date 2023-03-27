import React from 'react'
import {Avatar, colors, Divider, Stack, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import {v4 as uuid} from "uuid";
import Tooltip from "@mui/material/Tooltip";

const dataMessage = {
  username: 'Minh Tran',
  avatar: '',
  message: [
    {
      id: 1,
      user: 'me',
      message: 'dang ngoi code ne',
      time: '9:30',
    },
    {
      id: 2,
      user: 'me',
      message: 'chan qua troi',
      time: '9:29',
    },
    {
      id: 3,
      user: 'minh',
      message: 'dang lam gi the ?',
      time: '9:26',
    },
    {
      id: 4,
      user: 'me',
      message: 'hom nay may co di lam khong day',
      time: '9:20',
    },
    {
      id: 6,
      user: 'Minh',
      message: 'hi Nghia',
      time: '9:16',
    },
    {
      id: 7,
      user: 'minh',
      message: 'dang lam gi the ?',
      time: '9:26',
    },
    {
      id: 8,
      user: 'me',
      message: 'hom nay may co di lam khong day',
      time: '9:20',
    },
    {
      id: 9,
      user: 'Minh',
      message: 'hi Nghia',
      time: '9:16',
    },
  ]
}
const styleIconButton = {
  height: 28, width: 28, color: colors.grey[300], '&:hover': {backgroundColor: colors.grey[700]}
}

const TabMessage = (props) => {
  const [contentMessage, setContentMessage] = React.useState('');
  const [messages, setMessages] = React.useState(dataMessage.message)
  const handleSetNewMessage = (e) => {
    setContentMessage(e.target.value);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage()
    }
  }

  function handleSendMessage() {
    const newMessagge = {
      id: uuid(),
      user: 'me',
      message: contentMessage,
      time: Date.now(),
    }
    if (newMessagge.message !== '') {
      setMessages([newMessagge, ...messages]);
    }
    setContentMessage('')
  }

  return (
    <>
      <Stack width={310} position='fixed' borderRadius={2} color={colors.grey[300]}
             bgcolor={colors.grey[800]} sx={{bottom: 0, right: 50,}}>
        <Stack direction='row' justifyContent='space-between' p={1}>
          <Stack direction='row' alignItems='center' spacing={1}>
            <Avatar src={dataMessage.avatar} sx={{height: 36, width: 36}}/>
            <Typography fontWeight={500} fontSize={18}>{dataMessage.username}</Typography>
          </Stack>
          <Stack direction='row' alignItems='center'>
            <IconButton sx={styleIconButton}><CallIcon fontSize='small'/></IconButton>
            <IconButton sx={styleIconButton}><VideocamIcon/></IconButton>
            <IconButton sx={styleIconButton}><RemoveIcon/></IconButton>
            <IconButton sx={styleIconButton} onClick={()=> props.onCloseChat()} ><ClearIcon/></IconButton>
          </Stack>
        </Stack>
        <Divider sx={{backgroundColor: colors.grey[600]}}/>
        <Stack my={1} direction='column-reverse' height={300} sx={{overflow: 'auto'}} spacing={1} px={1}>
          {
            messages.map(msg => (
              <Stack key={msg.id} direction={msg.user !== 'me' ? 'row' : 'row-reverse'}>
                {msg.user !== 'me' &&
                  <Avatar sx={{height: 32, width: 32, marginRight: 0.75}} src={dataMessage.avatar}/>}
                <Tooltip title={msg.time} placement={msg.user !== 'me' ? 'right' : 'left'}>
                  <Stack px={1.5} py={0.75} borderRadius={4} maxWidth={200}
                         bgcolor={msg.user !== 'me' ? colors.grey[700] : colors.blue[500]}>
                    <Typography fontSize={16}>{msg.message}</Typography>
                  </Stack>
                </Tooltip>
              </Stack>
            ))
          }
        </Stack>
        <Divider sx={{backgroundColor: colors.grey[600]}}/>
        <Stack justifyContent='center' direction='row' p={1} alignItems='center'>
          <input placeholder="Search Messenger" style={{
            height: 34,
            backgroundColor: colors.grey[900],
            border: "none",
            borderRadius: 24,
            color: colors.grey[400],
            outline: 'none',
            paddingLeft: 16,
            width: 270
          }} onChange={handleSetNewMessage} value={contentMessage} onKeyDown={handleKeyDown}
          />
          <IconButton sx={{color: colors.blue[500]}} onClick={handleSendMessage}><SendIcon/></IconButton>
        </Stack>
      </Stack>
    </>
  )
}

export default TabMessage
