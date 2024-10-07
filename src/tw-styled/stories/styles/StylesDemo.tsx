import React, { useState } from "react";
import { Btn } from "@/tw-styled/ui";

export const StylesDemo = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="demo-col">
      <div className="demo bg-primary hover:element-hovered" />

      <div className="demo-row">
        <button
          className="max-w-xs w-full"
          onClick={() => setIsDisabled(!isDisabled)}
        >
          {isDisabled ? "Enable" : "Disable"}
        </button>

        <Btn
          initialButtonProps={{
            variant: "ghost"
          }}
          isDisabled={isDisabled}
        />
        <Btn
          initialButtonProps={{
            variant: "primary"
          }}
          isDisabled={isDisabled}
        />
        <Btn
          initialButtonProps={{
            variant: "warning"
          }}
          isDisabled={isDisabled}
        />
        <Btn
          initialButtonProps={{
            variant: "none"
          }}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
};
