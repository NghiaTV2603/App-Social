import { configureStore } from '@reduxjs/toolkit';

import themeReducer from 'src/features/theme/themeSlice';
import {newfeedSlice} from "src/features/newsFeed/newfeedSlice";
import profileSlice from "src/features/profile/profileSlice";
import authenSlice from "src/features/authen/authenSlice";
import messageSlice from "src/features/message/messageSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    post : newfeedSlice.reducer,
    profile: profileSlice.reducer,
    authen : authenSlice.reducer,
    message: messageSlice.reducer,
  },
});
