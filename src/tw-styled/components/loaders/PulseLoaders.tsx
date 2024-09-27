import { styleHooks, useClassNames } from "@/tw-styled/hooks";
import { IStyles, Sizes, Themes } from "@/tw-styled/Styles";
import { merge } from "@/tw-styled/utils/class-merge";

const BaseLoader = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={merge(`p-3 px-6 bg-slate-100 rounded-md ${className}`)}>
      {children}
    </div>
  );
};

const Sm = ({ style }: PulseLoaderProps) => {
  const styles: PulseLoaderProps["style"] = {
    wrapper: {
      pulseLoaderWidth: "sm",
      ...style?.wrapper
    }
  };

  const classes = useClassNames({ ...styles });
  return (
    <BaseLoader className={classes.wrapper}>
      <div className="flex gap-3">
        <div className="p-3 bg-slate-200 rounded-[3rem] animate-pulse"></div>
        <div className="p-3 bg-slate-200 rounded-[3rem] w-full animate-pulse"></div>
      </div>
    </BaseLoader>
  );
};
const Md = ({ style }: PulseLoaderProps) => {
  const styles: PulseLoaderProps["style"] = {
    wrapper: {
      pulseLoaderWidth: "md",
      ...style?.wrapper
    }
  };

  const classes = useClassNames({ ...styles });

  return (
    <BaseLoader className={classes.wrapper}>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="p-3 bg-slate-200 rounded-[3rem] animate-pulse w-1/3"></div>
          <div className="p-3 bg-slate-200 rounded-[3rem] animate-pulse w-full"></div>
        </div>

        <div className="flex gap-3">
          <div className="p-6 bg-slate-200 rounded-[3rem] animate-pulse w-2/3"></div>
          <div className="p-6 bg-slate-200 rounded-[3rem] animate-pulse w-1/3"></div>
        </div>
      </div>
    </BaseLoader>
  );
};
const Lg = ({ style }: PulseLoaderProps) => {
  const styles: PulseLoaderProps["style"] = {
    wrapper: {
      pulseLoaderWidth: "lg",
      ...style?.wrapper
    }
  };

  const classes = useClassNames({ ...styles });

  return (
    <BaseLoader className={classes.wrapper}>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="p-6 bg-slate-200 rounded-[3rem] animate-pulse w-1/3"></div>
          <div className="p-6 bg-slate-200 rounded-[3rem] animate-pulse w-full"></div>
        </div>

        <div className="flex gap-3">
          <div className="p-24 bg-slate-200 rounded-[3rem] animate-pulse w-4/5"></div>

          <div className="flex flex-col gap-3 w-1/5">
            <div className="p-6 bg-slate-200 rounded-[3rem] animate-pulse w-full"></div>
            <div className="bg-slate-200 rounded-[3rem] animate-pulse w-full h-full"></div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="p-12 bg-slate-200 rounded-[3rem] animate-pulse w-full"></div>
          <div className="p-12 bg-slate-200 rounded-[3rem] animate-pulse w-full"></div>
        </div>
      </div>
    </BaseLoader>
  );
};

export type PulseLoaderProps = {
  style?: {
    wrapper?: {
      size?: Sizes;
      theme?: Themes;
    } & IStyles;
  };
};

export const PulseLoader = (props: PulseLoaderProps) => {
  const { style } = props;

  const defaultStyles = styleHooks.useDefaultPulseLoader({});

  const styles: PulseLoaderProps["style"] = {
    wrapper: {
      ...defaultStyles,
      ...style?.wrapper
    }
  };

  const classes = useClassNames({ ...styles });

  switch (style?.wrapper?.size) {
    case "md":
      return <Md {...props} />;
    case "lg":
      return <Lg {...props} />;
    default:
      return <Sm {...props} />;
  }
};

export const usePulseLoader = (props: PulseLoaderProps) => {
  const Loader = () => <PulseLoader {...props} />;
  return { PulseLoader: Loader };
};
