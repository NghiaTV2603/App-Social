import React from 'react'
import {colors, Stack, Paper, Avatar, Typography, Dialog, Slide} from "@mui/material";
import Post from "src/features/newsFeed/components/Post";
import AddPost from "src/features/profile/components/AddPost";
import {useSelector} from "react-redux";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyPost = () => {
  const [openAddPost,setOpenAddPost] = React.useState(false)

  const handleClickAddPost = () => {
    setOpenAddPost(true)
  }
  const handleCloseAddPost = () => {
    setOpenAddPost(false)
  }
  const dataPost = useSelector(state => state.post?.myPost) ;
const userAuth = useSelector(state => state.authen?.user)
  return (
    <>
      <Paper style={{maxHeight: '91vh', overflow: 'auto', backgroundColor: colors.grey[900]}}>
        <Stack p={2} m={1} direction='row' borderRadius={2} bgcolor={colors.grey[800]}>
          <Avatar src={userAuth?.avatar}/>
          <Stack bgcolor={colors.grey[900]} width='100%' ml={1} borderRadius={6} alignItems='center' direction='row'
          sx={{ cursor:'pointer' , '&:hover':{backgroundColor:colors.grey[700]}}}
          onClick={handleClickAddPost}
          >
            <Typography color={colors.grey[500]} fontSize={18} pl={2}>What's on your mind ?</Typography>
          </Stack>
          <Dialog
            open={openAddPost}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseAddPost}
            aria-describedby="alert-dialog-slide-description"
            maxWidth={'false'}
          >
            <AddPost  user={userAuth} onClose={handleCloseAddPost} />
          </Dialog>
        </Stack>
        {
          dataPost.map(post =>
            <Stack key={post._id}>
              <Post dataPost={post}/>
            </Stack>
          )
        }
      </Paper>
    </>
  )
}
export default MyPost
