import { ModalBase } from "./Modalset";

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      {children}
    </ModalBase>
  );
};
