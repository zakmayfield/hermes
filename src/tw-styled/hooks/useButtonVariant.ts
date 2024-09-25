import { BtnVariants, IStyles } from "../Styles";

export const useButtonVariant = (variant: BtnVariants) => {
  let styles: IStyles = {
    padding: "sm",
    paddingX: "md",
    rounded: "md"
  };

  switch (variant) {
    case "primary":
      const primary_styles: IStyles = {
        bg: "bg-green-700 hover:bg-opacity-90"
      };
      styles = { ...styles, ...primary_styles };
      break;

    case "warning":
      const warning_styles: IStyles = {
        bg: "bg-red-700 hover:bg-opacity-90"
      };
      styles = { ...styles, ...warning_styles };
      break;

    default:
      const ghost_styles: IStyles = {
        bg: "hover:bg-slate-900 hover:bg-opacity-70",
        border: "sm"
      };
      styles = { ...styles, ...ghost_styles };
      break;
  }

  return { variantStyles: styles };
};
