export interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  backdrop?: boolean
  onClose: () => void
}
