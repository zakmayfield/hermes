"use client";
import { RefAttributes, useState } from "react";
import { toast } from "react-toastify";
import { ITooltip, TooltipRefProps, Tooltip } from "react-tooltip";
import { FaChevronDown } from "react-icons/fa";
import { ContentWrapper, Flex, Text } from "../components/containers";
import { Btn } from "../components/buttons";

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
        <ContentWrapper
          className="bg-slate-800"
          style={{ rounded: "lg" }}
        >
          <Flex className="justify-between px-6 py-3">
            <Text>{title}</Text>
            <Btn
              handleClick={() => handle_expand(id)}
              style={{ Icon: FaChevronDown, height: "sm" }}
              classList={{
                buttonClassName: (is_expanded(id) && "rotate-180") || ""
              }}
            />
          </Flex>

          <Flex
            style={{ dir: "col", padding: "lg" }}
            className={`${(!is_expanded(id) && "hidden") || ""}`}
          >
            {body.map((item) => (
              <ContentWrapper
                key={`${item.id}`}
                style={{ width: "full", padding: "sm" }}
              >
                {item.child}
              </ContentWrapper>
            ))}
          </Flex>
        </ContentWrapper>
      );
    };

    const Accordion = () => (
      <ContentWrapper
        className="border"
        style={{ padding: "lg", flex: "col" }}
      >
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
          />
        ))}
      </ContentWrapper>
    );

    return { Accordion, handle_expand, is_expanded };
  }
};
