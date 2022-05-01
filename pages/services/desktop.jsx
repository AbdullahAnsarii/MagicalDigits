import { Button, Container, Stack, Tooltip, Divider, Box, Grid } from '@mui/material';
import Head from 'next/head'
import styles from '../../styles/WebServices.module.scss'
import Image from 'next/image'
import ContactUs from '../../components/ContactUs';

const DesktopServices = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {/* <Box> */}
        <img className={styles.image} src='/6.png' />
        {/* </Box> */}
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5 className={styles.heading}>Desktop Development.</h5>
          <h6 className={styles.description}>
            In our 20 years history, we have created tons of standalone desktop apps for hundreds of vendors.
          </h6>
          <Button href="#getintouch" variant="outlined" color="secondary" sx={{ textTransform: 'none', justifySelf: 'center' }}>Get In Touch</Button>
        </Box>
      </Box>

      <Container id="getintouch" maxWidth='lg'>
        <Head>
          <title>Services | Desktop Development</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet" />
        </Head>

        <Grid container spacing={1}>
        <Grid item xs={8}>
          <h6 className={styles.description}>
            We have expertise in the following:
          </h6>
          <h5 className={styles.logoHeading} >Programming Languages.</h5>
          <Stack
            sx={{ alignItems: 'center', justifyContent: 'left' }}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Tooltip title='C#'><img className={styles.logo} src='/services/csharp.png' width='7%' /></Tooltip>
            <Tooltip title='VBA'><img className={styles.logo} src='/services/vba.png' width='7%' /></Tooltip>
          </Stack>
          <h5 className={styles.logoHeading} >Desktop Frameworks.</h5>
          <Stack
            sx={{ alignItems: 'center', justifyContent: 'left' }}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Tooltip title='WPF'><img className={styles.logo} src='/services/wpf.png' width='7%' /></Tooltip>
            <Tooltip title='MS Access'><img className={styles.logo} src='/services/msaccess.png' width='7%' /></Tooltip>
          </Stack>
          <h5 className={styles.logoHeading} >Database.</h5>
          <Stack
            sx={{ alignItems: 'center', justifyContent: 'left' }}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Tooltip title='MS SQL Server'><img className={styles.logo} src='/services/mssql.png' width='7%' /></Tooltip>
            <Tooltip title='MySQL'><img className={styles.logo} src='/services/mysql.png' width='7%' /></Tooltip>
          </Stack>
        </Grid>
        <Grid id='getintouch' item xs={4}>
        <h6 className={styles.description}>
            Get In Touch:
          </h6>
          <ContactUs projectType='desktop' />
        </Grid>
          </Grid>
        
      </Container>
    </>
  )
}
export default DesktopServices;
