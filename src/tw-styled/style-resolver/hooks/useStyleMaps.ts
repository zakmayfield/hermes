import { useCallback, useMemo } from "react";

export const useStyleMaps = () => {
  const baseMap = {
    none: ""
  };

  const styleMapGroups = useMemo(() => {
    return {
      layout: {
        width: {
          ...baseMap,
          sm: "max-w-sm w-full",
          md: "max-w-lg w-full",
          lg: "max-w-2xl w-full",
          xl: "max-w-4xl w-full",
          "2xl": "max-w-6xl w-full",
          "3xl": "max-w-7xl w-full",
          full: "w-full"
        },
        height: {
          ...baseMap,
          sm: "min-h-[10rem]",
          md: "min-h-[15rem]",
          lg: "min-h-[20rem]",
          screen: "min-h-screen",
          full: "h-full"
        },
        maxHeight: {
          ...baseMap,
          sm: "max-h-[10rem]",
          md: "max-h-[15rem]",
          lg: "max-h-[20rem]"
        },
        border: {
          ...baseMap,
          sm: "border",
          md: "border-2",
          lg: "border-4"
        },
        rounded: {
          ...baseMap,
          sm: "rounded",
          md: "rounded-md",
          lg: "rounded-lg",
          xl: "rounded-3xl"
        },
        display: {
          ...baseMap,
          block: "block",
          inline: "inline",
          "inline-block": "inline-block",
          "inline-flex": "inline-flex",
          hidden: "hidden"
        },
        position: {
          ...baseMap,
          relative: "relative",
          absolute: "absolute",
          fixed: "fixed",
          sticky: "sticky",
          static: "static"
        }
      },

      padding: {
        padding: {
          ...baseMap,
          zero: "p-0",
          sm: "p-2",
          md: "p-4",
          lg: "p-6"
        },

        paddingX: {
          ...baseMap,
          zero: "px-0",
          sm: "px-2",
          md: "px-4",
          lg: "px-6"
        },

        paddingY: {
          ...baseMap,
          zero: "py-0",
          sm: "py-2",
          md: "py-4",
          lg: "py-6"
        },

        paddingTop: {
          ...baseMap,
          zero: "pt-0",
          sm: "pt-2",
          md: "pt-4",
          lg: "pt-6"
        },

        paddingBottom: {
          ...baseMap,
          zero: "pb-0",
          sm: "pb-2",
          md: "pb-4",
          lg: "pb-6"
        },

        paddingLeft: {
          ...baseMap,
          zero: "pl-0",
          sm: "pl-2",
          md: "pl-4",
          lg: "pl-6"
        },

        paddingRight: {
          ...baseMap,
          zero: "pr-0",
          sm: "pr-2",
          md: "pr-4",
          lg: "pr-6"
        }
      },

      margin: {
        margin: {
          ...baseMap,
          zero: "m-0",
          sm: "m-2",
          md: "m-4",
          lg: "m-6"
        },

        marginX: {
          ...baseMap,
          zero: "mx-0",
          sm: "mx-2",
          md: "mx-4",
          lg: "mx-6"
        },

        marginY: {
          ...baseMap,
          zero: "my-0",
          sm: "my-2",
          md: "my-4",
          lg: "my-6"
        },

        marginTop: {
          ...baseMap,
          zero: "mt-0",
          sm: "mt-2",
          md: "mt-4",
          lg: "mt-6"
        },

        marginBottom: {
          ...baseMap,
          zero: "mb-0",
          sm: "mb-2",
          md: "mb-4",
          lg: "mb-6"
        },

        marginLeft: {
          ...baseMap,
          zero: "ml-0",
          sm: "ml-2",
          md: "ml-4",
          lg: "ml-6"
        },

        marginRight: {
          ...baseMap,
          zero: "mr-0",
          sm: "mr-2",
          md: "mr-4",
          lg: "mr-6"
        }
      }
    };
  }, []);

  type StyleMapGroupKeys = keyof typeof styleMapGroups;

  const getAllStyleMaps = useCallback(() => {
    return {
      ...styleMapGroups.layout,
      ...styleMapGroups.padding,
      ...styleMapGroups.margin
    };
  }, []);

  const getStyleMapGroup = useCallback((group: StyleMapGroupKeys) => {
    return { ...styleMapGroups[group] };
  }, []);

  const getStyleMapGroups = useCallback((groups: StyleMapGroupKeys[]) => {
    return [...new Set(groups)].reduce((acc, group) => {
      return {
        ...acc,
        ...styleMapGroups[group]
      };
    }, {});
  }, []);

  const getStyleMapFromGroup = useCallback(
    <T extends StyleMapGroupKeys>(group: T, map: keyof (typeof styleMapGroups)[T]) => {
      const groupMap = styleMapGroups[group];
      return { ...groupMap[map] };
    },
    []
  );

  return {
    getAllStyleMaps,
    getStyleMapGroup,
    getStyleMapGroups,
    getStyleMapFromGroup
  };
};
