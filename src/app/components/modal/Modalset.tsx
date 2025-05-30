"use client";

import React from "react";
import ReactModal, { Styles } from "react-modal";

interface ModalArg {
  isOpen: boolean;
  onClose: () => void;
  label?: string;
  children: React.ReactNode;
}

const customStyles: Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: " rgba(0, 0, 0, 0.8)",
    zIndex: 1200,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 20,
    // width: "calc(100vw - 48px)",
    // // maxHeight: "calc(100vh - 24px)",
    // height: "520px",
    backgroundColor: "var(--authbgc)",
    border: "transparent",
  },
};

export const ModalBase = ({
  isOpen,
  onClose,
  label = "",
  children,
}: ModalArg) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={label}
    >
      <div className="h-[520px] w-[calc(100vw-48px)] md:h-[650px] md:w-[720px] ">
        {children}
      </div>
    </ReactModal>
  );
};

ReactModal.setAppElement("#root");
