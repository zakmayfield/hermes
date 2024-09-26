import { Wrapper } from "@/tw-styled/components";

export const Footer = () => {
  return (
    <footer className="p-12 bg-slate-900">
      <Wrapper
        style={{
          childrenWrapper: { flex: "row", flexPosition: "center-center" }
        }}
      >
        footer
      </Wrapper>
    </footer>
  );
};
