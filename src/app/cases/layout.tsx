import { Fragment } from "react";
import { IntersectionObserverWrapper } from "../components.client";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
