import { useState } from "react";
import { Btn } from "../ui";

type StylesDemoProps = {};

export const StylesDemo = (props: StylesDemoProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <div className="border rounded space-y-3 p-6">
        <div className="space-x-3">
          <button onClick={() => setIsDisabled(!isDisabled)}>
            {isDisabled ? "enable" : "disable"}
          </button>
        </div>

        <div className="space-x-3">
          <Btn
            variant="none"
            isDisabled={isDisabled}
            style={{
              buttonStyles: {
                bgColor: "tertiary"
              }
            }}
          />
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
        </div>
      </div>
    </div>
  );
};
