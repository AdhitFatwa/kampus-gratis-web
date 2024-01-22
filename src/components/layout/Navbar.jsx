import { Fragment, Suspense } from "react";
import { TopNav } from "./TopNav";
import { useLocation } from "react-router-dom";
import { BottomNav } from "./BottomNav";

export const Navbar = (props) => {
  const { pathname } = useLocation();

  const includesPath = props?.bottomNavRules?.some((path) => pathname.includes(path));

  return (
    <Fragment>
      <header className="bg-white sticky w-full top-0 z-50 py-[14px] md:py-[16px] lg:py-[18px] px-6 md:px-14 lg:px-16 ">
        <div className="max-w-[1440px] mx-auto flex justify-between  transition-all ease-in-out duration-300 flex-col">
          <Suspense fallback={"loading..."}>
            <TopNav {...props} />
          </Suspense>
        </div>
      </header>
      {includesPath && (
        <Suspense fallback={"loading..."}>
          <BottomNav {...props} />
        </Suspense>
      )}
    </Fragment>
  );
};
