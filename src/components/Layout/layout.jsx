import { children } from "react";
import NavAside from "./LayComp/nav";
import NavTop from "./LayComp/navtop";

export function LayOut({ children }) {
  return (
    <>
      <div className="flex">
        <div className="fixed sm:hidden">
          <NavAside />
        </div>
        <div className="w-full ml-16 sm:m-0">
          <NavTop />
          <div className="">{children}</div>
        </div>
      </div>
      ;
    </>
  );
}
