import { Btn } from "../ui";

type BtnDemoProps = {};

export const BtnDemo = (props: BtnDemoProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3>Variant</h3>
        <div className="p-6 space-x-3">
          <Btn variant="ghost" />
          <Btn variant="primary" />
          <Btn variant="warning" />
        </div>
      </div>

      <div className="space-y-3">
        <h3>Size</h3>
        <div className="p-6 space-y-3">
          <div className="space-x-3">
            <Btn style={{}} />
            <Btn
              style={{
                buttonStyles: { buttonWidth: "sm" }
              }}
            />
            <Btn
              style={{
                buttonStyles: { buttonWidth: "md" }
              }}
            />
            <Btn
              style={{
                buttonStyles: { buttonWidth: "lg" }
              }}
            />
          </div>

          <Btn style={{ buttonStyles: { width: "full" } }} />
        </div>
      </div>

      <div className="space-y-3">
        <h3>Disabled</h3>
        <div className="p-6 space-x-3">
          <Btn
            isDisabled={true}
            isLoading={true}
          />
          <Btn
            variant="primary"
            isDisabled={true}
            isLoading={true}
          />
          <Btn
            variant="warning"
            isDisabled={true}
            isLoading={true}
          />
        </div>
      </div>
    </div>
  );
};
