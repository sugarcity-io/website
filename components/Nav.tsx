import { PropsWithChildren } from "react";
import Container from "./Container";
import Link from "next/link";

function NavLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Link href={href} passHref>
      <a className="px-4 py-2 border-0">{children}</a>
    </Link>
  );
}

export default function Nav() {
  return (
    <nav>
      <Container className="flex justify-between items-center wrap gap-x-4 gap-y-2 md:mt-8 mb-8">
        <div>Logo</div>
        <div className="flex wrap gap-x-4">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/about"}>About</NavLink>
        </div>
      </Container>
    </nav>
  );
}
