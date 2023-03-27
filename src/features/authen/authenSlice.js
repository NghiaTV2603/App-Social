import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authenSlice = createSlice({
  name: 'authen',
  initialState: {
    isLogin: false,
    user: null,
    status: null,
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
      state.status = 'loading';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = action.payload;
    });
  },
});

export default authenSlice;

export const login = createAsyncThunk('authen/login', async (user) => {
  const data = await axios.post('/login', { user });
  return data.data;
});

export const logout = createAsyncThunk('authen/logout');
