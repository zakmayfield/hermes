import { Btn } from "@/tw-styled/ui";

export const BtnDemo = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3>Variant</h3>
        <div className="p-6 space-x-3">
          <Btn
            options={{
              variant: "ghost"
            }}
          />
          <Btn
            options={{
              variant: "primary"
            }}
          />
          <Btn
            options={{
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
              options={{
                width: "sm"
              }}
            />
            <Btn
              options={{
                width: "md"
              }}
            />
            <Btn
              options={{
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
            options={{
              variant: "primary"
            }}
            isDisabled={true}
          />
          <Btn
            options={{
              variant: "warning"
            }}
            isDisabled={true}
          />
        </div>
      </div>
    </div>
  );
};
