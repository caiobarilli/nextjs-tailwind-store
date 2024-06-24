import { ModalProps } from '@/lib/types/modal'
import React, { useRef, useEffect } from 'react'

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  backdrop
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog) {
      if (isOpen) {
        dialog.showModal()
      } else {
        dialog.close()
      }
    }
  }, [isOpen])

  const hasBackdropOpen = backdrop && isOpen

  return (
    <>
      {hasBackdropOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 w-full h-full "
          onClick={onClose}
        />
      )}
      <dialog
        ref={dialogRef}
        onClose={onClose}
        className="rounded-lg p-6 bg-white shadow-xl w-96 z-40"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </dialog>
    </>
  )
}

export default Modal
