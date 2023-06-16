import { Skeleton } from "@mui/material";
import './SkeletonPhoto.scss';

export const SkeletonPhoto = () => {
   
   return (
      <div className="SkeletonPhoto">
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
      </div>
   )
}
