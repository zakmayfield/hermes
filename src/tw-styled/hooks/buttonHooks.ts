import { BtnVariants, IStyles } from "../Styles";

export const buttonHooks = {
  useVariantStyles: (
    variant: BtnVariants,
    buttonState: { isLoading: boolean; isDisabled: boolean }
  ) => {
    const getHoverStyle = (base: string, disabled: string) => {
      return buttonState.isDisabled || buttonState.isLoading ? disabled : base;
    };

    const getTextOpacity = (): IStyles["textOpacity"] => {
      return buttonState.isDisabled || buttonState.isLoading ? "light" : undefined;
    };

    const defaultStyles: IStyles = {
      padding: "sm",
      paddingX: "md",
      rounded: "md",
      textOpacity: getTextOpacity()
    };

    switch (variant) {
      case "primary":
        const primary_hover = getHoverStyle(
          "bg-green-700 hover:bg-opacity-80",
          "bg-green-700 bg-opacity-50"
        );

        const primary_styles: IStyles = {
          ...defaultStyles,
          bg: primary_hover
        };
        return primary_styles;

      case "warning":
        const warning_hover = getHoverStyle(
          "bg-red-700 hover:bg-opacity-80",
          "bg-red-700 bg-opacity-50"
        );
        const warning_styles: IStyles = {
          ...defaultStyles,
          bg: warning_hover
        };
        return warning_styles;

      default:
        const ghost_hover = getHoverStyle(
          "hover:bg-slate-700 hover:bg-opacity-30",
          "bg-slate-600 bg-opacity-30"
        );

        const ghost_styles: IStyles = {
          ...defaultStyles,
          bg: ghost_hover,
          border: "sm"
        };
        return ghost_styles;
    }
  }
};
