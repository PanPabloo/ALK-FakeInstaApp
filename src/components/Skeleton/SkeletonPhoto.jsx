import { Box, Skeleton, styled } from "@mui/material";

export const SkeletonPhoto = () => {
    
    return (
        <SkeletonBox>
            <Skeleton
                variant="rounded"
                width='100%'
                height='20%'
                sx={{
                    bgcolor: '#eee'
                }}
            />
            <Skeleton
                variant="circular"
                width={75}
                height={75} sx={{
                marginBlock: '20px',
                bgcolor: '#ddd'
            }}
            />
            <Skeleton
                variant="rounded"
                width='100%'
                height='20%'
                sx={{
                    bgcolor: '#ccc',
                    flexGrow: 1
                }}
            />
        </SkeletonBox>
    )
};

const SkeletonBox = styled(Box)({
    width: '100%',
    height: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});
