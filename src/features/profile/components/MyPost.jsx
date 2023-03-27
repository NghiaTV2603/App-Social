import React from 'react'
import {colors, Stack, Paper, Avatar, Typography, Dialog, Slide} from "@mui/material";
import Post from "src/features/newsFeed/components/Post";
import AddPost from "src/features/profile/components/AddPost";

const userAuth = {
  avatar: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/messiworldcupkiss-sixteen_nine.jpg?VersionId=KWx9GiX6ck7S__64GF0Obl4osEdybDZW&size=690:388',
  username: 'Nghia Tran Van',
  email: 'nghiatv2603@gmail.com',
  numberPost: 3,
  totalLike: 12123,
}

const dataPost =
  [
    {
      id: 1,
      avatarUser: 'https://vcdn1-giaitri.vnecdn.net/2022/12/15/avatar-2-1-jpeg-2238-1671050566.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=Gjwi0rqvUSZXSzXx1YrqaA',
      username: 'Nghia Tran Van',
      idUser:1,
      captionPost: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home',
      contentPost: 'https://lumiere-a.akamaihd.net/v1/images/csr_yt_ae2ddc55.jpeg?region=0,0,1920,1080',
      timePost: 'Dec 17 2022',
      countLikes: 10101,
      countComments: 101,
    },
    {
      id: 2,
      avatarUser: 'https://img-cdn.hltv.org/playerbodyshot/Q2u6AgnDNYQ3dyObwN4JBX.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C4%2C459%2C459&w=800&s=81da5699a06ed35ba865f7b628f99458',
      username: 'S1mple NaVi',
      idUser:1,
      captionPost: 'Winnnnn winnnnn winnnnn ...',
      contentPost: 'https://cdn.oneesports.vn/cdn-data/wp-content/uploads/sites/4/2020/03/csgo-iem-katowice-1m-nguoi-xem-1.jpg',
      timePost: 'Dec 17 2022',
      countLikes: 231321,
      countComments: 1010,
    },
    {
      id: 3,
      avatarUser: 'https://i.ytimg.com/vi/5pw7DlZSyIA/maxresdefault.jpg',
      username: 'jame rodigo',
      idUser:1,
      captionPost: 'sample as amai nea',
      contentPost: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmt8rvf3jtsOG5g7Jxz4jpWdVjzQ1gDQgoA&usqp=CAU',
      timePost: 'Dec 17 2022',
      countLikes: 12,
      countComments: 123,
    },
  ]

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
  return (
    <>
      <Paper style={{maxHeight: '91vh', overflow: 'auto', backgroundColor: colors.grey[900]}}>
        <Stack p={2} m={1} direction='row' borderRadius={2} bgcolor={colors.grey[800]}>
          <Avatar src={userAuth.avatar}/>
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
          >
            <AddPost  user={userAuth} onClose={handleCloseAddPost} />
          </Dialog>
        </Stack>
        {
          dataPost.map(post =>
            <Stack key={post.id}>
              <Post dataPost={post}/>
            </Stack>
          )
        }
      </Paper>
    </>
  )
}
export default MyPost
