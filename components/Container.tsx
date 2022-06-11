import { classnames } from "lib/classnames";
import { PropsWithChildren } from "react";

export default function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={classnames(
        "w-full md:max-w-[700px] md:mx-auto px-2",
        className
      )}
    >
      {children}
    </div>
  );
}
