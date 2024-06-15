import { children } from "react";
import NavAside from "./LayComp/nav";
import NavTop from "./LayComp/navtop";

export function LayOut({ children }) {
  return (
    <>
      <div className="flex">
        <div className="sm:hidden">
          <NavAside />
        </div>
        <div className="w-full">
          <NavTop />
          <div className="">{children}</div>
        </div>
      </div>
      ;
    </>
  );
}
