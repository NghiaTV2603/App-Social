import React from 'react'
import {Stack, colors} from "@mui/material";
import Post from "src/features/newsFeed/components/Post";
import {useSelector} from "react-redux";
import {dataPostNewFeed} from "src/app/selector";


const NewsFeed = () => {
  const dataNewFeed = useSelector(dataPostNewFeed);
  return (
    <>
      <Stack direction='column' justifyContent='center' alignItems='center' bgcolor={colors.grey[900]} >
        <Stack height={70} />
        {
          dataNewFeed.map(post=>
          <Stack key={post.id}>
            <Post dataPost = {post}/>
          </Stack>
          )
        }
      </Stack>
    </>
  )
}

export default NewsFeed
