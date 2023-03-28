import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps): JSX.Element => {
  const [modalContainer, setModalContainer] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    setModalContainer(document.createElement('div'))
    const modalRoot = document.getElementById('modal-root')
    if (modalContainer) {
      modalRoot?.appendChild(modalContainer || <div></div>)
    }
    return () => {
      if (modalContainer) modalRoot?.removeChild(modalContainer)
    }
  }, [])
  return isOpen && modalContainer ? (
    createPortal(
      <div>
        <div className='overlay' onClick={onClose}></div>
        <h1 className='text-8xl'></h1>
        <div className='modal'>{children}</div>
      </div>,
      modalContainer!,
    )
  ) : (
    <></>
  )
}

export default Modal
