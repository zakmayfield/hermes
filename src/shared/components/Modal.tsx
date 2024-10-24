import { Children } from "@/tw-styled/types";

export const Modal = ({ children }: { children?: Children }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-tertiary/50 flex items-center justify-center">
      {children}
    </div>
  );
};
