import React, { useState } from "react";
import { Btn } from "../ui";

type StylesDemoProps = {};

export const StylesDemo = (props: StylesDemoProps) => {
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
          variant="ghost"
          isDisabled={isDisabled}
        />
        <Btn
          variant="primary"
          isDisabled={isDisabled}
        />
        <Btn
          variant="warning"
          isDisabled={isDisabled}
        />
        <Btn
          variant="none"
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
};
