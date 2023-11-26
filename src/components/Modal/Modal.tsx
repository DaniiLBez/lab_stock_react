import React, { FC } from 'react'
import { Box, Button, Modal } from '@mui/material'

interface ModalComponentProps {
  children: React.ReactNode
  title: string
  onClose: () => void
  className?: string
  open: boolean
}

const ModalComponent: FC<ModalComponentProps> = ({
  children,
  title,
  onClose,
  className,
  open
}) => (
  <Modal open={open} onClose={onClose} className={className}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        p: 2
      }}
    >
      <h2>{title}</h2>
      {children}
      <Button
        onClick={onClose}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Close
      </Button>
    </Box>
  </Modal>
)

export default ModalComponent
