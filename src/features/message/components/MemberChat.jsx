import React from 'react';
import { colors, Stack, Typography } from '@mui/material';
import Avatar from "@mui/material/Avatar";

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
  },{
    id: 8,
    username: 'Piter Mile',
    avatar: '',
    message: 'Hello my fr',
  },{
    id: 9,
    username: 'Piter Mile',
    avatar: '',
    message: 'Hello my fr',
  },{
    id: 10,
    username: 'Piter Mile',
    avatar: '',
    message: 'Hello my fr',
  },{
    id: 11,
    username: 'Piter Mile',
    avatar: '',
    message: 'Hello my fr',
  },{
    id: 12,
    username: 'Piter Mile',
    avatar: '',
    message: 'Hello my fr',
  },
];


const MemberChat = () => {
   return (
      <>
         <Stack
            width={450}
            height={'100%'}
            bgcolor={colors.grey[900]}
            color={colors.grey[300]}
            borderRight={1}
            borderColor={colors.grey[800]}
         >
            <Stack p={2}>
               <input
                  placeholder="Search Messenger"
                  style={{
                     height: 34,
                     backgroundColor: colors.grey[800],
                     border: 'none',
                     borderRadius: 24,
                     color: colors.grey[400],
                     outline: 'none',
                     paddingLeft: 16,
                     marginBottom: 8,
                  }}
               />
            </Stack>
           <Stack style={{maxHeight: "100%", overflow: 'auto'}} p={1}>
             {
               dataMessage.map(msg => (
                 <Stack pl={1} key={msg.id} borderRadius={2} direction='row' py={1} spacing={1}
                        sx={{'&:hover': {backgroundColor: colors.grey[800]}, cursor: 'pointer'}}
                         >
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
         </Stack>
      </>
   );
};
export default MemberChat;
