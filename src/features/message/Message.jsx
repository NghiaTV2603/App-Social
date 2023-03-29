import React, {useState} from 'react'
import {colors, Stack} from "@mui/material";
import MemberChat from "src/features/message/components/MemberChat";
import ContentMessage from "src/features/message/components/ContentMessage";
import {Outlet} from "react-router-dom";

const Message = () => {
  const [chat,setChat] = useState(null);
  const handleSetChat = (data) => {
    setChat(data);
  }
  return(
    <Stack sx={{height: 'calc(100vh - 70px)'}} direction={'row'}>
      <MemberChat onSetChat = {handleSetChat}/>
      <Outlet/>
      {/*<ContentMessage chat={chat} />*/}
    </Stack>
  )
}

export default Message;

