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
  useTheme, colors,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authenSlice, { login } from 'src/features/authen/authenSlice';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function LoginPage() {
   const stateAuthen = useSelector(state => state.authen);
   console.log(stateAuthen)
   const theme = useTheme();
   const themeMode = theme.palette.mode;
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const params = {
         username: data.get('email'),
         password: data.get('password'),
      };
      dispatch(login(params));
   };
   const isLogin = stateAuthen.isLogin ;

   useEffect(() => {
      if (isLogin) {
         navigate('/');
      }
   }, [isLogin]);

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
               onSubmit={handleSubmit}
               noValidate
               sx={{ mt: 1 }}
            >
               <TextField
                  margin="normal"
                  required
                  fullWidth
                  error ={stateAuthen.status === 'error'}
                  id="email"
                  label="Email address"
                  name="email"
                  autoComplete="email"
                  autoFocus
               />
               <TextField
                  margin="normal"
                  error ={stateAuthen.status === 'error'}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
               />
              <Typography fontSize={20} fontWeight={500} color={colors.red[700]}>{stateAuthen.message}</Typography>
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
               >
                  Login
               </Button>
               <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                     <Link to="/authen/register">
                        {"Don't have an account? Create one now"}
                     </Link>
                  </Grid>
               </Grid>
            </Box>
         </Box>
      </Container>
   );
}
