export const Modal = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-tertiary/50 flex items-center justify-center z-50">
      {children}
    </div>
  );
};
