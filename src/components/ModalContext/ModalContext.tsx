import { createContext, useState } from 'react'

export const ModalContext = createContext({
  modal: false,
  open: () => {},
  close: () => {}
})

export const ModalState = ({ children }: any) => {
  const [modal, setModal] = useState(false)
  const open = () => setModal(true)
  const close = () => setModal(false)

  return (
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}
