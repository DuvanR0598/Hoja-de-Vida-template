import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import 'tailwindcss/tailwind.css';

interface DialogHireMeProps {
    isOpen: boolean;
    handleClose: () => void;
  }

const DialogHireMe: React.FC<DialogHireMeProps> = ({ isOpen, handleClose }) => {


    return (
        <Dialog
      open={isOpen}
      onClose={handleClose}
    >
      <DialogTitle className=' text-2xl text-center font-bold'>Tomó la desición correcta!</DialogTitle>
      <DialogContent>
        <DialogContentText className=' font-semibold text-center'>
          Gracias por depositarme su confianza, sientase libre de contactarme por cualquier medio que disponga.
          Espero que podamos lograr cosas grandiosas juntos. No se arrepentirá.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export {DialogHireMe}

function useStyles() {
    throw new Error('Function not implemented.');
}
