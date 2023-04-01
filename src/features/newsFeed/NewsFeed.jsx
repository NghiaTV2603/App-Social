import React, { useEffect } from 'react';
import { Stack, colors } from '@mui/material';
import Post from 'src/features/newsFeed/components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { dataPostNewFeed } from 'src/app/selector';
import MyPost from 'src/features/profile/components/MyPost';
import { fetchAllPost } from 'src/features/newsFeed/newfeedSlice';
import PostLoading from 'src/features/newsFeed/components/PostLoading';

const NewsFeed = () => {
   const dataNewFeed = useSelector((state) => state.post.allPost);
   const token = useSelector((state) => state.authen.token);
   const status = useSelector((state) => state.post.status);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchAllPost(token));
   }, []);

   return (
      <>
         <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            bgcolor={colors.grey[900]}
         >
            {status === 'loading' && dataNewFeed.length === 0 && (
               <Stack>
                  <PostLoading />
                  <PostLoading />
               </Stack>
            )}

            {/*<MyPost/>*/}
            {dataNewFeed.map((post) => (
               <Stack key={post._id}>
                  <Post dataPost={post} />
               </Stack>
            ))}
         </Stack>
      </>
   );
};

export default NewsFeed;
