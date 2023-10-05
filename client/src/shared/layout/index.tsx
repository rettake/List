import { FunctionComponent, PropsWithChildren } from "react";
import Header from "../header";
import Footer from "../footer";
import Messages from "../messages";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <main className="grow">
        {children}
        <Messages />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
