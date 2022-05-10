import { Button, Container, Stack, Tooltip, Divider, Box, Grid, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import Head from 'next/head';
import styles from '../../styles/Opticofy.module.scss';
import Image from 'next/image';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import TimelineIcon from '@mui/icons-material/Timeline';
import ShieldIcon from '@mui/icons-material/Shield';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import { Slide } from "react-awesome-reveal";

const Opticofy = () => {
    return (
        <>
            <Grid container spacing={1} sx={{ background: '#d4fce5', display: 'flex'}}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', order: {xs: '2', md: '1'} }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <Image src='/opticofy/opticofynav.png' width='70%' height='65%' />
                        <h5 className={styles.heading}>Opticofy.</h5>
                    </Box>
                    <h6 className={styles.description}>
                        Opticofy provides various features to incorporate all your business needs in one single software. Now you don't need to maintain or purchase different softwares for your optical retail store; our software can do everything for you at one place. It is hassle free and cost effective.
                        <br /> <em>that's why, Opticofy.</em>
                    </h6>
                    <Button className={styles.animatedButton} href="https://opticofy.com" target="_blank" variant="outlined" color="secondary" sx={{ textTransform: 'none', justifySelf: 'center', margin: '0.5vw' }}>Get Started For Free</Button>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', order: {xs: '1', md: '2'} }}>
                    <img className={styles.image} src='/opticofy/main.png' width='100%' />
                </Grid>
            </Grid>

            <Container id="getintouch" maxWidth='lg'>
                <Head>
                    <title>Product | Opticofy</title>
                    <meta name="description" content="Opticofy, optical shop software" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet" />
                </Head>

                <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Slide direction='up' triggerOnce fraction='0.5'>
                            <img src='/opticofy/desktop.png' width='100%' />
                        </Slide>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <h6 className={styles.description}>
                            Features
                        </h6>
                        <List className={styles.features}>
                            <ListItem>
                                <ListItemIcon>
                                    <AccessibilityNewIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Easy to use.' />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon>
                                    <ElectricBoltIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Fast.' />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon>
                                    <ShieldIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Secure.' />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon>
                                    <SupportAgentIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Dedicated customer support.' />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon>
                                    <MobileFriendlyIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Mobile friendly responsive design.' />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon>
                                    <AddBusinessIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Handle multiple branches with single account.' />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon>
                                    <InventoryIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Built in inventory support.' />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon>
                                    <TimelineIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Analyze business performance using graphs and reports.' />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

                <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={7}>
                        <h6 className={styles.description}>
                            Introduction Video
                        </h6>
                        <iframe src="https://www.youtube.com/embed/SI8eyiTLymE?rel=0" width='100%' height='350vw' allowFullScreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Slide triggerOnce direction='up' fraction='0.5'>
                            <img width='100%' src='/opticofy/mobile.png' />
                        </Slide>
                    </Grid>
                </Grid>
                <Box>
                    <h6 className={styles.description}>Connect with Opticofy</h6>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <a href='https://opticofy.com' target="_blank">
                            <LanguageIcon color='secondary' fontSize='large' />
                        </a>
                        <a href='https://api.whatsapp.com/send?phone=923012216771' target="_blank">
                            <WhatsAppIcon sx={{ color: '#4FCE5D' }} fontSize='large' />
                        </a>
                        <a href='mailto:opticofy@magicaldigits.com' target="_blank">
                            <MailIcon sx={{ color: '#4285F4' }} fontSize='large' />
                        </a>
                        <a href='https://www.facebook.com/opticofyasia' target="_blank">
                            <FacebookIcon sx={{ color: '#3b5998' }} fontSize='large' />
                        </a>
                        <a href='https://www.instagram.com/opticofy/' target="_blank">
                            <InstagramIcon sx={{ color: '#3f729b' }} fontSize='large' />
                        </a>
                        <a href='https://www.youtube.com/channel/UChtFdPVEcBDvM3STEA6HV1A' target="_blank">
                            <YouTubeIcon sx={{ color: '#FF0000' }} fontSize='large' />
                        </a>
                        <a href='https://www.linkedin.com/products/magicaldigits-opticofy/' target="_blank">
                            <LinkedInIcon sx={{ color: '#0072b1' }} fontSize='large' />
                        </a>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Opticofy;
