import { useState, useEffect } from 'react';
import { useTheme } from '@mui/styles';
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
import styles from '../styles/Navbar.module.scss'
import WorkIcon from '@mui/icons-material/Work';


const NavBar = () => {
  const pages = ['Home', 'Products', 'Services', 'Partners', 'About us', 'Contact Us', 'Careers'];
  const theme = useTheme();
  console.log(theme)
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [background, setBackground] = useState("#f3f3f3bf");
  // const [linkColor, setLinkColor] = useState("black");
  const [padding, setPadding] = useState("10px");

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 90;
      if (show) {
        // setBackground("#f3f3f3bf");
        // setLinkColor("white");
        setPadding("0px")
      } else {
        // setBackground("transparent");
        // setLinkColor("black");
        setPadding("10px")
      }
    };

    document.addEventListener("scroll", handleScroll);
    // return () => {
    //   document.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{
      padding: padding,
      transition: '0.4s',
      backgroundColor: '#f3f3f3bf'
    }}>
      <Container maxWidth="xl">
        <Toolbar className={styles.navbar} disableGutters>
          {/* desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img src="/mdlogo.png" width='50vh' />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
              startIcon={<WorkIcon />}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'flex', textTransform: 'none' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            sx={{ justifyContent: "center", display: { xs: 'flex', md: 'none' } }}
          >
            <img src="/mdlogo.png" width='50vh' />
          </Typography>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
