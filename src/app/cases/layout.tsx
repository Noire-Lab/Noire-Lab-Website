import { Fragment } from "react";
import { LoadingModal } from "../components.client";

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
