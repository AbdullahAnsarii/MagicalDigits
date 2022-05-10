import styles from '../styles/Footer.module.scss';
import Image from 'next/image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Box>
                
                <Image src='/mdlogo.png' width='100%' height='60%' />
                <p>&copy; {(new Date()).getFullYear()} Magical Digits. All rights reserved.</p>
                
                <Box>
                    <a target='__blank' href='https://www.facebook.com/MagicalDigitsPakistan/'>
                        <FacebookIcon sx={{color: '#3b5998'}} className={styles.icon} />
                    </a>
                    <a target='__blank' href='https://www.linkedin.com/company/magicaldigits/' >
                        <LinkedInIcon sx={{color: '#0072b1'}} className={styles.icon} />
                    </a>
                    <a target='__blank' href='https://github.com/magicaldigits'>
                        <GitHubIcon sx={{color: '#171515'}} className={styles.icon} />
                    </a>
                </Box>
                <p>Designed and developed by <Link href='http://localhost:3000/about-us/our-team#abdullahansari'>Abdullah Ansari</Link></p>
            </Box>

            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            <ul className={styles.iconList} >
                <h3>Quick Links</h3>
                    <li className={styles.iconListItem}>
                        <a href='/products/opticofy'><ArrowRightIcon className={styles.icon} />Opticofy</a>
                    </li>

                    <li className={styles.iconListItem}>
                        <a href='/about-us/our-story'><ArrowRightIcon className={styles.icon} />Our Story</a>
                    </li>

                    <li className={styles.iconListItem}>
                        <a href='/about-us/our-team'><ArrowRightIcon className={styles.icon} />Our Team</a>
                    </li>

                    <li className={styles.iconListItem}>
                        <a href='/contactus'><ArrowRightIcon className={styles.icon} />Contact Us</a>
                    </li>

                    <li className={styles.iconListItem}>
                        <a href='/careers'><ArrowRightIcon className={styles.icon} />Careers</a>
                    </li>
                </ul>
            </Box>
       
            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                <ul className={styles.iconList}>
                <h3>Connect With Us</h3>
                    <li className={styles.iconListItem}>
                        <LocationOnIcon className={styles.icon} />
                        <span>Suite # 205, Gulshan Trade Center Block 5
                            <br /> Gulshan-e-Iqbal, Karachi, Pakistan.</span>
                    </li>
                    <br />
                    <li className={styles.iconListItem}>
                        <PhoneIcon className={styles.icon} />
                        <a href='tel:+922134982756'>+92-21-34982756</a>
                    </li>
                    <br />
                    <li className={styles.iconListItem}>
                        <MailIcon className={styles.icon} />
                        <a href='mailto:info@magicaldigits.com'>info@magicaldigits.com</a>
                    </li>
                </ul>
            </Box>
        </footer>
    )
}
export default Footer;