import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postApi from 'src/features/newsFeed/newsfeedApi';

export const newfeedSlice = createSlice({
   name: 'post',
   initialState: {
      allPost: [],
      myPost: [],
      currentPost: {},
      status: 'idle',
      message: null,
   },

   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchAllPost.pending, (state, action) => {
         state.status = 'loading';
      });
      builder.addCase(fetchAllPost.fulfilled, (state, action) => {
         state.allPost = action.payload;
         state.status = 'idle';
      });
      builder.addCase(fetchAllPost.rejected, (state, action) => {
         state.status = 'error';
         state.message = action.payload;
      });
      builder.addCase(fetchMyPost.pending, (state, action) => {
         state.status = 'loading';
      });
      builder.addCase(fetchMyPost.fulfilled, (state, action) => {
         state.myPost = action.payload;
         state.status = 'idle';
      });
      builder.addCase(fetchMyPost.rejected, (state, action) => {
         state.status = 'error';
         state.message = action.payload;
      });
      builder.addCase(fetchAddPost.pending, (state, action) => {
         state.status = 'loading';
      });
      builder.addCase(fetchAddPost.fulfilled, (state, action) => {
         state.status = 'idle';
         state.allPost.push(action.payload);
         state.myPost.push(action.payload);
      });
      builder.addCase(fetchLikePost.fulfilled, (state, action) => {});
   },
});

export const fetchAllPost = createAsyncThunk(
   'posts/fetchPost',
   async (token, { rejectWithValue }) => {
      try {
         const res = await postApi.listAllPost(token);
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
export const fetchMyPost = createAsyncThunk(
   'posts/myPost',
   async (token, { rejectWithValue }) => {
      try {
         const res = await postApi.listMyPost(token);
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);

export const fetchAddPost = createAsyncThunk(
   'posts/addPost',
   async (params, { rejectWithValue }) => {
      try {
         const res = await postApi.addPost(params.token, params.data);
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);

export const fetchLikePost = createAsyncThunk(
   'posts/like',
   async (params, { rejectWithValue }) => {
      try {
         const res = await postApi.likePost(params.token, params.id);
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
