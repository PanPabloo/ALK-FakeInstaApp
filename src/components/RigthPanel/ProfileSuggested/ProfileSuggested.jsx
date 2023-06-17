import FaceIcon from "@mui/icons-material/Face.js";
import { Box, Typography } from "@mui/material";

export const ProfileSuggested = props => {
    
    return (
        
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                marginBlock: 1
            }}
        >
            <FaceIcon
                sx={{
                    fontSize: '38px',
                    color: props.color,
                    border: `1px solid ${props.color}`,
                    borderRadius: '50%',
                    padding: '1px'
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginLeft: '30px',
                }}
            >
                <Typography color="text.primary" fontSize='1.5rem' fontWeight={700}>
                    {props.name}
                </Typography>
                <Typography color="text.secondary" fontSize='1.3rem'>
                    propozycja dla Ciebie
                </Typography>
            </Box>
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'flex-end',
            }}
            >
                <Typography
                    sx={{ cursor: 'pointer' }}
                    color="primary"
                    fontWeight={700}
                    fontSize="1.3rem"
                >
                    Obserwuj
                </Typography>
            </Box>
        </Box>
    )
};