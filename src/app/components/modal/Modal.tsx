import { ModalBase } from "./Modalset";

export const Modal = ({
  isOpen,
  onClose,
  children,
  isDel,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isDel?: boolean;
}) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} isDel={isDel}>
      {children}
    </ModalBase>
  );
};
