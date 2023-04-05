import React, { useEffect, useState } from 'react';
import { colors, Stack } from '@mui/material';
import MemberChat from 'src/features/message/components/MemberChat';
import { Outlet } from 'react-router-dom';
import ContentMessage from "src/features/message/components/ContentMessage";

const Message = () => {
   const [chat, setChat] = useState(null);
   const handleSetChat = (data) => {
      setChat(data);
   };
   return (
      <Stack sx={{ height: 'calc(100vh - 70px)' }} direction={'row'}>
         <MemberChat onSetChat={handleSetChat} />
         {/*<Outlet />*/}
         <ContentMessage />
      </Stack>
   );
};

export default Message;
