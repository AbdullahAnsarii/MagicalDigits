import { Button, Container, Stack, Tooltip, Divider, Box, Grid } from '@mui/material';
import Head from 'next/head'
import styles from '../../styles/WebServices.module.scss'
import Image from 'next/image'
import ContactUs from '../../components/ContactUs';

const WebServices = () => {
  return (
    <>
      <Grid container spacing={1} sx={{ display: 'flex' }}>
        <Grid item xs={12} md={6}>
          <img className={styles.image} src='/services/web.png' />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <h5 className={styles.heading}>Web Development.</h5>
            <h6 className={styles.description}>
              To understand and meet your requirements, our battle-tested web development team utilises both latest and legacy tools.
            </h6>
            <Button href="#getintouch" className={styles.animatedButton} variant="outlined" color="secondary" sx={{ textTransform: 'none', justifySelf: 'center' }}>Get In Touch</Button>
          </Box>
        </Grid>

      </Grid>

      <Container id="getintouch" maxWidth='lg' sx={{ mb: 2 }}>
        <Head>
          <title>Services | Web Development</title>
          <meta name="description" content="Web devlopment services by Magical Digits" />
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
              sx={{ alignItems: 'center', justifyContent: { sx: 'center', md: 'left' } }}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Tooltip title='C#'><img className={styles.logo} src='/services/csharp.png' width='7%' /></Tooltip>
              <Tooltip title='Javascript'><img className={styles.logo} src='/services/js.png' width='7%' /></Tooltip>
              <Tooltip title='Typescript'><img className={styles.logo} src='/services/ts.png' width='7%' /></Tooltip>
              <Tooltip title='PHP'><img className={styles.logo} src='/services/php.png' width='7%' /></Tooltip>
            </Stack>
            <h3>Web Frameworks.</h3>
            <Stack
              sx={{ alignItems: 'center', justifyContent: { sx: 'center', md: 'left' } }}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Tooltip title='.NET'><img className={styles.logo} src='/services/net.png' width='7%' /></Tooltip>
              <Tooltip title='Next.js'><img className={styles.logo} src='/services/next.png' width='7%' /></Tooltip>
              <Tooltip title='Laravel'><img className={styles.logo} src='/services/laravel.png' width='7%' /></Tooltip>
            </Stack>
            <h3 >Front-end Stack.</h3>
            <Stack
              sx={{ alignItems: 'center', justifyContent: { sx: 'center', md: 'left' } }}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Tooltip title='React.js'><img className={styles.logo} src='/services/react.png' width='7%' /></Tooltip>
              <Tooltip title='JQuery'><img className={styles.logo} src='/services/jquery.png' width='7%' /></Tooltip>

              <Tooltip title='HTML'><img className={styles.logo} src='/services/html.png' width='7%' /></Tooltip>
              <Tooltip title='CSS'><img className={styles.logo} src='/services/css.png' width='7%' /></Tooltip>
              <Tooltip title='Bootstrap'><img className={styles.logo} src='/services/bootstrap.png' width='7%' /></Tooltip>


            </Stack>

            <Stack sx={{ alignItems: 'center', justifyContent: { sx: 'center', md: 'left' }, mt: 2 }}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}>
              <Tooltip title='Sass'><img className={styles.logo} src='/services/sass.png' width='7%' /></Tooltip>

              <Tooltip title='Material-UI'><img className={styles.logo} src='/services/mui.png' width='7%' /></Tooltip>
              <Tooltip title='Ant-Design'><img className={styles.logo} src='/services/antd.png' width='7%' /></Tooltip>
            </Stack>
            <h3 >Back-end.</h3>
            <Stack
              sx={{ alignItems: 'center', justifyContent: { sx: 'center', md: 'left' } }}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Tooltip title='Node.js'><img className={styles.logo} src='/services/node.png' width='7%' /></Tooltip>
              <Tooltip title='ASP.NET'><img className={styles.logo} src='/services/asp.png' width='7%' /></Tooltip>
            </Stack>
            <h3 >Database.</h3>
            <Stack
              sx={{ alignItems: 'center', justifyContent: { sx: 'center', md: 'left' } }}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Tooltip title='MS SQL Server'><img className={styles.logo} src='/services/mssql.png' width='7%' /></Tooltip>
              <Tooltip title='MySQL'><img className={styles.logo} src='/services/mysql.png' width='7%' /></Tooltip>
              <Tooltip title='MongoDB'><img className={styles.logo} src='/services/mongo.png' width='7%' /></Tooltip>
              <Tooltip title='Firebase'><img className={styles.logo} src='/services/firebase.png' width='3%' /></Tooltip>
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
export default WebServices;
