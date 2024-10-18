import { Button } from "./Button";

export const ButtonDemo = () => {
  const isDisabled = true;
  return (
    <div className="demo-col">
      <h3>Variants</h3>
      <div className="demo-row">
        <Button text="Default" />
        <Button
          text="Ghost"
          options={{ variant: "ghost" }}
        />
        <Button
          text="Primary"
          options={{ variant: "primary" }}
        />
        <Button
          text="Warning"
          options={{ variant: "warning" }}
        />
        <Button
          text="Caution"
          options={{ variant: "caution" }}
        />
      </div>

      <h3>Disabled</h3>
      <div className="demo-row">
        <Button options={{ variant: "ghost", isDisabled }} />
        <Button options={{ variant: "primary", isDisabled }} />
        <Button options={{ variant: "warning", isDisabled }} />
        <Button options={{ variant: "caution", isDisabled }} />
      </div>

      <h3>Size</h3>
      <div className="demo-row">
        <Button
          text="Small"
          options={{ variant: "ghost", size: "sm" }}
        />
        <Button
          text="Medium"
          options={{ variant: "primary", size: "md" }}
        />
        <Button
          text="Large"
          options={{ variant: "warning", size: "lg" }}
        />
      </div>
    </div>
  );
};
