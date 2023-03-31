import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import authenApi from 'src/features/authen/authenApi';

const authenSlice = createSlice({
   name: 'authen',
   initialState: {
      isLogin: false,
      user: null,
      status: 'idle',
      message: null,
      token: null,
   },
   reducers: {
      logout: (state) => {
         state.isLogin = false;
         state.user = null;
         state.status = null;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(login.pending, (state, action) => {
         state.status = 'ld';
         state.isLogin = false;
      });
      builder.addCase(login.fulfilled, (state, action) => {
         state.isLogin = true;
         state.user = action.payload.data;
         state.token = action.payload.token;
         state.status = 'idle';
      });
      builder.addCase(login.rejected, (state, action) => {
         state.isLogin = false;
         state.status = 'error';
         state.message = action.payload;
      });
      builder.addCase(register.pending, (state, action) => {
         state.status = 'ld';
         state.isLogin = false;
      });
      builder.addCase(register.fulfilled, (state, action) => {
        state.isLogin = true;
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.status = 'idle';
      });
      builder.addCase(register.rejected, (state, action) => {
         state.status = 'idle';
         state.message = action.payload;
      });
   },
});

export default authenSlice;

export const login = createAsyncThunk(
   'authen/login',
   async (params, { rejectWithValue }) => {
      try {
         const res = await authenApi.login(params);
         console.log(res);
         return res.data;
      } catch (e) {
         console.log('[login]' + e.response.data);
         return rejectWithValue(e.response.data);
      }
   }
);

export const register = createAsyncThunk(
   'authen/register',
   async (params, { rejectWithValue }) => {
      try {
         const res = await authenApi.register(params);
         console.log(res);
         return res.data;
      } catch (e) {
         console.log('[register]' + e.response.data);
         return rejectWithValue(e.response.data);
      }
   }
);
