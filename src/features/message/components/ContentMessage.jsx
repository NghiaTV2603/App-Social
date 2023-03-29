import React, { useEffect, useState } from 'react';
import { colors, Stack, Typography, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Tooltip from '@mui/material/Tooltip';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import messageSlice, {
   fetchMessage,
   fetchSendMessage,
} from 'src/features/message/messageSlice';
import io from 'socket.io-client';

const styleIconButton = {
   height: 36,
   width: 36,
   color: colors.grey[300],
   '&:hover': { backgroundColor: colors.grey[700] },
};
const ContentMessage = () => {
   const userChat = useSelector((state) => state.message.currentChat);
   const messages = useSelector((state) => state.message.messages);
   const userAuth = useSelector((state) => state.authen.user);
   const token = useSelector((state) => state.authen.token);
   const [connect, setConnect] = useState(false);
   const url = window.location.href.split('/');
   const chatId = url[url.length - 1];

   const socket = io('http://localhost:5000');
   useEffect(() => {
      socket.emit('setup', userAuth._id);
      socket.on('connected', () => {
         setConnect(true);
      });
   }, []);

   useEffect(() => {
      socket.on('message received', (newMessage) => {
         dispatch(messageSlice.actions.addMessage(newMessage));
      });
   });

   useEffect(() => {
      if (chatId != '0') {
         const data = {
            token: token,
            id: chatId,
         };
         dispatch(fetchMessage(data));
         socket.emit('joinChat', chatId);
      } else {
         dispatch(messageSlice.actions.resetChat());
      }
   }, [chatId]);
   const dispatch = useDispatch();
   const [contentMessage, setContentMessage] = React.useState('');
   const handleSendMessage = () => {
      const data = {
         chatId: userChat._id,
         content: contentMessage,
      };
      const dataFetch = {
         token,
         data,
      };
      if (contentMessage) {
         dispatch(fetchSendMessage(dataFetch)).then((res) => {
            socket.emit('newMessage', res.payload);
         });
      }
      setContentMessage('');
   };
   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         handleSendMessage();
      }
   };

   // handle socket io

   return (
      <>
         <Stack
            width={'100%'}
            height={'100%'}
            bgcolor={colors.grey[900]}
            color={colors.grey[300]}
         >
            <Stack
               height={96}
               bgcolor={colors.grey[900]}
               direction={'row'}
               alignItems={'center'}
               px={2}
               justifyContent={'space-between'}
               borderBottom={1}
               borderColor={colors.grey[800]}
            >
               {userChat && (
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                     <Avatar
                        sx={{ height: 45, width: 45 }}
                        src={
                           userChat?.users.find(
                              (item) => item._id !== userAuth._id
                           )?.avatar
                        }
                     ></Avatar>
                     <Typography fontSize={20} fontWeight={500}>
                        {
                           userChat?.users.find(
                              (item) => item._id !== userAuth._id
                           )?.username
                        }
                     </Typography>
                  </Stack>
               )}
               <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  <IconButton sx={styleIconButton}>
                     <CallIcon fontSize="medium" />
                  </IconButton>
                  <IconButton sx={styleIconButton}>
                     <VideoCallIcon fontSize="large" />
                  </IconButton>
               </Stack>
            </Stack>
            <Stack
               my={1}
               direction="column-reverse"
               height={'100%'}
               sx={{ overflow: 'auto' }}
               spacing={1}
               px={2}
            >
               {messages.map((msg) => (
                  <Stack
                     key={msg._id}
                     direction={
                        msg.sender._id !== userAuth._id ? 'row' : 'row-reverse'
                     }
                  >
                     {msg.sender._id !== userAuth._id && (
                        <Avatar
                           sx={{ height: 32, width: 32, marginRight: 0.75 }}
                           src={msg.sender.avatar}
                        />
                     )}
                     <Tooltip
                        title={msg.time}
                        placement={
                           msg.sender._id !== userAuth._id ? 'right' : 'left'
                        }
                     >
                        <Stack
                           px={1.5}
                           py={0.75}
                           borderRadius={4}
                           maxWidth={400}
                           bgcolor={
                              msg.sender._id !== userAuth._id
                                 ? colors.grey[700]
                                 : colors.blue[500]
                           }
                        >
                           <Typography fontSize={16}>{msg.content}</Typography>
                        </Stack>
                     </Tooltip>
                  </Stack>
               ))}
            </Stack>

            <Stack
               justifyContent="center"
               direction="row"
               p={1}
               alignItems="center"
               px={2}
            >
               <input
                  placeholder="ab..."
                  style={{
                     height: 34,
                     backgroundColor: colors.grey[800],
                     border: 'none',
                     borderRadius: 24,
                     color: colors.grey[400],
                     outline: 'none',
                     paddingLeft: 16,
                     width: '100%',
                  }}
                  onChange={(e) => setContentMessage(e.target.value)}
                  value={contentMessage}
                  onKeyDown={handleKeyDown}
               />
               <IconButton
                  sx={{ color: colors.blue[500] }}
                  onClick={handleSendMessage}
               >
                  <SendIcon />
               </IconButton>
            </Stack>
         </Stack>
      </>
   );
};
export default ContentMessage;
