import Head from 'next/head'
import styles from '../styles/Clients.module.scss'
import { Container, Box, Tabs, Tab, Grid, Paper, Stack } from '@mui/material'
import { useState } from 'react'
import LoadingComponent from '../components/LoadingComponent'

export const getStaticProps = () => {
    const webClients = [
        { link: "https://goldenerinns.com/", logo: "https://static-0.redstone.net/images/domains/1804/logo/02000067.jpg" },
        { link: "https://northwestskiers.com/", logo: "https://static-0.redstone.net/images/domains/2117/logo/NWSlogo.png" },
        { link: "https://vroa.org/", logo: "https://static-1.redstone.net/images/domains/1907/logo/VROA%20Logo.png" },
        { link: "https://hawaii.nu/", logo: "https://static-1.redstone.net/images/domains/2107/logo/Hawaii.nu.png" },
        { link: "https://varoom.biz/", logo: "https://static-1.redstone.net/images/domains/4503/logo/20220223%20Varoom.vip%20Logo.jpg" },
        { link: "https://vortexmanagers.com/", logo: "https://static-1.redstone.net/images/domains/4112/logo/VMlogo.png" },
        { link: "https://oceanshores.com/", logo: "https://static-1.redstone.net/images/domains/4811/logo/OceanShoresCentralReservations.png" },
        { link: "https://bedfinders.com/", logo: "https://static-1.redstone.net/images/domains/2273/logo/BedFinders.png" },
        { link: "https://signatour.com/", logo: "https://static-1.redstone.net/images/domains/2424/logo/SIGNATOURlogo.png" },
        { link: "https://tradewindvacationrentals.com/", logo: "https://static-0.redstone.net/images/domains/2783/logo/TWVRlogo.png" },
        { link: "https://hi-tide-resort.com/", logo: "https://static-1.redstone.net/images/domains/5451/logo/Hi-TideComplexLogo.png" },
        { link: "https://attheblue.com/", logo: "https://static-1.redstone.net/images/domains/5314/logo/AtTheBluelogo.png" },
        { link: "https://wavrma.org/", logo: "https://static-1.redstone.net/images/domains/3246/logo/020000095.jpg" },
        { link: "https://sunspotvacationrentals.com/", logo: "https://static-0.redstone.net/images/domains/1807/logo/SunspotsLogo.png" },
        { link: "https://arrowpointvacationrentals.com/", logo: "https://static-1.redstone.net/images/domains/3537/logo/APVRlogo.png" },
        { link: "https://cascadecrestcondos.com/", logo: "https://static-0.redstone.net/images/domains/3558/logo/Cascadecrestlogo.png" },
        { link: "https://stevenspass.co/", logo: "https://static-0.redstone.net/images/domains/4764/logo/SPAlogo.png" },
        { link: "https://w4brand.com/", logo: "https://static-0.redstone.net/images/domains/4904/logo/W4Logo.png" },
        { link: "https://anchorinns.com/", logo: "https://static-0.redstone.net/images/domains/4471/logo/AnchorInnsLogo.png" },
        { link: "https://lakelevelcottages.com/", logo: "https://static-1.redstone.net/images/domains/5368/logo/LLClogo.jpg" },
    ]

    return {
        props: { webClients }
    }
}

const Clients = ({ webClients }) => {
    const [value, setValue] = useState("one");
    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    }
    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}><img src='https://firebasestorage.googleapis.com/v0/b/magicaldigits-web.appspot.com/o/home%2Fclientsdesktop.png?alt=media&token=24611f00-e3f4-456f-8653-4d7d5b6616a1' width="100%" /></Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}><img src='https://firebasestorage.googleapis.com/v0/b/magicaldigits-web.appspot.com/o/home%2Fclientsmobile.png?alt=media&token=ff244c1b-54ac-4be8-a987-21e48613a1a8' width="100%" /></Box>
            <Container maxWidth="lg">
                <Head>
                    <title>Clients</title>
                    <meta name="description" content="Magical Digits clients" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet" />
                </Head>
                <h1 className={styles.heading}>Our Clients</h1>
                <h6 className={styles.description}>
                    Besides our own products we have been developing customized applications for clients all over the world for the last two decades.
                    Mentioned below are some of the clients with whom we have previously worked.
                </h6>

                <Box>
                    <Tabs
                        centered
                        // variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                    >
                        <Tab sx={{ fontSize: "18px" }} value="one" label="Web Apps" />
                        <Tab sx={{ fontSize: "18px" }} value="two" label="Desktop Apps" />
                    </Tabs>
                </Box>

                {(value == "one") &&
                    <>
                        <Stack sx={{ justifyContent: "center", alignItems: "center", mb:2 }} direction="row" spacing={2}>
                            <span><b className={styles.stats}>750+</b> Websites</span>
                            <span><b className={styles.stats}>50+</b> Brands</span>
                            <span><b className={styles.stats}>20+</b> Years</span>
                        </Stack>
                        <Grid sx={{ justifyContent: "center", alignItems: "center", mb:2 }} container spacing={3}>
                            {webClients.map((webClient, index) => (
                                <Grid item key={index} xs={12} sm={6} md={3}  >

                                    <a target="_blank" key={index} className={styles.cell} href={webClient.link}>
                                        <Paper sx={{  height: {xs: '200px', md: '120px'} }} className={styles.client} elevation={6}>
                                            <img className={styles.image} src={webClient.logo} width="80%" />
                                        </Paper>
                                    </a>

                                </Grid>
                            ))}
                        </Grid>
                    </>}
                    {(value == "two") && <LoadingComponent />}

            </Container>
        </>
    )
}
export default Clients;