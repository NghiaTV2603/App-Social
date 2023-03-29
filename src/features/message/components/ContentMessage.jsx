import React from 'react';
import { colors, Stack, Typography, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Tooltip from '@mui/material/Tooltip';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSendMessage } from 'src/features/message/messageSlice';

const styleIconButton = {
   height: 36,
   width: 36,
   color: colors.grey[300],
   '&:hover': { backgroundColor: colors.grey[700] },
};
const ContentMessage = (props) => {
   const userChat = props?.chat;
   const messages = useSelector((state) => state.message.messages);
   const userAuth = useSelector((state) => state.authen.user);
   const token = useSelector((state) => state.authen.token);
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
         dispatch(fetchSendMessage(dataFetch));
      }
      setContentMessage('');
   };
   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         handleSendMessage();
      }
   };

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
