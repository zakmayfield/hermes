import { Button2 } from "./Button";

export const ButtonDemo = () => {
  const isDisabled = true;
  return (
    <div className="demo-col">
      <h3>Variants</h3>
      <div className="demo-row">
        <Button2 text="Default" />
        <Button2
          text="Ghost"
          options={{ variant: "ghost" }}
        />
        <Button2
          text="Primary"
          options={{ variant: "primary" }}
        />
        <Button2
          text="Warning"
          options={{ variant: "warning" }}
        />
        <Button2
          text="Caution"
          options={{ variant: "caution" }}
        />
      </div>

      <h3>Disabled</h3>
      <div className="demo-row">
        <Button2 options={{ variant: "ghost", isDisabled }} />
        <Button2 options={{ variant: "primary", isDisabled }} />
        <Button2 options={{ variant: "warning", isDisabled }} />
        <Button2 options={{ variant: "caution", isDisabled }} />
      </div>

      <h3>Size</h3>
      <div className="demo-row">
        <Button2
          text="Small"
          options={{ variant: "ghost", size: "sm" }}
        />
        <Button2
          text="Medium"
          options={{ variant: "primary", size: "md" }}
        />
        <Button2
          text="Large"
          options={{ variant: "warning", size: "lg" }}
        />
      </div>
    </div>
  );
};
