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
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import BuildIcon from '@mui/icons-material/Build';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router'



const NavBar = () => {
  const router = useRouter()
  const theme = useTheme();
  console.log(theme);

  const [padding, setPadding] = useState("10px");
  const [fontSize, setFontSize] = useState("1em");
  const [imageWidth, setImageWidth] = useState("60vw");
  const [imageHeight, setImageHeight] = useState("30vw");

  const [drawer, setDrawer] = useState(false);

  const [anchorProducts, setAnchorProducts] = useState(null);
  const [anchorServices, setAnchorServices] = useState(null);
  const [anchorAboutUs, setAnchorAboutUs] = useState(null);

  const openProducts = Boolean(anchorProducts);
  const openServices = Boolean(anchorServices);
  const openAboutUs = Boolean(anchorAboutUs);

  const handleProductsClick = (event) => {
    setAnchorProducts(event.currentTarget);
  };
  const handleProductsClose = () => {
    setAnchorProducts(null);
  };
  const handleServicesClick = (event) => {
    setAnchorServices(event.currentTarget);
  };
  const handleServicesClose = () => {
    setAnchorServices(null);
  };
  const handleAboutUsClick = (event) => {
    setAnchorAboutUs(event.currentTarget);
  };
  const handleAboutUsClose = () => {
    setAnchorAboutUs(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: { xs: '60vw', md: '20vw' } }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Divider />
        <ListItem button onClick={() => router.push('/').then(() => setDrawer(false))}
          sx={{ textTransform: 'none', fontSize: fontSize }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button
          id="basic-button1"
          aria-controls={openProducts ? 'basic-menu1' : undefined}
          aria-haspopup="true"
          aria-expanded={openProducts ? 'true' : undefined}
          onClick={handleProductsClick}
          sx={{ textTransform: 'none', fontSize: fontSize }}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary='Products' />
          <ListItemIcon>
            <ArrowDropDownIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button
          id="basic-button2"
          aria-controls={openServices ? 'basic-menu2' : undefined}
          aria-haspopup="true"
          aria-expanded={openServices ? 'true' : undefined}
          onClick={handleServicesClick}
          sx={{ textTransform: 'none', fontSize: fontSize }}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary='Services' />
          <ListItemIcon>
            <ArrowDropDownIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => router.push('/clients').then(() => setDrawer(false))}
          sx={{ textTransform: 'none', fontSize: fontSize }}>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary='Clients' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button
          id="basic-button3"
          aria-controls={openAboutUs ? 'basic-menu3' : undefined}
          aria-haspopup="true"
          aria-expanded={openAboutUs ? 'true' : undefined}
          onClick={handleAboutUsClick}
          sx={{ textTransform: 'none', fontSize: fontSize, whiteSpace: 'nowrap'  }}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='About Us' />
          <ListItemIcon>
            <ArrowDropDownIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => router.push('/careers').then(() => setDrawer(false))}
          sx={{ textTransform: 'none', fontSize: fontSize }}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary='Careers' />
        </ListItem>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <Button
              key='Contact us'
              href='/contactus'
              variant="outlined"
              color="secondary"
              className={styles.animatedButton}
              endIcon={<PhoneIcon />}
            >
              Contact us
            </Button>
          </Box>
      </List>
    </Box>
  );


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
                <Button href="/products/opticofy" sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize, whiteSpace: 'nowrap' }} >Opticofy&nbsp;<Chip size="small" label="featured" color="secondary" /></Button>
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
          sx={{ display: { xs: 'flex', md: 'none' }}}
          color='primary'
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer('right', true)}
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


{/* Drawer dropdowns begin here */}

        <Menu
          sx={{ ml: 1 }}
          id="basic-menu1"
          anchorEl={anchorProducts}
          open={openProducts}
          onClose={handleProductsClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button1',
          }}
        >
          <Button
            onClick={() => {
              router.push("/products/opticofy")
              .then(() => {
                setDrawer(false);
                handleProductsClose();
              })
            }}
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize, whiteSpace: 'nowrap' }} >
            Opticofy&nbsp;<Chip size="small" label="featured" color="secondary" />
          </Button>
          <Button
            onClick={() => {
              router.push("/products/md-gl")
              .then(() => {
                setDrawer(false);
                handleProductsClose();
              })
            }}
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>
            MD-GL &copy;</Button>
          <Button
            onClick={() => {
              router.push('/products/md-ic')
              .then(() => {
                setDrawer(false);
                handleProductsClose();
              })
            }}
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>
            MD-IC &copy;</Button>
          <Button
            onClick={() => {
              router.push('/products/md-ai')
              .then(() => {
                setDrawer(false);
                handleProductsClose();
              })
            }}
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>
            MD-AI &copy;</Button>
          <Button
            onClick={() => {
              router.push('/products/md-cis')
              .then(() => {
                setDrawer(false);
                handleProductsClose();
              })
            }}
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>
            MD-CIS &copy;</Button>
        </Menu>

        <Menu
         sx={{ ml: 1 }}
          id="basic-menu2"
          anchorEl={anchorServices}
          open={openServices}
          onClose={handleServicesClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button2',
          }}>
          <Button
            onClick={() => {
              router.push("/services/web")
              .then(() => {
                setDrawer(false);
                handleServicesClose();
              })
            }}
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>
            Web Development</Button>
          <Button
            onClick={() => {
              router.push('/services/desktop')
              .then(() => {
                setDrawer(false);
                handleServicesClose();
              })
            }}
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>
            Desktop Development</Button>
          <Button
            onClick={() => {
              router.push('/services/digitaldesign')
              .then(() => {
                setDrawer(false);
                handleServicesClose();
              })
            }}
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}>
            Digital Design</Button>
          <Button
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize, whiteSpace: 'nowrap' }}
            onClick={() => {
              router.push("/services/mobile")
              .then(() => {
                setDrawer(false);
                handleServicesClose();
              })
              }}>
            Mobile Development&nbsp;<Chip size="small" label="new" color="secondary" /></Button>
        </Menu>

        <Menu
         sx={{ ml: 1 }}
          id="basic-menu3"
          anchorEl={anchorAboutUs}
          open={openAboutUs}
          onClose={handleAboutUsClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button3',
          }}
        >
          <Button
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}
            onClick={() => {
              router.push("/about-us/our-story")
              .then(() => {
                setDrawer(false);
                handleAboutUsClose();
              })
              }}>
            About Magical Digits</Button>
          <Button
            sx={{ display: 'flex', textTransform: 'none', fontSize: fontSize }}
            onClick={() => {
              router.push('/about-us/our-team')
              .then(() => {
                setDrawer(false);
                handleAboutUsClose();
              })}}>
            Our Team</Button>
        </Menu>

      </Container>
    </AppBar>
  );
};
export default NavBar;
