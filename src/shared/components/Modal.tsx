import React from "react";

export const Modal = ({
  children,
  handleCancelModal
}: {
  children?: React.ReactNode;
  handleCancelModal?: (e: React.MouseEvent) => void;
}) => {
  return (
    <div
      onClick={handleCancelModal}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-theme-tertiary/50 flex items-center justify-center z-50`}
    >
      {children}
    </div>
  );
};
