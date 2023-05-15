import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalStyle } from './styles';

export default function BasicModal({
  open,
  handleClose,
  title,
  content,
  handleSubmit,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={ModalStyle.wrapper}>
        <Typography
          gutterBottom
          id='modal-modal-title'
          variant='h6'
          component='h2'
        >
          {title}
        </Typography>
        {content}
        <Button variant='contained' onClick={handleSubmit}>
          submit
        </Button>{' '}
        <Button variant='contained' onClick={handleClose}>
          cancel
        </Button>
      </Box>
    </Modal>
  );
}
