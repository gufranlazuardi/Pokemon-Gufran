import { ReactNode } from "react";
import { Toaster } from "./toaster";
import { Menubar } from "@radix-ui/react-menubar";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="w-full h-screen">
      <Menubar />
      <div className="container mx-auto py-4 px-8 flex flex-col grow overflow-auto">
        {children}
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
