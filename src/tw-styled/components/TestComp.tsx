type TestComp = {
  style?: {
    x?: string;
    y?: string;
    z?: string;
  };
};
export const TestComp = (props: TestComp) => {
  const { style } = props;
  const { x, y, z } = style || {};
  return (
    <div>
      <div>{x}</div>
      <div>{y}</div>
      <div>{z}</div>
    </div>
  );
};
