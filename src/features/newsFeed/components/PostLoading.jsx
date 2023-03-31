import { colors, Stack,styled } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const CustomSkeleton = styled(Skeleton)({
  backgroundColor: colors.grey[700],
});

const PostLoading = () => {
   return (
      <>
         <Stack
            sx={{ width: 700, backgroundColor: colors.grey[800] }}
            borderRadius={2}
            m={1}
         >
            <Stack
               className="UserPost"
               direction="row"
               justifyContent="space-between"
               py={2}
            >
              <Stack direction="row" px={2} spacing={1} alignItems={'center'}>
                <CustomSkeleton  variant="circular" width={56} height={56} />
                <Stack direction={'column'}>
                  <CustomSkeleton width={400} variant="text" height={20} />
                  <CustomSkeleton width={250} variant="text" height={20} />
                </Stack>
              </Stack>
            </Stack>
           <CustomSkeleton variant="rounded" width={'100%'} height={500} />
           <CustomSkeleton width={'100%'} variant="text" height={40} />
         </Stack>
      </>
   );
};

export default PostLoading;
