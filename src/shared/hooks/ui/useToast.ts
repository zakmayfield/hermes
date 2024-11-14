import { toast } from "react-toastify";

type ToastVariants = "success" | "error" | "warn" | "info";

export const useToast = () => {
  return {
    toast: (message: string, variant?: ToastVariants) => {
      const defaultVariant = !variant ? "success" : variant;
      return toast[defaultVariant](message);
    }
  };
};
