import React, { useRef } from 'react';
import { Typography, Card, CardMedia, Stack, colors } from '@mui/material';
import Webcam from 'react-webcam';

const VideoCall = () => {
   const webcamRef = useRef(null);
   return (
      <Stack
         bgcolor={colors.grey[900]}
         width={'100%'}
         height={'100vh'}
         direction={'row'}
         spacing={4}
         justifyContent={'center'}
      >
         <Stack>
            <Webcam
               audio={false}
               ref={webcamRef}
               screenshotFormat="image/jpeg"
            />
         </Stack>
         <Stack>
            <Webcam
               audio={false}
               ref={webcamRef}
               screenshotFormat="image/jpeg"
            />
         </Stack>
      </Stack>
   );
};

export default VideoCall;
