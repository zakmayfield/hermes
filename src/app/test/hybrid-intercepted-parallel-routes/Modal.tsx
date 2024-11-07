"use client";

import { Button } from "@/ui/components";
import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";

export const Modal = () => {
  const router = useRouter();
  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 bg-secondary/60 flex items-center justify-center">
      <div className="w-sm bg-primary rounded-lg p-lg flex gap-[var(--space-md)]">
        <Button
          handleClick={() => router.back()}
          options={{ variant: "ghost" }}
          style={{ flexSize: "grow" }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export const DialogModal = () => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const onDismiss = () => router.back();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 bg-secondary/60 flex items-center justify-center">
      <dialog
        ref={dialogRef}
        onClose={onDismiss}
        className="p-lg rounded-lg bg-primary w-sm flex"
      >
        <Button
          options={{ variant: "ghost" }}
          style={{ flexSize: "grow" }}
          handleClick={onDismiss}
        >
          Close
        </Button>
      </dialog>
    </div>
  );
};
