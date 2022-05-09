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
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const NavBar = () => {
  const theme = useTheme();
  console.log(theme)
  const [drawer, setDrawer] = useState(false);
  const [padding, setPadding] = useState("10px");
  const [fontSize, setFontSize] = useState("1em");
  const [imageWidth, setImageWidth] = useState("60vw");
  const [imageHeight, setImageHeight] = useState("30vw");

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      if (show) {
        setPadding("0px");
        setFontSize("0.9em");
        setImageWidth("40vh");
        setImageHeight("20vh");
      } else {
        setPadding("10px");
        setFontSize("1em");
        setImageWidth("60vh");
        setImageHeight("30vh");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Button
          href='/'
          sx={{ my: 1, display: 'flex', textTransform: 'none', fontSize: fontSize }}
        >
          Home
        </Button>
        <Box sx={{display: 'flex' , justifyContent: 'center' }} className={styles.dropdown}>
          <Button endIcon={<ArrowDropDownIcon />} className={styles.dropbtn} sx={{ my: 1, display: 'flex', textTransform: 'none', fontSize: fontSize }}>Products</Button>
          <Box className={styles.dropdownContent}>
            <Button href="/products/opticofy" sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize, whiteSpace: 'nowrap' }} >Opticofy <Chip size="small" label="featured" color="secondary" /></Button>
            <Button href="/products/md-gl" sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>MD-GL &copy;</Button>
            <Button href='/products/md-ic' sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>MD-IC &copy;</Button>
            <Button href='/products/md-ai' sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>MD-AI &copy;</Button>
            <Button href='/products/md-cis' sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>MD-CIS &copy;</Button>
          </Box>
        </Box>
        <Box sx={{display: 'flex' , justifyContent: 'center' }} className={styles.dropdown}>
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
        {/* <Accordion sx={{ml: 4}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
     
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
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
              <Typography sx={{ fontSize: fontSize, fontWeight: 'bold', color: '#00478F;', ml: 1 }} className={styles.heading} >
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
              href='/careers'
              sx={{ my: 1, display: 'flex', textTransform: 'none', fontSize: fontSize }}
            >
              Careers
            </Button>


          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              key='Contact us'
              href='/contactus'
              variant="outlined"
              color="secondary"
              className={styles.animatedButton}
            >
              Contact us
            </Button>
          </Box>

          {/* mobile */}
          <Link href='/'>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, cursor: 'pointer' }}>
              <Image src="/mdlogo.png" width={imageWidth} height={imageHeight} />
              <Typography sx={{ fontSize: fontSize, fontWeight: 'bold', color: '#00478F;', ml: 1 }} className={styles.heading} >
                Magical Digits
              </Typography>
            </Box>
          </Link>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer('right', true)}
            sx={{ justifySelf: 'end' }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Drawer
            anchor='right'
            open={drawer}
            onClose={toggleDrawer(false)}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {list('right')}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
