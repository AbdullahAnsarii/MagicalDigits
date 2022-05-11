import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import CookieConsent from "react-cookie-consent";
import { Provider } from "react-redux";
import { store } from '../src/redux/store';

const clientSideEmotionCache = createEmotionCache();


function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
            <CookieConsent acceptOnScroll={true} acceptOnScrollPercentage={75} style={{ background: "#D2B298" }} buttonStyle={{ background: '#fff' }}>This website uses cookies to enhance the user experience.</CookieConsent>
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )

}

export default MyApp
