import React from 'react'
import {colors, Stack} from "@mui/material";
import MemberChat from "src/features/message/components/MemberChat";
import ContentMessage from "src/features/message/components/ContentMessage";

const Message = () => {
  return(
    <Stack sx={{height: 'calc(100vh - 70px)'}} direction={'row'}>
      <MemberChat/>
      <ContentMessage/>
    </Stack>
  )
}

export default Message;

