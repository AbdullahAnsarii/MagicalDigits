import { Button, Container, Stack, Tooltip, Divider, Box, Grid } from '@mui/material';
import Head from 'next/head'
import styles from '../../styles/WebServices.module.scss'
import Image from 'next/image'
import ContactUs from '../../components/ContactUs';

const DesktopServices = () => {
  return (
    <>
      <Grid container spacing={1} sx={{ display: 'flex' }}>
        <Grid item xs={12} md={6}>
          <img className={styles.image} src='/services/desktop.png' />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <h5 className={styles.heading}>Desktop Development</h5>
            <h6 className={styles.description}>
             We've been in the desktop development business for 20 years now, consequently it is our area of expertise.
            </h6>
            <Button href="#getintouch" className={styles.animatedButton} variant="outlined" color="secondary" sx={{ textTransform: 'none', justifySelf: 'center' }}>Get In Touch</Button>
          </Box>
        </Grid>

      </Grid>

      <Container id="getintouch" maxWidth='lg' sx={{mb:2}}>
        <Head>
          <title>Services | Desktop Development</title>
          <meta name="description" content="Desktop devlopment services by Magical Digits" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet" />
        </Head>

        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <h2 style={{ color: 'blue' }}>
              We have expertise in the following:
            </h2>
            <h3>Programming Languages.</h3>
            <Stack
              sx={{ alignItems: 'center', justifyContent: {sx: 'center', md: 'left'} }}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Tooltip title='C#'><img className={styles.logo} src='/services/csharp.png' width='7%' /></Tooltip>
              <Tooltip title='VBA'><img className={styles.logo} src='/services/vba.png' width='7%' /></Tooltip>
            </Stack>
            <h3>Desktop Frameworks.</h3>
            <Stack
              sx={{ alignItems: 'center', justifyContent: {sx: 'center', md: 'left'} }}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Tooltip title='WPF'><img className={styles.logo} src='/services/wpf.png' width='7%' /></Tooltip>
              <Tooltip title='MS Acces'><img className={styles.logo} src='/services/msaccess.png' width='7%' /></Tooltip>
            </Stack>
            <h3>Database.</h3>
            <Stack
              sx={{ alignItems: 'center', justifyContent: {sx: 'center', md: 'left'} }}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Tooltip title='MS SQL Server'><img className={styles.logo} src='/services/mssql.png' width='7%' /></Tooltip>
              <Tooltip title='MySQL'><img className={styles.logo} src='/services/mysql.png' width='7%' /></Tooltip>
            </Stack>
          </Grid>
          <Grid id='getintouch' item xs={12} md={4}>
            <h2 style={{ color: 'blue' }}>
              Get In Touch:
            </h2>
            <ContactUs projectType='web' />
          </Grid>
        </Grid>
        
      </Container>
    </>
  )
}
export default DesktopServices;
