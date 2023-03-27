import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const profileSlice = createSlice({
  name: 'profile',
  initialState: {status: 'idle', data: {}},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(editUsername.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    builder.addCase(editUsername.rejected, (state, action) => {
      state.status = 'error';
    })
  }
})
export default profileSlice

const api = axios.create({
  baseURL:'http://localhost:8000/api/profile'
})

export const editUsername = createAsyncThunk("profile/editUsername", async (id,newData,tokenStr) => {
  const data = await api.patch(`/${id}`, { headers: {"Authorization" : `Bearer ${tokenStr}`}} )
  return data.data ;
})

