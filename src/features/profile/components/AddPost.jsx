import React, { useState } from 'react';
import {
   Avatar,
   Box,
   Button,
   colors,
   Divider,
   Input,
   Stack,
   TextField,
   Typography,
} from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import {useDispatch, useSelector} from "react-redux";
import {fetchAddPost} from "src/features/newsFeed/newfeedSlice";

const AddPost = (props) => {
   const [pic,setPic] = useState(null)
  const [description,setDescription] = useState('')
   const user = props.user;
   const [isSubmit,setIsSubmit] = useState(true)
   const handleClosePopup = () => {
      setTimeout(() => {
         props.onClose();
      }, 0);
   };

   const handleImage = (pics) => {
     console.log(pics)
     const data = new FormData();
     data.append("file", pics);
     data.append("upload_preset", "social-app");
     data.append("cloud_name", "dqtgsiltq");
     fetch("https://api.cloudinary.com/v1_1/dqtgsiltq/image/upload", {
       method: "post",
       body: data,
     })
       .then((res) => res.json())
       .then((data) => {
         setPic(data.url.toString());
         setIsSubmit(false);
       })
       .catch((err) => {
         console.log(err);
       });
   }
const dispatch = useDispatch() ;
   const token = useSelector(state => state.authen.token) ;
  const handleSubmit = () => {
    const data = {
      description: description,
      image : pic
    }
    const params = {token,data}
    dispatch(fetchAddPost(params)) ;
  };
   return (
      <>
         <Stack
            sx={{
               bgcolor: colors.grey[800],
               width: 700,
               color: colors.grey[200],
            }}
         >
            <DialogTitle fontSize={24} align="center">
               Create Post
            </DialogTitle>
            <Divider sx={{ backgroundColor: colors.grey[600] }} />
            <DialogContent>
               <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar src={user.avatar} />
                  <Typography variant="h6">{user.username}</Typography>
               </Stack>
               <Input
                  fullWidth
                  multiline
                  sx={{ marginY: 1, color: colors.grey[300] }}
                  placeholder="What's on your mind ?"
                  autoFocus
                  name="caption"
                  value={description}
                  onChange = { e => setDescription(e.target.value)}
               />
               <Stack
                  mt={1}
                  px={2}
                  direction="row"
                  alignItems="center"
                  bgcolor={colors.grey[900]}
                  borderRadius={4}
                  height={40}
                  justifyContent="space-between"
                  sx={{
                     '&:hover': { backgroundColor: colors.grey[700] },
                     cursor: 'pointer',
                  }}
               >
                  <Stack direction={'row'} spacing={2}>
                     <Typography color={colors.grey[400]}>
                        Add Photo/Video
                     </Typography>
                     <BurstModeIcon sx={{ color: colors.grey[400] }} />
                  </Stack>
                  <input
                     type={'file'}
                     accept={"image/*"}
                     onChange={(e)=> handleImage(e.target.files[0])}
                  />
               </Stack>
               <Box >
                  <Box pt={3} align="right">
                     <Button
                        sx={{ marginRight: 2, color: 'white' }}
                        onClick={handleClosePopup}
                     >
                        Cancel
                     </Button>
                     <Button
                        onClick={ () => {
                          handleClosePopup() ;
                          handleSubmit() ;
                        }}
                        variant="contained"
                        disabled={isSubmit}
                     >
                        Post
                     </Button>
                  </Box>
               </Box>
            </DialogContent>
         </Stack>
      </>
   );
};
export default AddPost;
