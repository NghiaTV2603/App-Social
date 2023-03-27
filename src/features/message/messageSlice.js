import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios" ;
const messageSlice = createSlice({
  name:'message',
  initialState: {
    status : 'idle',
    messages: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMessage.pending,(state)=>{
      state.status = 'loading'
    })
    builder.addCase(fetchMessage.fulfilled,(state,action)=>{
      state.status = 'idle';
      state.messages = action.payload;
    })
  }
})

export default messageSlice

export const fetchMessage = createAsyncThunk("message/fetchMessage", async (token)=> {
  const data = await axios.get("/message",  {
    headers: {
      'Authorization': `Basic ${token}`
    }
  })
  return data.data ;
})
