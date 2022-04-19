import '../styles/globals.css';
import Layout from '../components/Layout';
import { StyledEngineProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
<Layout>
      <Component {...pageProps} />
    </Layout>
    </StyledEngineProvider>
  )

}

export default MyApp
