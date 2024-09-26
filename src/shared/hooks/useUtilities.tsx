"use client";
import { RefAttributes, useState } from "react";
import { toast } from "react-toastify";
import { ITooltip, TooltipRefProps, Tooltip } from "react-tooltip";
import { FaChevronDown } from "react-icons/fa";
import { Btn, Text, Wrapper } from "@/tw-styled/components";

type ToastVariants = "success" | "error" | "warn" | "info";
type TooltipProps = ITooltip & RefAttributes<TooltipRefProps>;

type AccordionProps = {
  data: AccordionItem[];
};
type AccordionItem = {
  id: string;
  title: string;
  body: {
    id: string;
    child: React.ReactNode;
  }[];
};

export const utilityHooks = {
  useToast: () => {
    const notify = (message: string, variant?: ToastVariants) => {
      const defaultVariant = !variant ? "success" : variant;
      return toast[defaultVariant](message);
    };

    return {
      notify
    };
  },

  useTooltip: (props: TooltipProps) => {
    const tt = () => <Tooltip {...props} />;

    return {
      Tooltip: tt
    };
  },

  useAccordion: (props: AccordionProps) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const is_expanded = (id: string) => id === expandedId;
    const handle_expand = (id: string) =>
      is_expanded(id) ? setExpandedId(null) : setExpandedId(id);

    const { data } = props;

    const AccordionItem = (item: AccordionItem) => {
      const { id, title, body } = item;

      return (
        <Wrapper style={{ parentWrapper: { rounded: "lg", bg: "bg-slate-800" } }}>
          <Wrapper
            style={{ childrenWrapper: { flex: "row", paddingX: "lg", paddingY: "md" } }}
          >
            <Text>{title}</Text>
            <Btn
              Icon={FaChevronDown}
              handleClick={() => handle_expand(id)}
              style={{
                button: {
                  buttonHeight: "sm",
                  className: (is_expanded(id) && "rotate-180") || ""
                }
              }}
            />
          </Wrapper>

          <Wrapper
            style={{
              parentWrapper: { className: (!is_expanded(id) && "hidden") || "" },
              childrenWrapper: { padding: "lg", gap: "lg" }
            }}
          >
            {body.map((item) => (
              <Wrapper
                key={`${item.id}`}
                style={{ parentWrapper: { padding: "sm" } }}
              >
                {item.child}
              </Wrapper>
            ))}
          </Wrapper>
        </Wrapper>
      );
    };

    const Accordion = () => (
      <Wrapper style={{ childrenWrapper: { padding: "lg", flex: "col" } }}>
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
          />
        ))}
      </Wrapper>
    );

    return { Accordion, handle_expand, is_expanded };
  }
};
