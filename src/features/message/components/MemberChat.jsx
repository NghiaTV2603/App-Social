import React, { useEffect, useState } from 'react';
import { colors, Stack, Typography, styled, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useDispatch, useSelector } from 'react-redux';
import messageSlice, {
   fetchAccessChat,
   fetchChat,
   fetchMessage,
} from 'src/features/message/messageSlice';
import { useNavigate } from 'react-router';
import Skeleton from '@mui/material/Skeleton';
import { fetchListUser } from 'src/features/profile/profileSlice';

const CustomSkeleton = styled(Skeleton)({
   backgroundColor: colors.grey[700],
});

const MemberChat = () => {
   const dataChats = useSelector((state) => state.message.chats);
   const status = useSelector((state) => state.message.status);
   const userAuth = useSelector((state) => state.authen.user);
   const listUser = useSelector((state) => state.profile.listUser);
   const token = useSelector((state) => state.authen.token);
   const [isSearch, setIsSearch] = useState(false);
   const [filter, setFilter] = useState('');
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleSelectChat = (chat) => {
      dispatch(messageSlice.actions.setChat(chat));
      navigate(`/chat/${chat._id}`);
   };
   useEffect(() => {
      if (listUser.length === 0) {
         dispatch(fetchListUser(token));
         dispatch(fetchChat(token));
      }
   }, []);

   function searchByUsername(arr, keyword) {
      const lowerCaseKeyword = keyword.toLowerCase();
      return arr.filter((user) =>
         user.username.toLowerCase().includes(lowerCaseKeyword)
      );
   }
   const userFilter = searchByUsername(listUser, filter);
   const handleAccessChat = (user_id) => {
      const data = {
         userId: user_id,
      };
      const params = {
         token,
         data,
      };
      dispatch(fetchAccessChat(params)).then((res) => {
         dispatch(messageSlice.actions.setChat(res.payload));
         navigate(`/chat/${res.payload._id}`);
         setIsSearch(false);
      });
   };
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
            <Stack
               p={2}
               direction={'row'}
               alignItems={'center'}
               justifyContent={'center'}
            >
               {isSearch && (
                  <IconButton
                     aria-label="delete"
                     sx={{
                        color: colors.grey[200],
                        height: 40,
                        width: 40,
                        marginBottom: 1,
                        marginRight: 1,
                     }}
                     onClick={() => setIsSearch(false)}
                  >
                     <KeyboardBackspaceIcon />
                  </IconButton>
               )}
               <input
                  onClick={() => setIsSearch(true)}
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
                     width: '100%',
                  }}
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
               />
            </Stack>
            <Stack style={{ maxHeight: '100%', overflow: 'auto' }} p={1}>
               {status === 'loading' && dataChats.length === 0 && (
                  <Stack>
                     <Stack
                        direction="row"
                        py={1}
                        spacing={1}
                        px={1}
                        alignItems={'center'}
                     >
                        <CustomSkeleton
                           variant="circular"
                           width={56}
                           height={56}
                        />
                        <Stack>
                           <CustomSkeleton
                              width={200}
                              variant="text"
                              height={25}
                           />
                           <CustomSkeleton
                              width={100}
                              variant="text"
                              height={20}
                           />
                        </Stack>
                     </Stack>
                     <Stack
                        direction="row"
                        py={1}
                        spacing={1}
                        px={1}
                        alignItems={'center'}
                     >
                        <CustomSkeleton
                           variant="circular"
                           width={56}
                           height={56}
                        />
                        <Stack>
                           <CustomSkeleton
                              width={200}
                              variant="text"
                              height={25}
                           />
                           <CustomSkeleton
                              width={100}
                              variant="text"
                              height={20}
                           />
                        </Stack>
                     </Stack>
                  </Stack>
               )}
               {!isSearch &&
                  dataChats.map((msg) => (
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
                              msg.users.find(
                                 (item) => item._id !== userAuth._id
                              )?.avatar
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
                           <Stack direction={'row'}>
                              <Typography fontSize={13} sx={{ marginRight: 1 }}>
                                 {msg.latestMessage?.sender === userAuth._id ||
                                 msg.latestMessage?.sender?._id === userAuth._id
                                    ? 'You : '
                                    : ''}
                              </Typography>
                              <Typography fontSize={13}>
                                 {msg.latestMessage?.content.length > 45
                                    ? msg.message.slice(0, 45) + '...'
                                    : msg.latestMessage?.content}
                              </Typography>
                           </Stack>
                        </Stack>
                     </Stack>
                  ))}
               {isSearch && (
                  <Stack>
                     {userFilter.map((user) => (
                        <Stack
                           pl={1}
                           key={user._id}
                           borderRadius={2}
                           direction="row"
                           alignItems={'center'}
                           py={1}
                           spacing={1}
                           sx={{
                              '&:hover': { backgroundColor: colors.grey[800] },
                              cursor: 'pointer',
                           }}
                           onClick={() => {
                              handleAccessChat(user._id);
                           }}
                        >
                           <Avatar src={user.avatar} />
                           <Typography fontSize={18} fontWeight={400}>
                              {user.username}
                           </Typography>
                        </Stack>
                     ))}
                  </Stack>
               )}
            </Stack>
         </Stack>
      </>
   );
};
export default MemberChat;
