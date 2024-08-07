import React, { ReactHTML, useMemo } from "react";
import "./style.scss";

type TypographyProps<T extends keyof ReactHTML> = {
  component?: T;
  className?: string;
} & JSX.IntrinsicElements[T];

const Typography = <T extends keyof ReactHTML>({
  children,
  className,
  component,
  ...rest
}: React.PropsWithChildren<TypographyProps<T>>) => {
  const htmlTag = component || "p";
  return (
    <>
      {React.createElement(
        htmlTag,
        {
          className: `${className || ""} typography typography-${htmlTag}`,
          ...rest,
        },
        children
      )}
    </>
  );
};

export default Typography;
