import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import 'tailwindcss/tailwind.css';

interface HireMeDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

const HireMeDialog = ({ isOpen, handleClose }: HireMeDialogProps) => {


  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}>
      <DialogTitle className=' text-2xl text-center font-bold'>¡QUE BUENA ELECCIÓN!</DialogTitle>
      <DialogContent>
        <DialogContentText className=' font-light text-justify'>
          Al lado derecho encontraras todas mis redes sociales donde podremos conversar. Te espero por alla.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="success">Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}

export { HireMeDialog }
