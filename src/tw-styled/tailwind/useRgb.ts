export const rgb = (variable: string, opacity?: number) =>
  opacity ? `rgb(var(${variable}) / ${opacity})` : `rgb(var(${variable}))`;
