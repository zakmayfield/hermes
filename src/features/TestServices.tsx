"use client";

import { useDialog } from "@/shared/components";

export const TestServices = () => {
  const {
    Dialog: DialogOne,
    isOpen: isDialogOneOpen,
    methods: { handleClose: closeDialogOne, handleOpen: openDialogOne }
  } = useDialog();

  return (
    <div>
      <button
        onClick={openDialogOne}
        className="btn-ghost"
      >
        Open Dialog One
      </button>

      <DialogOne
        state={{ isOpen: isDialogOneOpen, handleClose: closeDialogOne }}
        options={{ place: "top-center" }}
        className="flex flex-col gap-lg"
      >
        <div className="flex flex-col gap-xs">
          <h2>Dialog One Title </h2>

          <div>
            <p>Dalog Content And Some Other Words To Make It Long</p>
          </div>
        </div>

        <div className="flex items-center gap-md">
          <button className="btn-green flex-1">Confirm</button>
          <button
            onClick={closeDialogOne}
            className="btn-red"
          >
            Close
          </button>
        </div>
      </DialogOne>
    </div>
  );
};
