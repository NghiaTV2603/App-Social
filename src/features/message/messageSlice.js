import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import chatApi from 'src/features/message/messageApi';

const messageSlice = createSlice({
   name: 'message',
   initialState: {
      status: 'idle',
      chats: [],
      currentChat: null,
      messages: [],
   },
   reducers: {
      setChat: (state, action) => {
         state.currentChat = action.payload;
      },
     resetChat : (state, action) => {
       state.currentChat = null;
       state.messages = [] ;
     }
   },
   extraReducers: (builder) => {
      builder.addCase(fetchAccessChat.fulfilled, (state, action) => {
         state.chats.push(action.payload);
      });
      builder.addCase(fetchChat.pending, (state, action) => {
         state.status = 'loading';
      });
      builder.addCase(fetchChat.fulfilled, (state, action) => {
         state.status = 'idle';
         state.chats = action.payload;
      });
      builder.addCase(fetchMessage.pending, (state, action) => {
         state.status = 'loading';
      });
      builder.addCase(fetchMessage.fulfilled, (state, action) => {
         state.status = 'idle';
         state.messages = action.payload;
      });
      builder.addCase(fetchSendMessage.fulfilled, (state, action) => {
         state.messages.unshift(action.payload);
         state.chats = state.chats.map((item) => {
            if (item._id === action.payload.chat._id) {
               return { ...item, latestMessage: action.payload };
            }
            return item;
         });
      });
   },
});

export default messageSlice;

export const fetchAccessChat = createAsyncThunk(
   'chat/accessChat',
   async (params, { rejectWithValue }) => {
      try {
         const res = await chatApi.accessChat(params.token, params.data);
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);

export const fetchChat = createAsyncThunk(
   'chat/fetchChat',
   async (token, { rejectWithValue }) => {
      try {
         const res = await chatApi.listChat(token);
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);

export const fetchMessage = createAsyncThunk(
   'chat/message',
   async (params, { rejectWithValue }) => {
      try {
         const res = await chatApi.listMessage(params.token, params.id);
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);

export const fetchSendMessage = createAsyncThunk(
   'chat/sendMessage',
   async (params, { rejectWithValue }) => {
      try {
         const res = await chatApi.sendMessage(params.token, params.data);
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
