import React from 'react';
import { colors, Stack, Typography, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Tooltip from '@mui/material/Tooltip';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuid } from 'uuid';

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
      },{
         id: 10,
         user: 'Minh',
         message: 'hi Nghia',
         time: '9:16',
      },{
         id: 11,
         user: 'Minh',
         message: 'hi Nghia',
         time: '9:16',
      },{
         id: 12,
         user: 'Minh',
         message: 'hi Nghia',
         time: '9:16',
      },{
         id: 13,
         user: 'Minh',
         message: 'hi Nghia',
         time: '9:16',
      },
   ],
};
const styleIconButton = {
   height: 36,
   width: 36,
   color: colors.grey[300],
   '&:hover': { backgroundColor: colors.grey[700] },
};
const ContentMessage = () => {
   const [contentMessage, setContentMessage] = React.useState('');
   const [messages, setMessages] = React.useState(dataMessage.message);
   const handleSetNewMessage = (e) => {
      setContentMessage(e.target.value);
   };
   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         handleSendMessage();
      }
   };

   function handleSendMessage() {
      const newMessagge = {
         id: uuid(),
         user: 'me',
         message: contentMessage,
         time: Date.now(),
      };
      if (newMessagge.message !== '') {
         setMessages([newMessagge, ...messages]);
      }
      setContentMessage('');
   }

   return (
      <>
         <Stack
            width={'100%'}
            height={'100%'}
            bgcolor={colors.grey[900]}
            color={colors.grey[300]}
         >
            <Stack
               height={76}
               bgcolor={colors.grey[900]}
               direction={'row'}
               alignItems={'center'}
               px={2}
               justifyContent={'space-between'}
               borderBottom={1}
               borderColor={colors.grey[800]}
            >
               <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Avatar sx={{ height: 50, width: 50 }}></Avatar>
                  <Typography fontSize={20} fontWeight={500}>
                     Nghia Tran Van
                  </Typography>
               </Stack>
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
               height={"100%"}
               sx={{ overflow: 'auto' }}
               spacing={1}
               px={1}
            >
               {messages.map((msg) => (
                  <Stack
                     key={msg.id}
                     direction={msg.user !== 'me' ? 'row' : 'row-reverse'}
                  >
                     {msg.user !== 'me' && (
                        <Avatar
                           sx={{ height: 32, width: 32, marginRight: 0.75 }}
                           src={dataMessage.avatar}
                        />
                     )}
                     <Tooltip
                        title={msg.time}
                        placement={msg.user !== 'me' ? 'right' : 'left'}
                     >
                        <Stack
                           px={1.5}
                           py={0.75}
                           borderRadius={4}
                           maxWidth={400}
                           bgcolor={
                              msg.user !== 'me'
                                 ? colors.grey[700]
                                 : colors.blue[500]
                           }
                        >
                           <Typography fontSize={16}>{msg.message}</Typography>
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
                    width: '100%'
                  }}
                  onChange={handleSetNewMessage}
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
