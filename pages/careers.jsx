import Head from 'next/head'
import styles from '../styles/Careers.module.scss'
import { Container, Box, Grid, List, Divider, ListItem, ListItemText, ListItemIcon, Button, Paper, Chip, TextField } from '@mui/material'
import { useState } from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MoneyIcon from '@mui/icons-material/Money';
import WorkIcon from '@mui/icons-material/Work';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'

export const getStaticProps = () => {
    const jobs = [
        { title: 'Junior Software Engineer', closes: '2022-05-20', positions: 1 },
        { title: 'Associate Software Engineer', closes: '2022-06-30', positions: 4 },
        { title: 'Junior Mobile Developer', closes: '2022-05-25', positions: 1 },
        { title: 'Associate Test Engineer', closes: '2022-04-18', positions: 2 }
    ]

    return {
        props: { jobs }
    }

}

const Careers = ({ jobs }) => {
    const [searchText, setSearchText] = useState('');
    const [showResult, setShowResult] = useState(jobs);
    const [openJob1, setOpenJob1] = useState(false);

    const handleClickOpenJob1 = () => {
        setOpenJob1(true);
    };

    const handleCloseJob1 = () => {
        setOpenJob1(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowResult(jobs.filter(job => {
            return job.title.toLowerCase().includes(searchText.toLowerCase());
        }))
    }

    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}><img src='/careersdesktop.png' width="100%" /></Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}><img src='/careersmobile.png' width="100%" /></Box>
            <Container maxWidth="lg">
                <Head>
                    <title>Careers</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet" />
                </Head>
                <h1 className={styles.heading}>Careers</h1>
                <h6 className={styles.description}>We only work with the finest, for the finest.</h6>
                <Box sx={{ textAlign: 'center' }}><Button
                    key='Contact us'
                    href='#jobopenings'
                    variant="outlined"
                    color="secondary"
                    className={styles.animatedButton}
                >
                    View Current Openings
                </Button></Box>

                <h6 className={styles.heading2}>Why Magical Digits?</h6>

                <Grid container sx={{ my: 2 }}>
                    <Grid item xs={12} md={6}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <PaidIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Market leading salary.' />
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem>
                                <ListItemIcon>
                                    <AccessTimeIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Flexible working hours.' />
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem>
                                <ListItemIcon>
                                    <AutoGraphIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Exponential growth in both salary and rank.' />
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem>
                                <ListItemIcon>
                                    <DirectionsCarIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Conveyance allowance.' />
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem>
                                <ListItemIcon>
                                    <CardGiftcardIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Performance bonuses.' />
                            </ListItem>

                        </List>
                    </Grid>
                    <Grid item xs={12} md={6}>

                        <List>
                            <Divider sx={{ display: { md: 'none' } }} variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon>
                                    <CalendarMonthIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Paid leaves.' />
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem>
                                <ListItemIcon>
                                    <SportsEsportsIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Recreational activities to boost productivity.' />
                            </ListItem>

                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon>
                                    <FitnessCenterIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='In-house fitness gym.' />
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem>
                                <ListItemIcon>
                                    <MoneyIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Leave encashments.' />
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem>
                                <ListItemIcon>
                                    <GroupsIcon fontSize='large' color='secondary' />
                                </ListItemIcon>

                                <ListItemText primary='Friendly working environment.' />
                            </ListItem>

                        </List>
                    </Grid>
                </Grid>

                <h6 className={styles.heading2}>Current Job Openings.</h6>
                <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TextField sx={{ m: 2.5, }} color='secondary' label='Search Jobs' value={searchText} onChange={e => setSearchText(e.target.value)} variant='standard' size='small' />
                    <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        className={styles.animatedButton}>Submit</Button>

                </form>
                <Grid container sx={{ my: 2 }} id='jobopenings'>

                    {showResult.length > 0 ? showResult.map((job, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <Paper elevation={4} sx={{ p: 2, m: 1 }}>
                                <h3>{job.title}</h3>
                                <Chip size="small" label={`${job.positions} ${job.positions > 1 ? 'Positions' : 'Position'}`} color='secondary' />
                                <p>Karachi, <img src='https://flagcdn.com/w20/pk.png' /></p>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}><WorkIcon fontSize='small' color='secondary' />&nbsp;<span>Permanent</span></Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <AccessTimeIcon fontSize='small' color='secondary' />&nbsp;
                                    {new Date(job.closes) > new Date() ? <span>Applications closing on {`${(new Date(job.closes)).getDate()}/${(new Date(job.closes)).getMonth() + 1}/${(new Date(job.closes)).getFullYear()}`}
                                    </span> : <span>Applications closed for this position</span>}
                                </Box>
                                <Box sx={{ textAlign: 'center' }}><Button
                                    disabled={new Date(job.closes) > new Date() ? false : true}
                                    size='small'
                                    key='Contact us'
                                    href='#jobopenings'
                                    variant="outlined"
                                    color="secondary"
                                    className={styles.animatedButton}
                                    sx={{ mt: 1 }}
                                    onClick={handleClickOpenJob1}
                                >
                                    View Details
                                </Button></Box>
                            </Paper>
                        </Grid>
                    )) : <h6 className={styles.description}>No jobs found for this keyword.</h6>}
                </Grid>
                <Dialog open={openJob1} onClose={handleCloseJob1}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseJob1}>Cancel</Button>
                        <Button onClick={handleCloseJob1}>Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </>
    )
}
export default Careers;