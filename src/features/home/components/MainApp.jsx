import NewsFeed from "src/features/newsFeed/NewsFeed";
import Trending from "src/features/trending/Trending";
import Profile from "src/features/profile/Profile";
import React from "react";
import {colors, Stack} from "@mui/material";


const MainApp = (props) => {
  return(
    <Stack width='100%'>
      {(() => {
        switch(props.indexPage) {
          case 0:
            return <NewsFeed/>
          case 1 :
            return <Trending/>
          case 2:
            return <Profile/>
        }
      })()}
    </Stack>
  )
}
export default MainApp
