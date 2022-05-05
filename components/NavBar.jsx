import { useState, useEffect } from 'react';
import { useTheme } from '@mui/styles';
import Image from 'next/image';
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from '../styles/Navbar.module.scss'
import { Chip } from '@mui/material';
import Link from 'next/link';


const NavBar = () => {
  const pages = ['Home', 'Products', 'Clients', 'About us', 'Careers'];
  const theme = useTheme();
  console.log(theme)
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [padding, setPadding] = useState("10px");
  const [fontSize, setFontSize] = useState("1em");
  const [imageWidth, setImageWidth] = useState("100vw");
  const [imageHeight, setImageHeight] = useState("50vw");

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      if (show) {
        setPadding("0px");
        setFontSize("0.9em");
        setImageWidth("50vh");
        setImageHeight("30vh");
      } else {
        setPadding("10px");
        setFontSize("1em");
        setImageWidth("80vh");
        setImageHeight("50vh");
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
      transition: '0.8s',
      backgroundColor: '#f3f3f3bf'
    }}>
      <Container maxWidth="xl">
        <Toolbar className={styles.navbar} disableGutters>
          {/* desktop */}

          <Link href='/'>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }}>
              <Image src="/mdlogo.png" width={imageWidth} height={imageHeight} />
              <Typography sx={{ fontSize: fontSize, fontWeight: 'bold', color: '#00478F;' }} className={styles.heading} >
                Magical Digits
              </Typography>
            </Box>
          </Link>

          <Box className={styles.nav} sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'end' }}>

            <Button
              href='/'
              sx={{ my: 1, display: 'flex', textTransform: 'none', fontSize: fontSize }}
            >
              Home
            </Button>
            <Box className={styles.dropdown}>
              <Button endIcon={<ArrowDropDownIcon />} className={styles.dropbtn} sx={{ my: 1, display: 'flex', textTransform: 'none', fontSize: fontSize }}>Products</Button>
              <Box className={styles.dropdownContent}>
              <Button href="/products/opticofy" sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize, whiteSpace: 'nowrap' }} >Opticofy <Chip size="small" label="featured" color="secondary" /></Button>
                <Button href="/products/md-gl" sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>MD-GL &copy;</Button>
                <Button href='/products/md-ic' sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>MD-IC &copy;</Button>
                <Button href='/products/md-ai' sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>MD-AI &copy;</Button>
                <Button href='/products/md-cis' sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>MD-CIS &copy;</Button>
              </Box>
            </Box>
            <Box className={styles.dropdown}>
              <Button endIcon={<ArrowDropDownIcon />} className={styles.dropbtn} sx={{ my: 1, display: 'flex', textTransform: 'none', fontSize: fontSize }}>Services</Button>
              <Box className={styles.dropdownContent}>
                <Button href="/services/web" sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>Web Development</Button>
                <Button href='/services/desktop' sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>Desktop Development</Button>
                <Button href='/services/digitaldesign' sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>Digital Design</Button>
                <Button sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize, whiteSpace: 'nowrap' }} href="/services/mobile" >Mobile Development <Chip size="small" label="new" color="secondary" /></Button>
              </Box>
            </Box>
            <Button
              href='/clients'
              sx={{ my: 1, display: 'flex', textTransform: 'none', fontSize: fontSize }}
            >
              Clients
            </Button>

            <Box className={styles.dropdown}>
              <Button endIcon={<ArrowDropDownIcon />} className={styles.dropbtn} sx={{ my: 1, display: 'flex', textTransform: 'none', fontSize: fontSize }}>About Us</Button>
              <Box className={styles.dropdownContent}>
                <Link href="/about-us/our-story">About Magical Digits</Link>
                <Link href='/about-us/our-team'>Our Team</Link>
              </Box>
            </Box>
            <Button
              href='/clients'
              sx={{ my: 1, display: 'flex', textTransform: 'none', fontSize: fontSize }}
            >
              Careers
            </Button>


          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              key='Contact us'
              href='contactus'
              variant="outlined"
              color="secondary"
              className={styles.animatedButton}
            >
              Contact us
            </Button>
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
