import Head from 'next/head'
import styles from '../../styles/OurTeam.module.scss'
import { Container, Box, Grid, Stack } from '@mui/material'
import { mobileModel, mobileVendor } from 'react-device-detect';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import { postDevice } from '../../utility/deviceFeatures';
import { useEffect } from 'react';

const OurTeam = () => {
    useEffect(async () => {
        await postDevice({ model: mobileModel, vendor: mobileVendor, page: 'our-team' });
    })
    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}><img src='https://firebasestorage.googleapis.com/v0/b/magicaldigits-web.appspot.com/o/home%2Fourteamdesktop.png?alt=media&token=b17ae8a1-0a27-401b-8508-3a98b714d9a6' width="100%" /></Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}><img src='https://firebasestorage.googleapis.com/v0/b/magicaldigits-web.appspot.com/o/home%2Fourteammobile.png?alt=media&token=f26dc718-f38a-4ebc-99ba-8b8f4eb13f2e' width="100%" /></Box>
            <Container maxWidth="lg">
                <Head>
                    <title>Our Team</title>
                    <meta name="description" content="Magical Digits team" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet" />
                </Head>
                <h1 className={styles.heading}>Our Team</h1>
                <h6 className={styles.description2}>Individual dedication to a group effort is what makes a team, a company, a community, or a civilization work.
                    At Magical Digits we push each other to bring out the best in all of us. We believe in enjoying the process rather than concentrating solely on the goal.
                    We are a team of over 20 professionals who work both on-site and remotely.</h6>
                <Stack sx={{ justifyContent: "center", alignItems: "center", marginBottom: "2vw" }} direction="row" spacing={2}>
                    <span><b className={styles.stats}>22</b> Employees</span>
                    <span><b className={styles.stats}>4</b> Departments</span>
                </Stack>
                <h6 className={styles.heading2}>
                    Magical Digits Administration.
                </h6>
                <Grid container sx={{ my: 2 }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card elevation={4} sx={{ m: 1 }}>
                            <CardMedia
                                className={styles.img}
                                component="img"
                                width='100%'
                                height='400px'
                                image="/staff/ok2.png"
                                alt="Ozair Khalid"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <h1 style={{ margin: 0 }}>Ozair Khalid</h1>
                                <h3 style={{ margin: 0 }}>CEO</h3>
                                <h4 style={{ margin: 0 }}>2004-present</h4>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <a href='mailto:ozairkhalid@magicaldigits.com' target="_blank">
                                    <EmailIcon sx={{ color: '#EA4335' }} />
                                </a>
                                <a href='https://www.linkedin.com/in/ozairkhalid/' target="_blank">
                                    <LinkedInIcon sx={{ color: '#0072b1' }} />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card elevation={4} sx={{ m: 1 }}>
                            <CardMedia
                                className={styles.img}
                                component="img"
                                width='100%'
                                height='400px'
                                image="/staff/sa2.png"
                                alt="Salman Arshad"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <h1 style={{ margin: 0 }}>Salman Arshad</h1>
                                <h3 style={{ margin: 0 }}>Director of Software Engineering</h3>
                                <h4 style={{ margin: 0 }}>2004-present</h4>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <a href='mailto:salman@magicaldigits.com' target="_blank">
                                    <EmailIcon sx={{ color: '#EA4335' }} />
                                </a>
                                <a href='https://www.linkedin.com/in/salmanarshad2000/' target="_blank">
                                    <LinkedInIcon sx={{ color: '#0072b1' }} />
                                </a>
                                <a href='https://github.com/salmanarshad2000m' target="_blank">
                                    <GitHubIcon sx={{ color: '#171515' }} />
                                </a>
                                <a href='https://stackoverflow.com/users/87015/salman-a/' target="_blank">
                                    <Image src='/so.png' height='20%' width='20%' />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card elevation={4} sx={{ m: 1 }}>
                            <CardMedia
                                className={styles.img}
                                component="img"
                                width='100%'
                                height='400px'
                                image="/staff/mf.png"
                                alt="Muhammad Faheem"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <h1 style={{ margin: 0 }}>Muhammad Faheem</h1>
                                <h3 style={{ margin: 0 }}>Information Systems Manager</h3>
                                <h4 style={{ margin: 0 }}>2012-present</h4>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <a href='mailto:fahim@magicaldigits.com' target="_blank">
                                    <EmailIcon sx={{ color: '#EA4335' }} />
                                </a>
                                <a href='https://www.linkedin.com/in/muhammad-faheem/' target="_blank">
                                    <LinkedInIcon sx={{ color: '#0072b1' }} />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card elevation={4} sx={{ m: 1 }}>
                            <CardMedia
                                className={styles.img}
                                component="img"
                                width='100%'
                                height='400px'
                                image="/staff/hja2.png"
                                alt="Hisham Jamil Ahmed"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <h1 style={{ margin: 0 }}>Hisham Jamil Ahmed</h1>
                                <h3 style={{ margin: 0 }}>Creative Manager</h3>
                                <h4 style={{ margin: 0 }}>2018-present</h4>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <a href='mailto:hisham@magicaldigits.com' target="_blank">
                                    <EmailIcon sx={{ color: '#EA4335' }} />
                                </a>
                                <a href='https://www.linkedin.com/in/hisham-jamil-ahmed-21211577/' target="_blank">
                                    <LinkedInIcon sx={{ color: '#0072b1' }} />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card elevation={4} sx={{ m: 1 }} id='abdullahansari'>
                            <CardMedia
                                className={styles.img}
                                component="img"
                                width='100%'
                                height='400px'
                                image="/staff/aaa.png"
                                alt="Abdullah Ansari"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <h1 style={{ margin: 0 }}>Abdullah Ansari</h1>
                                <h3 style={{ margin: 0 }}>Senior Software Engineer</h3>
                                <h4 style={{ margin: 0 }}>2020-present</h4>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <a href='mailto:abdullah@magicaldigits.com' target="_blank">
                                    <EmailIcon sx={{ color: '#EA4335' }} />
                                </a>
                                <a href='https://www.linkedin.com/in/abdullahansarii/' target="_blank">
                                    <LinkedInIcon sx={{ color: '#0072b1' }} />
                                </a>
                                <a href='https://github.com/abdullahansarii' target="_blank">
                                    <GitHubIcon sx={{ color: '#171515' }} />
                                </a>
                                <a href='https://stackoverflow.com/users/13062632/abdullah-ansari' target="_blank">
                                    <Image src='/so.png' height='20%' width='20%' />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card elevation={4} sx={{ m: 1 }}>
                            <CardMedia
                                className={styles.img}
                                component="img"
                                width='100%'
                                height='400px'
                                image="/staff/za.png"
                                alt="Zoya Anwer"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <h1 style={{ margin: 0 }}>Zoya Anwer</h1>
                                <h3 style={{ margin: 0 }}>Talent Acquisition Manager</h3>
                                <h4 style={{ margin: 0 }}>2022-present</h4>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <a href='mailto:zoyaanwer@magicaldigits.com' target="_blank">
                                    <EmailIcon sx={{ color: '#EA4335' }} />
                                </a>
                                <a href='https://www.linkedin.com/in/zoya-anwer/' target="_blank">
                                    <LinkedInIcon sx={{ color: '#0072b1' }} />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default OurTeam;