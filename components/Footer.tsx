import Container from "components/Container";
import { PropsWithChildren } from "react";

function FooterLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a
      className="border-0 text-black font-normal"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <Container className="my-16">
      <hr />
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="text-gray-500">Maybe some text about something</div>
        <div className="flex gap-4 flex-wrap">
          <FooterLink href="https://github.com/sugarcity-io">Github</FooterLink>
          <FooterLink href="https://github.com/sugarcity-io/website">
            Source
          </FooterLink>
        </div>
      </div>
    </Container>
  );
}
