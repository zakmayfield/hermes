import { useCallback } from "react";
import { IStyles, StyleObj } from "../Styles";
import { merge } from "../utils/class-merge";
import { useClassHandlers } from "../utils/class-handlers";

export const useClassNames = (style: StyleObj) => {
  const classHandlers = useClassHandlers();

  return useCallback(
    (props: StyleObj) => {
      const result: Record<string, string> = {};

      // get key from props: props: { wrapper: {...}, content: {...} }
      for (const propsKey in props) {
        if (Object.prototype.hasOwnProperty.call(props, propsKey)) {
          const classNames: string[] = [];
          const styleObject = props[propsKey];

          // get key from style object: { flex: "", width: "" }
          for (const key in styleObject) {
            const styleKey = key as keyof IStyles;
            const mapKey = `${key}Map`;

            if (Object.prototype.hasOwnProperty.call(styleObject, styleKey)) {
              const handler = classHandlers[styleKey];

              if (handler) {
                classNames.push(handler(styleObject, mapKey, styleKey));
              }
            }
          }

          // each iteration of propKeys add key to result
          result[propsKey] = "";
          const joinedClassNames = classNames.join(" ");
          result[propsKey] = merge(joinedClassNames);

          // remove key if no classNames were created
          if (result[propsKey].length === 0) {
            delete result[propsKey];
          }
        }
      }

      return result;
    },
    [style]
  )(style);
};
