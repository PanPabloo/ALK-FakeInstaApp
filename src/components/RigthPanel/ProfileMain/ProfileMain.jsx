import { Box, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face.js";

export const ProfileMain = () => {
    
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                paddingBlock: 1
            }}
        >
            <FaceIcon sx={{ fontSize: '50px', border: '1px solid black', borderRadius: '50%', padding: '2px' }} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginLeft: '20px',
                }}
            >
                <Typography color="text.primary" fontSize='1.8rem' fontWeight={700}>jan.kowalski102</Typography>
                <Typography color="text.secondary" fontSize='1.3rem'>Jan Kowalski</Typography>
            </Box>
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'flex-end',
            }}
            >
                <Typography sx={{ cursor: 'pointer' }} color="primary" fontWeight={700} fontSize="1.3rem">
                    Przełącz
                </Typography>
            </Box>
        </Box>
    )
};