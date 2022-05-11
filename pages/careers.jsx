import Head from 'next/head'
import styles from '../styles/Careers.module.scss'
import { Container, Alert, Box, Grid, List, Divider, ListItem, ListItemText, ListItemIcon, Button, Paper, Chip, TextField, Input } from '@mui/material'
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
import UploadIcon from '@mui/icons-material/Upload';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import { postCareer } from '../utility/careers';
import { useSelector, useDispatch } from "react-redux";
import { makeTrue, makeFalse } from "../src/redux/applicationStatus";
import { mobileModel, mobileVendor } from 'react-device-detect';
import {postDevice } from '../utility/deviceFeatures';
import { useEffect } from 'react';

export const getStaticProps = () => {
    const jobs = [
        { id: 1, title: 'Junior Software Engineer', closes: '2022-05-20', positions: 1, requirements: ['BS Computer Science or equivalent.', '1+ years of experience in developing web/desktop applications with .NET.', 'C# (WPF/Winforms).', 'MS SQL Server/MySQL.', 'Source Control (Git).', 'Hands-on experience with Dependency Injection.', 'Have excellent communication/writing skills in English.'], responsibilities: ['Development, testing, and maintenance of new and modified software based on specified requirements.', 'Engage with internal team members to create software architecture and design.', 'Test and deploy applications and systems.'] },
        { id: 2, title: 'Associate Software Engineer', closes: '2022-06-30', positions: 4, requirements: ['BS Computer Science or equivalent.', 'No prior experience required.'] },
        { id: 3, title: 'Junior Mobile Developer', closes: '2022-05-25', positions: 1, requirements: ['Good knowledge of Computer Science concepts including software design architectures, design patterns, data structures, algorithms, multithreading and databases in general.', '1+ years of experience developing native mobile applications.', 'Javascript/Dart (React Native/Flutter).', 'Firebase.', 'Source Control (Git).', 'Have excellent communication/writing skills in English.'], responsibilities: ['Development, testing, and maintenance of new and modified software based on specified requirements.', 'Engage with internal team members to create software architecture and design.', 'Test and deploy applications and systems.'] },
        { id: 4, title: 'Associate Test Engineer', closes: '2022-04-18', positions: 2 }
    ]

    return {
        props: { jobs }
    }

}

const Careers = ({ jobs }) => {
    useEffect(async () => {
        await postDevice({ model: mobileModel, vendor: mobileVendor, page: 'careers' });
    })
    const [searchText, setSearchText] = useState('');
    const [showResult, setShowResult] = useState(jobs);
    const [openJob, setOpenJob] = useState(false);
    const [job, setJob] = useState({});
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phoneNo: '',
        resume: ''
    });
    const [isValidationError, setIsValidationError] = useState(false);
    const { status } = useSelector((state) => state.applicationStatus);
    const dispatch = useDispatch();

    const handleOpenJob = (id) => {
        setJob(jobs.find(job => job.id == id))
        setOpenJob(true);
    };

    const handleCloseJob = () => {
        setOpenJob(false);
        setFormValues({
            name: '',
            email: '',
            phoneNo: '',
            resume: ''
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowResult(jobs.filter(job => {
            return job.title.toLowerCase().includes(searchText.toLowerCase());
        }))
    }
    const handleApplicationSubmit = async (event) => {
        event.preventDefault();
        if (formValues.name == '' || formValues.email == '' || formValues.phoneNo == '' || formValues.resume == '') {
            setIsValidationError(true);
            setTimeout(()=> {
                setIsValidationError(false);
            }, 3000)
        }
        else {
            postCareer(dispatch(makeTrue()), formValues.name, formValues.email, formValues.phoneNo, formValues.resume)
                .then(() => {
                    setTimeout(() => {
                        dispatch(makeFalse())
                    }, 5000)
                })
        }
    }

    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}><img src='https://firebasestorage.googleapis.com/v0/b/magicaldigits-web.appspot.com/o/home%2Fcareersdesktop.png?alt=media&token=d4767b89-61d4-45e7-ac54-8c7634d3f6bb' width="100%" /></Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}><img src='https://firebasestorage.googleapis.com/v0/b/magicaldigits-web.appspot.com/o/home%2Fcareersmobile.png?alt=media&token=68850dcc-194d-4a7a-a271-58d6555630fb' width="100%" /></Box>
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
                                    onClick={() => handleOpenJob(job.id)}
                                >
                                    Apply Now
                                </Button></Box>
                            </Paper>
                        </Grid>
                    )) : <h6 className={styles.description}>No jobs found for this keyword.</h6>}
                </Grid>
                {openJob && <Dialog open={openJob} onClose={handleCloseJob}>
                    {status && <Alert  sx={{m:2}} severity="success">{`${formValues.name}, we have successfully received your application!`}</Alert>}
                    {isValidationError && <Alert sx={{m:2}} severity="error">Please provide all the required values</Alert>}
                    <DialogTitle><b>{job.title}</b></DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <b>Requirements</b>
                            <ul>
                                {job.requirements.map((requirement, index) => (
                                    <li key={index}>{requirement}</li>
                                ))}
                            </ul>
                            {job.responsibilities && <><b>Responsibilities</b>
                                <ul>
                                    {job.responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                </ul></>}
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="name"
                            label="Name*"
                            size="small"
                            type="text"
                            fullWidth
                            variant="standard"
                            color='secondary'
                            value={formValues.name}
                            onChange={e => setFormValues({ ...formValues, name: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email Address*"
                            size="small"
                            type="email"
                            fullWidth
                            variant="standard"
                            color='secondary'
                            value={formValues.email}
                            onChange={e => setFormValues({ ...formValues, email: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            id="contact"
                            label="Contact No.*"
                            size="small"
                            type="text"
                            fullWidth
                            variant="standard"
                            color='secondary'
                            value={formValues.phoneNo}
                            onChange={e => setFormValues({ ...formValues, phoneNo: e.target.value })}
                        />
                        <label htmlFor="button-file">
                            <Input id="button-file" onChange={e => setFormValues({ ...formValues, resume: e.target.files[0] })} type="file" hidden sx={{ display: 'none' }} />
                            <Button
                                variant="contained" component="span"
                                color="secondary"
                                className={styles.animatedButton}
                                endIcon={<UploadIcon />}>
                                Upload Resume
                            </Button>
                            <span>&nbsp;{formValues.resume.name}</span>
                        </label>
                        <br />
                        <em>Upload resume in this format - [Your Full Name][Your Contact No].pdf</em>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='outlined' color="secondary"
                            className={styles.animatedButton} onClick={handleCloseJob}>Close</Button>
                        <Button variant="outlined"
                            color="secondary"
                            className={styles.animatedButton}
                            onClick={handleApplicationSubmit}>
                            Submit Application
                        </Button>
                    </DialogActions>
                </Dialog>}
            </Container>
        </>
    )
}
export default Careers;