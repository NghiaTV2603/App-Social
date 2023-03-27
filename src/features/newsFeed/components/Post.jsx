import React from 'react'
import {
  Stack,
  colors,
  Avatar,
  Typography,
  CardMedia,
  IconButton,
  Box,
  Divider,
  Button,
  Menu,
  MenuItem,
  Dialog,
  Slide,
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SendIcon from '@mui/icons-material/Send';
import DialogEditPost from "src/features/newsFeed/components/DialogEditPost";
import {v4 as uuid} from "uuid";


const userAuth = {
  id: 1,
  username: 'Nghia Tran Van',
  avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/messiworldcupkiss-sixteen_nine.jpg?VersionId=KWx9GiX6ck7S__64GF0Obl4osEdybDZW&size=690:388",
}

const dataComment = [
  {
    id: 1,
    username: 'Nam Viet',
    avatar: 'https://img.redbull.com/images/c_crop,x_485,y_0,h_1365,w_1092/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2018/06/21/d2cf128c-d383-422b-bd6b-c1b6abf62cd3/cs-go-cloud9-autimatic',
    content: 'A paraplegic Marine dispatched to the moon Pandora'
  },
  {
    id: 2,
    username: 'Nam nguyen Viet',
    avatar: 'https://img.redbull.com/images/c_crop,x_485,y_0,h_1365,w_1092/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2018/06/21/d2cf128c-d383-422b-bd6b-c1b6abf62cd3/cs-go-cloud9-autimatic',
    content: 'A paraplegic Marine dispatched to the moon Pandora'
  },
  {
    id: 3,
    username: 'Nam nguyen Viet',
    avatar: 'https://img.redbull.com/images/c_crop,x_485,y_0,h_1365,w_1092/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2018/06/21/d2cf128c-d383-422b-bd6b-c1b6abf62cd3/cs-go-cloud9-autimatic',
    content: 'A paraplegic Marine dispatched to the moon Pandora'
  },
  {
    id: 4,
    username: 'Nam nguyen Viet',
    avatar: 'https://img.redbull.com/images/c_crop,x_485,y_0,h_1365,w_1092/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2018/06/21/d2cf128c-d383-422b-bd6b-c1b6abf62cd3/cs-go-cloud9-autimatic',
    content: 'A paraplegic Marine dispatched to the moon Pandora'
  },
]

const CommentPost = (props) => {
  const comment = props.comment
  // edit comment
  const [anchorCmt, setAnchorCmt] = React.useState(null);
  const openCmt = Boolean(anchorCmt);
  const handleClickCMT = (event) => {
    setAnchorCmt(event.currentTarget);
  };
  const handleCloseCMT = (id) => {
    setAnchorCmt(null)
    props.onUpdateComment(id)
    console.log(dataComment)
  };
  return (
    <Stack direction='row' px={2} py={0.5} color={colors.grey[400]}>
      <Avatar src={comment.avatar} sx={{width: 32, height: 32, marginRight: 1}}/>
      <Stack bgcolor={colors.grey[900]} borderRadius={4} py={1} px={2}>
        <Typography fontSize={15} variant='h6' color={colors.grey[300]}>{comment.username}</Typography>
        <Typography fontSize={13}>{comment.content}</Typography>
      </Stack>
      <Box pt={1} ml={-1}>
        <IconButton aria-label="delete" onClick={handleClickCMT}>
          <MoreVertIcon fontSize='small' sx={{color: colors.grey[400]}}/>
        </IconButton>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorCmt}
        open={openCmt}
        onClose={handleCloseCMT}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: colors.grey[800]
          },
        }}
      >
        <MenuItem onClick={() => {
          handleCloseCMT(comment.id);
          console.log(comment.username)
        }} sx={{color: colors.grey[200]}}>Delete Comment</MenuItem>
      </Menu>
    </Stack>
  )
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Post = (props) => {
  const dataPost = props.dataPost
  const [isLike, setIsLike] = React.useState(false)
  const [openComment, setOpenComment] = React.useState(false)
  const [openEdit, setOpenEdit] = React.useState(false);
  const [contentComment, setContentComment] = React.useState('');
  const [comments, setComments] = React.useState(dataComment)
  // edit post
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //handle like
  const handlelikePost = () => {
    setIsLike(!isLike);
    if (!isLike) {
      dataPost.countLikes += 1;
    } else {
      dataPost.countLikes -= 1;
    }
  }
  const handleCloseEditPost = () => {
    setOpenEdit(false);
  }
  //handle comment
  const handleSetNewComment = (e) => {
    setContentComment(e.target.value);
  }
  const handleAddNewComment = () => {
    const newComment = {
      id: uuid(),
      username: userAuth.username,
      avatar: userAuth.avatar,
      content: contentComment,
    }
    if(newComment.content !== '' ){
    setComments([...comments, newComment])
    }
    setContentComment('')
  }
  const handleUpdateComment = (id) => {
    console.log(id)
    setComments(comments.filter(item => item.id !== id))
  }
  return (
    <Stack sx={{width: 700, backgroundColor: colors.grey[800]}} borderRadius={2} m={1}>
      <Stack className='UserPost' direction='row' justifyContent='space-between' py={2}>
        <Stack direction='row' px={2}>
          <Avatar
            src={dataPost.avatarUser}
            sx={{width: 56, height: 56}}
          />
          <Stack color={colors.grey[50]} ml={1}>
            <Typography variant='h6'>{dataPost.username} </Typography>
            <Typography sx={{color: colors.grey[300]}} fontSize={11}>{dataPost.timePost} .</Typography>
          </Stack>
        </Stack>
        {
          userAuth.id === dataPost.idUser &&
          <Stack height={32}>
            <IconButton aria-label="delete" onClick={handleClick}>
              <MoreVertIcon fontSize='medium' sx={{color: colors.grey[100]}}/>
            </IconButton>
          </Stack>
        }
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: colors.grey[800]
            },
          }}
        >
          <MenuItem onClick={() => {
            handleClose();
            setOpenEdit(true)
          }} sx={{color: colors.grey[200]}}>Edit Post</MenuItem>
          <MenuItem onClick={handleClose} sx={{color: colors.grey[200]}}>Delete Post</MenuItem>
        </Menu>
        <Dialog
          open={openEdit}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setOpenEdit(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogEditPost dataPost={dataPost} oncloseEditPost={handleCloseEditPost}/>
        </Dialog>

      </Stack>
      <Stack className='captionPost' color={colors.grey[300]} px={1.5} pb={1}>
        <Typography fontSize={16}>{dataPost.captionPost}</Typography>
      </Stack>
      <CardMedia
        component="img"
        image={dataPost.contentPost}
        alt="Paella dish"
      />
      <Stack direction='row' justifyContent='space-between' alignItems='center' px={2} py={1}>
        <Stack direction='row'>
          <Box width={24} height={24} borderRadius='100%' mr={1} sx={{backgroundColor: colors.grey[100]}}>
            <RecommendIcon sx={{color: colors.blue[700], height: 24, width: 24}}/>
          </Box>
          <Typography fontSize={14} sx={{
            color: colors.grey[300],
            cursor: 'pointer',
            '&:hover': {textDecoration: 'underline'}
          }}>{dataPost.countLikes}</Typography>
        </Stack>
        <Typography fontSize={14} sx={{
          color: colors.grey[300],
          cursor: 'pointer',
          '&:hover': {textDecoration: 'underline'},
        }}>{dataPost.countComments} Comments</Typography>
      </Stack>
      <Stack px={1.5}>
        <Divider sx={{backgroundColor: colors.grey[600]}}/>
      </Stack>
      <Stack direction='row' justifyContent='space-around' px={1.5} py={0.5}>
        <Button startIcon={isLike ? <ThumbUpIcon/> : <ThumbUpOffAltIcon/>} onClick={handlelikePost}
                sx={{
                  width: '50%',
                  color: isLike ? colors.blue[600] : colors.grey[300],
                  '&:hover': {backgroundColor: colors.grey[900]}
                }}>
          Like
        </Button>
        <Button startIcon={< ChatBubbleOutlineIcon/>} onClick={() => setOpenComment(!openComment)}
                sx={{width: '50%', color: colors.grey[300], '&:hover': {backgroundColor: colors.grey[900]}}}>
          Comment
        </Button>
      </Stack>
      <Stack px={1.5} pb={1}>
        <Divider sx={{backgroundColor: colors.grey[600]}}/>
      </Stack>
      {openComment &&
        comments.map((comment) => (
          <Stack key={comment.id}>
            <CommentPost comment={comment} onUpdateComment={handleUpdateComment}/>
          </Stack>
        ))
      }
      <Stack direction='row' px={2} py={1} alignItems='center'>
        <Avatar src={userAuth.avatar} sx={{width: 32, height: 32, marginRight: 1}}/>
        <input placeholder="Write an answer..." style={{
          height: 34,
          backgroundColor: colors.grey[900],
          border: "none",
          borderRadius: 24,
          color: colors.grey[400],
          outline: 'none',
          paddingLeft: 16,
          width: 550,
        }} onChange={handleSetNewComment} value={contentComment}
        />
        <IconButton onClick={handleAddNewComment}
                    sx={{height: 36, width: 36, marginLeft: 2, '&:hover': {backgroundColor: colors.grey[700]}}}>
          <SendIcon sx={{color: colors.grey[400]}}/>
        </IconButton>
      </Stack>
    </Stack>
  )
}
export default Post


