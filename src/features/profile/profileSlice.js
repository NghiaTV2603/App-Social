import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import profileApi from "src/features/profile/profileApi";

const profileSlice = createSlice({
   name: 'profile',
   initialState: {
      status: 'idle',
      listUser: [],
      currentUser: {},
   },
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchListUser.fulfilled,(state, action)=> {
        state.listUser = action.payload ;
      })
   },
});
export default profileSlice;

export const fetchListUser = createAsyncThunk("profile/listUser" , async (token,{rejectWithValue}) => {
  try{
    const res = await profileApi.listUser(token);
    return res.data
  }catch (e) {
    return rejectWithValue(e.response.data);
  }
})
