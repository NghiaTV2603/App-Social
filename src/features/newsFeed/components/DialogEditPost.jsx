import React from 'react'
import {Box, Button, colors, Divider, Input, Stack, Typography} from "@mui/material";

const styleInput = {
  paddingLeft: '8px',
  width: '100%',
  color: 'white',
  fontSize: '16px',
  bgcolor: colors.grey[900],
};


const DialogEditPost = (props) => {
  const dataPost = props.dataPost
  const [caption, setCaption] = React.useState(dataPost.captionPost)
  const [content, setContent] = React.useState(dataPost.contentPost)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      caption: data.get('caption'),
      content: data.get('content'),
    });
  };
  return (
    <Stack bgcolor={colors.grey[800]} width={500} color={colors.grey[300]}>
      <Typography variant='h6' fontSize={24} py={1} align='center'>Edit Post</Typography>
      <Divider sx={{backgroundColor: colors.grey[500]}}/>
      <Stack component="form" onSubmit={handleSubmit} noValidate p={2}>
        <Typography marginTop={1}>Caption Post</Typography>
        <Box>
          <Input
            name="caption"
            multiline
            rows={4}
            sx={styleInput}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </Box>
        <Typography marginTop={1}>Content Post</Typography>
        <Box>
          <Input
            name="content"
            multiline
            rows={2}
            sx={styleInput}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Box>
        <Box pt={3} align="right">
          <Button
            sx={{marginRight: 2, color: 'white'}}
            onClick={
              () => props.oncloseEditPost()
            }
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained"
                  onClick={
                    () => props.oncloseEditPost()
                  }
          >
            Done
          </Button>
        </Box>
      </Stack>
    </Stack>
  )
}

export default DialogEditPost
