import React from 'react'
import { Typography, Button, Alert } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
function Practice(props) {
  return (
    <div>

    <Typography variant="h6" sx={{ color: "green" }}>jdjfslfjlsjd
          </Typography>
          <Button variant='contained' sx={{ backgroundColor: 'black', color: 'white' }}> click me </Button>
          <Button variant='Text'> click me </Button>
          <Button variant='outlined' onClick={()=> alert("You Sucessfully Perform this")}> fuck me </Button>


      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete {}
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </div>
  )
}

export default Practice