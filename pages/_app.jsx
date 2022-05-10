import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import CookieConsent from "react-cookie-consent";

const clientSideEmotionCache = createEmotionCache();


function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
          <CookieConsent acceptOnScroll={true} acceptOnScrollPercentage={25} style={{ background: "#D2B298" }} buttonStyle={{background: '#fff'}}>This website uses cookies to enhance the user experience.</CookieConsent>
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )

}

export default MyApp
