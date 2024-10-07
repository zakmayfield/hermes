import { Btn } from "../ui";

export const BtnDemo = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3>Variant</h3>
        <div className="p-6 space-x-3">
          <Btn
            initialButtonProps={{
              variant: "ghost"
            }}
          />
          <Btn
            initialButtonProps={{
              variant: "primary"
            }}
          />
          <Btn
            initialButtonProps={{
              variant: "warning"
            }}
          />
        </div>
      </div>

      <div className="space-y-3">
        <h3>Size</h3>
        <div className="p-6 space-y-3">
          <div className="space-x-3">
            <Btn style={{}} />
            <Btn
              initialButtonProps={{
                width: "sm"
              }}
            />
            <Btn
              initialButtonProps={{
                width: "md"
              }}
            />
            <Btn
              initialButtonProps={{
                width: "lg"
              }}
            />
          </div>

          <Btn style={{ buttonStyles: { width: "full" } }} />
        </div>
      </div>

      <div className="space-y-3">
        <h3>Disabled</h3>
        <div className="p-6 space-x-3">
          <Btn isDisabled={true} />
          <Btn
            initialButtonProps={{
              variant: "primary"
            }}
            isDisabled={true}
          />
          <Btn
            initialButtonProps={{
              variant: "warning"
            }}
            isDisabled={true}
          />
        </div>
      </div>
    </div>
  );
};
