import { Box, Typography } from "@mui/material";
import { ProfileMain } from "./ProfileMain/ProfileMain.jsx";
import { ProfileSuggested } from "./ProfileSuggested/ProfileSuggested.jsx";

const users = [
    { name: 'lorem 234', color: 'red' },
    { name: 'szybki23', color: 'green' },
    { name: 'olafSz_', color: 'blue' },
    { name: 'okasia1', color: 'orange' },
    { name: 'kubusP', color: 'purple' }
];

export const RightPanel = () => {
    
    return (
        <Box sx={{
            width: 320,
            display: 'flex',
            flexDirection: 'column',
        }}>
            <ProfileMain />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBlock: '1.5rem',
            }}>
                <Typography fontSize="1.3rem" color="text.secondary">Propozycje dla Ciebie</Typography>
                <Typography fontSize="1.3rem" fontWeight={700} sx={{ cursor: 'pointer' }}>Zobacz wszystkich</Typography>
            </Box>
            {users.map(user => <ProfileSuggested key={user.name} name={user.name} color={user.color} />)}
        </Box>
    )
};