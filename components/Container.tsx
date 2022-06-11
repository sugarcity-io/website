import { classnames } from "lib/classnames";
import { PropsWithChildren } from "react";

export default function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <div className={classnames("container", className)}>{children}</div>;
}
