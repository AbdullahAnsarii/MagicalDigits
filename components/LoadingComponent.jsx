import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingComponent = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p:10 }}>
            <CircularProgress color='secondary'/>
        </Box>
    );
}
export default LoadingComponent;