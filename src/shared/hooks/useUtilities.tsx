"use client";
import { RefAttributes, useState } from "react";
import { toast } from "react-toastify";
import { ITooltip, TooltipRefProps, Tooltip } from "react-tooltip";
import { FaChevronDown } from "react-icons/fa";
import { Btn } from "@/tw-styled/components";

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
        <div>
          <div>
            <p>{title}</p>
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
          </div>

          <div>
            {body.map((item) => (
              <div key={item.id}>{item.child}</div>
            ))}
          </div>
        </div>
      );
    };

    const Accordion = () => (
      <div>
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    );

    return { Accordion, handle_expand, is_expanded };
  }
};
