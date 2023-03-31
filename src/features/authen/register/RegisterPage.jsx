import * as React from 'react';
import {
   Avatar,
   Button,
   TextField,
   FormControlLabel,
   Checkbox,
   Grid,
   Box,
   Typography,
   Container,
   useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'src/features/authen/authenSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function RegisterPage() {
   const theme = useTheme();
   const themeMode = theme.palette.mode;
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const message = useSelector((state) => state.authen.message);
   const isLogin = useSelector((state) => state.authen.isLogin);
   useEffect(() => {
      if (isLogin) {
         navigate('/');
      }
   }, [isLogin]);
   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const user = {
         username: data.get('email'),
         password: data.get('password'),
      };
      dispatch(register(user));
   };

   return (
      <Container component="main" maxWidth="xs">
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <Avatar
               sx={{
                  m: 1,
                  bgcolor:
                     themeMode === 'light' ? 'primary.light' : 'primary.dark',
               }}
            >
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Welcome
            </Typography>
            <Box
               component="form"
               noValidate
               onSubmit={handleSubmit}
               sx={{ mt: 3 }}
            >
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                     />
                  </Grid>
               </Grid>
               <Typography fontSize={18} fontWeight={500} color={'red'}>
                  {message}
               </Typography>
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
               >
                  Register
               </Button>
               <Grid container justifyContent="flex-end">
                  <Grid item>
                     <Link to="/authen/login">
                        Already have an account? Login
                     </Link>
                  </Grid>
               </Grid>
            </Box>
         </Box>
      </Container>
   );
}
