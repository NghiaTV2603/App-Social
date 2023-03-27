import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { colors} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import RightAppBar from "src/features/home/components/RightAppBar";

function SideBarApp(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [indexPage, setIndexPage] = React.useState(0)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{backgroundColor: colors.grey[800]}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <OndemandVideoIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            VideoApp
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
                "& .MuiPaper-root": {
                  backgroundColor: colors.grey[700]
                },
              }}
            >
              <MenuItem onClick={() => {
                handleCloseNavMenu();
                props.handleSetIndex(0);
                setIndexPage(0);
              }}>
                <Typography color={colors.grey[300]} textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                handleCloseNavMenu();
                props.handleSetIndex(1);
                setIndexPage(1);
              }}>
                <Typography color={colors.grey[300]} textAlign="center">Trending</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                handleCloseNavMenu();
                props.handleSetIndex(2);
                setIndexPage(2);
              }}>
                <Typography color={colors.grey[300]} textAlign="center">Profile</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <OndemandVideoIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            VideoApp
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Button
              onClick={() => {
                setIndexPage(0);
                props.handleSetIndex(0)
              }}
              sx={{
                my: 2,
                color: indexPage === 0 ? colors.blue[300] : colors.grey[50],
                marginRight: 1,
                '&:hover': {backgroundColor: colors.grey[700]}
              }}
              startIcon={<HomeIcon/>}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                setIndexPage(1);
                props.handleSetIndex(1)
              }}
              sx={{
                my: 2,
                color: indexPage === 1 ? colors.blue[300] : colors.grey[50],
                marginRight: 1,
                '&:hover': {backgroundColor: colors.grey[700]}
              }}
              startIcon={<WhatshotIcon/>}
            >
              Trending
            </Button>
            <Button
              onClick={() => {
                setIndexPage(2);
                props.handleSetIndex(2)
              }}
              sx={{
                my: 2,
                color: indexPage === 2 ? colors.blue[300] : colors.grey[50],
                '&:hover': {backgroundColor: colors.grey[700]}
              }}
              startIcon={<AssignmentIndIcon/>}
            >
              Profile
            </Button>
          </Box>
          <RightAppBar onOpenChat={props.onOpenChat}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default SideBarApp;

