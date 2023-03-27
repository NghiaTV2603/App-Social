import React from 'react';
import { Box, Button, colors, Typography, Stack, Input } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const styleInput = {
  paddingLeft: '8px',
  width: '100%',
  height: '32px',
  color: 'white',
  fontSize: '16px',
  bgcolor: colors.grey[900],
};

export const DialogEditUsername = (props) => {
  const user = props.user;
  const closeDialog = () => {
    setTimeout(() => {
      props.handleCloseModal();
    }, 0);
  };
  const [username, setUsername] = React.useState(user.username);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };
  return (
    <Stack
      sx={{ bgcolor: colors.grey[800], width: 500, color: colors.grey[200] }}
    >
      <DialogTitle align="center">
        Change your Username
        <Typography align="center" sx={{ color: colors.grey[400] }}>
          Enter a new username and your existing password.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Typography marginTop={1}>Username</Typography>
          <Box>
            <Input
              name="username"
              sx={styleInput}
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Typography marginTop={1}>Password</Typography>
          <Box>
            <Input
              name="password"
              id="password"
              type="password"
              sx={styleInput}
            />
          </Box>
          <Box pt={3} align="right">
            <Button
              onClick={closeDialog}
              sx={{ marginRight: 2, color: 'white' }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" onClick={closeDialog}>
              Done
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Stack>
  );
}

export const DialogChangePassword = (props) => {
  const closeDialog = () => {
    setTimeout(() => {
      props.onCloseModal();
    }, 0);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      oldPassword: data.get('oldPassword'),
      newPassword: data.get('newPassword'),
      confirmPassword:data.get('confirmPassword'),
    });
  };
  return (
    <Stack
      sx={{ bgcolor: colors.grey[800], width: 500, color: colors.grey[200] }}
    >
      <DialogTitle align="center">
        Change your Username
        <Typography align="center" sx={{ color: colors.grey[400] }}>
          Enter a new username and your existing password.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Typography marginTop={1}>Old Password</Typography>
          <Box>
            <Input
              name="oldPassword"
              sx={styleInput}
              id="oldPassword"
              type="password"
            />
          </Box>
          <Typography marginTop={1}>New Password</Typography>
          <Box>
            <Input
              name="newPassword"
              id="newPassword"
              type="password"
              sx={styleInput}
            />
          </Box>
          <Typography marginTop={1}>New Password</Typography>
          <Box>
            <Input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              sx={styleInput}
            />
          </Box>
          <Box pt={3} align="right">
            <Button
              onClick={closeDialog}
              sx={{ marginRight: 2, color: 'white' }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" onClick={closeDialog}>
              Done
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Stack>
  );
}
