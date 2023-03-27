import {colors, Stack} from "@mui/material";
import Post from "src/features/newsFeed/components/Post";
import React from "react";

const Trending = () => {
  return(
    <Stack>
      <Stack direction='column' height='100vh' justifyContent='center' alignItems='center' bgcolor={colors.grey[900]}>
        <Stack height={70} />
      </Stack>
    </Stack>
  )
}

export default Trending
