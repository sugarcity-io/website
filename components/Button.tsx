import { classnames } from "lib/classnames";
import { PropsWithChildren } from "react";

interface ButtonProps {
  accent?: boolean;
  large?: boolean;
  className?: string;
}

function createButtonClass(props: ButtonProps): string {
  return classnames(
    "font-bold",
    "py-2 px-4 rounded-md",
    props.large && "md:text-xl md:py-3 md:px-5 md:rounded-lg",
    props.accent
      ? "bg-[#40b93c] hover:bg-green-600 text-white drop-shadow-md"
      : "bg-white hover:bg-gray-100 drop-shadow-lg",
    props.className
  );
}

export default function Button({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return <button className={createButtonClass(props)}>{children}</button>;
}

interface ButtonExternalLinkProps {
  accent?: boolean;
  className?: string;
}

export function ButtonExternalLink({
  children,
  ...rest
}: PropsWithChildren<ButtonExternalLinkProps>) {
  return (
    <a {...rest} className={classnames(createButtonClass(rest))}>
      {children}
    </a>
  );
}
