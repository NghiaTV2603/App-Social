import React from 'react'
import {colors, Stack} from "@mui/material";
import SettingUser from "src/features/profile/components/SettingUser";
import MyPost from "src/features/profile/components/MyPost";
import Background from "src/features/profile/components/Background";

const Profile = () => {
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
