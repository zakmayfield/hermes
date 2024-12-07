import { Icon } from "@/ui";
import React from "react";

export const useDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return {
    Dialog,
    isOpen,
    methods: {
      handleOpen: () => setIsOpen(true),
      handleClose: () => setIsOpen(false)
    }
  };
};

type DialogState = {
  isOpen?: boolean;
  handleClose?: () => void;
};

type DialogOptions = {
  place?: "center-center" | "top-center";
  closeOnClickOverlay?: boolean;
};

export function Dialog({
  children,
  state,
  options,
  className
}: {
  children: React.ReactNode;
  state?: DialogState;
  options?: DialogOptions;
  className?: string;
}) {
  const { isOpen = false, handleClose = () => {} } = state || {};
  const { place = "center-center", closeOnClickOverlay = true } = options || {};

  return (
    <Overlay
      isOpen={isOpen}
      place={place}
      closeOnClickOverlay={closeOnClickOverlay}
      handleClose={handleClose}
    >
      <dialog
        open={isOpen}
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-theme-primary p-lg rounded-md min-w-sm max-w-md shadow-lg shadow-theme-primary my-2xl relative
          ${className || ""}
        `}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 hover:bg-theme-secondary/25 py-[.5rem] px-[.6rem] opacity-50 hover:opacity-100 focus:opacity-100"
        >
          <Icon
            name="x"
            style={{
              fontSize: "xl",
              className: ""
            }}
          />
        </button>

        {children}
      </dialog>
    </Overlay>
  );
}

function Overlay({
  children,
  isOpen,
  place,
  closeOnClickOverlay,
  handleClose
}: {
  children: React.ReactNode;
  isOpen: boolean;
  place: DialogOptions["place"];
  closeOnClickOverlay: boolean;
  handleClose: () => void;
}) {
  return (
    <div
      onClick={(e) => (closeOnClickOverlay ? handleClose() : null)}
      className={`
        ${!isOpen && "hidden"}
        bg-theme-tertiary/60 fixed top-0 left-0 w-full h-screen z-[100]
        flex
        ${
          place === "center-center"
            ? "justify-center items-center"
            : "justify-center items-start"
        }
      `}
    >
      {children}
    </div>
  );
}
