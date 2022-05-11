import { Container, Stack, Box, Grid, Paper } from '@mui/material';
import Head from 'next/head';
import styles from '../../styles/OurStory.module.scss';
import { Slide } from "react-awesome-reveal";
import CountUp from 'react-countup';


const OurStory = () => {

    const StatsComponent = () => {
        return (
            <>
                <Box sx={{ textAlign: 'center' }}>
                    <h1 className={styles.testimonialsHeading2}>Our Impact</h1>
                </Box>
                <Stack sx={{ justifyContent: "center", alignItems: "center", mb: 2 }} direction="row" spacing={2}>
                    <span><b className={styles.stats}><CountUp end={20} duration={2} />+</b> Years</span>
                    <span><b className={styles.stats}><CountUp end={40} duration={2} />+</b> Clients</span>
                    <span><b className={styles.stats}><CountUp end={1000} duration={2} />+</b> IT Solutions</span>
                    <span><b className={styles.stats}><CountUp end={11} duration={2} />+</b> Countries</span>
                </Stack>
            </>
        )
    }

    const TestimonialsComponent = () => {
        return (
            <>
                <Box sx={{ textAlign: 'center' }}>
                    <h1 className={styles.testimonialsHeading1}>Don't take our word for it.</h1>
                    <h1 className={styles.testimonialsHeading2}>Trust our customers</h1>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} >
                        <Slide direction='up' triggerOnce fraction='0.5'>
                            <Paper sx={{ p: 3, backgroundColor: 'rgba(173, 216, 230, 0.3)' }} elevation={2} >
                                <blockquote className={styles.blockquote}><h3><i>
                                    Magical Digits developed the software for our Visa Applicants Data Base and were excellent in understanding our requirements and delivering the system within the stipulated time.

                                    We have been using their services since March 2006 and found them cooperative and reliable, their after sales support is also prompt and good. In view of our good experience we will hire them for our up coming projects as well.
                                </i></h3></blockquote>
                                <h2 style={{ margin: 0 }}> Ruby Purveyor <img src='https://flagcdn.com/w20/ie.png' /></h2>
                                <p style={{ margin: 0 }}>Office Manager</p>
                                <p style={{ margin: 0 }}>Consulate of Ireland</p>
                            </Paper>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Slide direction='up' triggerOnce fraction='0.5'>
                            <Paper sx={{ p: 3, backgroundColor: 'rgba(173, 216, 230, 0.3)' }} elevation={2} >
                                <blockquote className={styles.blockquote}><h3><i>
                                    We highly recommend Magical Digits for Software solutions, as they have delivered us complete satisfaction on both ends - the software itself and after sales support, we had experience working with other software vendors and we know what software is all about and also the importance of its after sales support.

                                    As we have been given Peace of Mind from this company, so just after few months of our first customized software for “Accounting” we awarded them software of “Quotations” system, which was also delivered with more satisfaction.
                                </i></h3></blockquote>
                                <h2 style={{ margin: 0 }}> Junaid Kureshi <img src='https://flagcdn.com/w20/pk.png' /></h2>
                                <p style={{ margin: 0 }}>Director</p>
                                <p style={{ margin: 0 }}>Gomplast Pakistain Pvt. Ltd.</p>
                            </Paper>
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Slide direction='up' triggerOnce fraction='0.5'>
                            <Paper sx={{ p: 3, backgroundColor: 'rgba(173, 216, 230, 0.3)' }} elevation={2} >
                                <blockquote className={styles.blockquote}><h3><i>
                                    I am confident that the software will work well. Thank you very much for your hard work and patience. I must express my gratitude to you and I shall look forward to more future business dealings with you whenever opportunity arises. I shall recommend you to any one and any of my peers if they require such software.
                                </i></h3></blockquote>
                                <h2 style={{ margin: 0 }}>Patrick Yau <img src='https://flagcdn.com/w20/ca.png' /></h2>
                                <p style={{ margin: 0 }}>Owner</p>
                                <p style={{ margin: 0 }}>VMax Optical</p>
                            </Paper>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Slide direction='up' triggerOnce fraction='0.5'>
                            <Paper sx={{ p: 3, backgroundColor: 'rgba(173, 216, 230, 0.3)' }} elevation={2} >
                                <blockquote className={styles.blockquote}><h3><i>
                                    Thank you very much - I am 100% satisfied and happy. This software will help me growing my business and I am now more confident to fulfill my customers' expectations.
                                </i></h3></blockquote>
                                <h2 style={{ margin: 0 }}>Rafiqullah Jan <img src='https://flagcdn.com/w20/pk.png' /></h2>
                                <p style={{ margin: 0 }}>Manager</p>
                                <p style={{ margin: 0 }}>A1 Eyecare</p>
                            </Paper>
                        </Slide>
                    </Grid>
                </Grid>
            </>
        )
    }
    return (
        <Container id="changeit" maxWidth='lg' sx={{ mb: 2 }}>
            <Head>
                <title>About Magical Digits</title>
                <meta name="description" content="Magical Digits story" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet" />
            </Head>
            <Grid container spacing={1} sx={{ alignItems: 'center', py: 3, justifyContent: 'center' }}>
                <Grid item xs={12} md={5}>
                    <Slide direction='up' triggerOnce fraction='0.5'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/magicaldigits-web.appspot.com/o/home%2FMa.png?alt=media&token=bcb62aef-cf2c-41c5-be9d-60d7f7fad6b0' width='100%' className={styles.mdLogo} />
                    </Slide>
                </Grid>
                <Grid item xs={12} md={7} >
                    <h6 className={styles.heading}>
                        Our Story.
                    </h6>
                    <h6 className={styles.description}>
                        Magical Digits was founded in 2002.
                        We are a technology solutions company that creates and invests in high-end technology products and solutions to improve lives around the globe.
                        In a nut shell, we deliver complete peace of mind to our customers.
                    </h6>
                </Grid>
            </Grid>
            <StatsComponent />
            <TestimonialsComponent />
        </Container>
    )
}
export default OurStory;
