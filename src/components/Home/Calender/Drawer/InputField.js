import {React, } from 'react';
import Box from '@mui/material/Box';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const InputField = ({timelist, handleClose, open}) => {
    const {time} = timelist;
    return (
        <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {time}
          </Typography>


          <form action="">
         <Box
      sx={{
        width: 1000,
        maxWidth: '100%',
      }}
    >
      <TextField style={{marginBottom: 5}} fullWidth label="Your Name"  id="fullWidth" />
      <TextField label="Your Phone" style={{marginBottom: 5}} fullWidth  id="fullWidth" />
      <TextField label="Your Email" style={{marginBottom: 5}} fullWidth  id="fullWidth" />
      <TextField label="Your Location" style={{marginBottom: 5}} fullWidth  id="fullWidth" />
      <TextField label="Your Id" style={{marginBottom: 5}} fullWidth  id="fullWidth" />
    </Box>
    </form>
        </Box>
      </Modal>
      </div>
    );
};

export default InputField;