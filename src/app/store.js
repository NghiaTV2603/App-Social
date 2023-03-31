import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import themeReducer from 'src/features/theme/themeSlice';
import { newfeedSlice } from 'src/features/newsFeed/newfeedSlice';
import profileSlice from 'src/features/profile/profileSlice';
import authenSlice from 'src/features/authen/authenSlice';
import messageSlice from 'src/features/message/messageSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
   key: 'root',
   version: 1,
   storage,
   whitelist: ['authen']
};
const rootReducer = combineReducers({
   authen: authenSlice.reducer,
   theme: themeReducer,
   post: newfeedSlice.reducer,
   profile: profileSlice.reducer,
   message: messageSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export let persistor = persistStore(store);
