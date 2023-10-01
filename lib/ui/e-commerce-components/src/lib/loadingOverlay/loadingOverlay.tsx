import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function LoadingOverlay() {
    return (
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100vw", height: '100%', position: "fixed", top: '0', left: '0', backgroundColor: "rgba(0,0,0,.5)" }}>
            <CircularProgress color='warning' />
        </Box>
    );
}

export { LoadingOverlay }