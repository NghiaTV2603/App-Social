import React, {useEffect} from 'react'
import {colors, Stack} from "@mui/material";
import SettingUser from "src/features/profile/components/SettingUser";
import MyPost from "src/features/profile/components/MyPost";
import Background from "src/features/profile/components/Background";
import {useDispatch, useSelector} from "react-redux";
import {fetchMyPost} from "src/features/newsFeed/newfeedSlice";

const Profile = () => {
  const token  = useSelector(state => state.authen.token)
  const dispatch = useDispatch() ;
  useEffect(()=> {
    dispatch(fetchMyPost(token))
  },[])
  return (
    <>
      <Stack direction='row' justifyContent='center' bgcolor={colors.grey[800]}>
        <Background/>
      </Stack>
      <Stack direction='row' justifyContent='center' bgcolor={colors.grey[900]}>
        <SettingUser/>
        <MyPost/>
      </Stack>
    </>
  )
}
export default Profile
