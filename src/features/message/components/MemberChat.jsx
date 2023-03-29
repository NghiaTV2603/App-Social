import React, { useEffect } from 'react';
import { colors, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import messageSlice, { fetchChat, fetchMessage } from 'src/features/message/messageSlice';
import {useNavigate} from "react-router";

const MemberChat = () => {
   const dataChats = useSelector((state) => state.message.chats);
   const userAuth = useSelector((state) => state.authen.user);
   const dispatch = useDispatch();
   const token = useSelector((state) => state.authen.token);
   const navigate = useNavigate()
   const handleSelectChat = (chat) => {

      dispatch(messageSlice.actions.setChat(chat));
      navigate(`/chat/${chat._id}`);

   };
   useEffect(() => {
      dispatch(fetchChat(token));
   }, []);
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
            <Stack style={{ maxHeight: '100%', overflow: 'auto' }} p={1} >
               {dataChats.map((msg) => (
                  <Stack
                     pl={1}
                     key={msg._id}
                     borderRadius={2}
                     direction="row"
                     py={1}
                     spacing={1}
                     sx={{
                        '&:hover': { backgroundColor: colors.grey[800] },
                        cursor: 'pointer',
                     }}
                     onClick={() => handleSelectChat(msg)}
                  >
                     <Avatar
                        src={
                           msg.users.find((item) => item._id !== userAuth._id)
                              ?.avatar
                        }
                        sx={{ height: 48, width: 48 }}
                     />
                     <Stack>
                        <Typography fontSize={18} fontWeight={400}>
                           {
                              msg.users.find(
                                 (item) => item._id !== userAuth._id
                              )?.username
                           }
                        </Typography>
                        <Stack direction={'row'} >
                           <Typography fontSize={13} sx={{marginRight:1}}>
                              {msg.latestMessage.sender === userAuth._id ||msg.latestMessage.sender?._id === userAuth._id
                                 ? 'You : '
                                 : ''}
                           </Typography>
                           <Typography fontSize={13}>
                              {msg.latestMessage.content.length > 45
                                 ? msg.message.slice(0, 45) + '...'
                                 : msg.latestMessage.content}
                           </Typography>
                        </Stack>
                     </Stack>
                  </Stack>
               ))}
            </Stack>
         </Stack>
      </>
   );
};
export default MemberChat;
