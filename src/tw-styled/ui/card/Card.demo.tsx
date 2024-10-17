import { Card } from "./Card";

type CardDemoProps = {};

export const CardDemo = (props: CardDemoProps) => {
  return (
    <div className="demo">
      <Card
        style={{
          wrapper: {
            border: "sm",
            borderRadius: "lg",
            padding: "sm"
          }
        }}
      />
    </div>
  );
};
