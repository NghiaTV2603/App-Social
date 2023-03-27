import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios" ;

export const newfeedSlice = createSlice({
  name: "post",
  initialState:
    [
      {
        id: 1,
        avatarUser: 'https://vcdn1-giaitri.vnecdn.net/2022/12/15/avatar-2-1-jpeg-2238-1671050566.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=Gjwi0rqvUSZXSzXx1YrqaA',
        username: 'Nghia Tran Van',
        idUser: 1,
        captionPost: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home',
        contentPost: 'https://lumiere-a.akamaihd.net/v1/images/csr_yt_ae2ddc55.jpeg?region=0,0,1920,1080',
        timePost: 'Dec 17 2022',
        countLikes: 10102,
        countComments: 101,
      },
      {
        id: 2,
        avatarUser: 'https://img-cdn.hltv.org/playerbodyshot/Q2u6AgnDNYQ3dyObwN4JBX.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C4%2C459%2C459&w=800&s=81da5699a06ed35ba865f7b628f99458',
        username: 'S1mple NaVi',
        idUser: 2,
        captionPost: 'Winnnnn winnnnn winnnnn ...',
        contentPost: 'https://cdn.oneesports.vn/cdn-data/wp-content/uploads/sites/4/2020/03/csgo-iem-katowice-1m-nguoi-xem-1.jpg',
        timePost: 'Dec 17 2022',
        countLikes: 231321,
        countComments: 1010,
      },
      {
        id: 3,
        avatarUser: 'https://i.ytimg.com/vi/5pw7DlZSyIA/maxresdefault.jpg',
        username: 'Jame Rodigo',
        idUser: 3,
        captionPost: 'sample as amai nea',
        contentPost: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmt8rvf3jtsOG5g7Jxz4jpWdVjzQ1gDQgoA&usqp=CAU',
        timePost: 'Dec 17 2022',
        countLikes: 12,
        countComments: 123,
      },
    ],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPostNewFeed.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPostNewFeed.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.staus = 'able';
    });
    builder.addCase(fetchMyPost.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMyPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.staus = 'able';
    });

  }
})

const api = axios.create({
  baseURL: 'http://localhost:8000/post'
})

export const fetchPostNewFeed = createAsyncThunk("posts/fetchPost", async () => {
  const data = await api.get('/');
  return data.data;
})

export const fetchMyPost = createAsyncThunk("posts/fetchMyPost", async (user_id) => {
  const data = await api.get(`/${user_id}`);
  return data.data;
})

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const data = await api.delete(`/${id}`);
  return data.data;
})



export const updatePost = createAsyncThunk("posts/updatePost", async (id, val) => {
  const data = await api.patch(`/${id}`, {val});
  return data.data;
})

export const deleteComment = createAsyncThunk("posts/deleteComment", async (id, post_id) => {
  const data = await api.delete(`/${post_id}/comment/${id}`)
  return data.data;
})




