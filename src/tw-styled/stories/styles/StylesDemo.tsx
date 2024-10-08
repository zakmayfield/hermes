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
          options={{
            variant: "ghost"
          }}
          isDisabled={isDisabled}
        />
        <Btn
          options={{
            variant: "primary"
          }}
          isDisabled={isDisabled}
        />
        <Btn
          options={{
            variant: "warning"
          }}
          isDisabled={isDisabled}
        />
        <Btn
          options={{
            variant: "none"
          }}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
};
