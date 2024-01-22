import { useState } from "react";
import Avatar from "react-avatar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export const HamburgerIcon = () => {
  const [getMobileNavbar, setMobileNavbar] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        name="mobile-menu"
        id="mobile-menu"
        aria-label="mobile-menu"
        className="flex flex-col bg-neutral-100  h-9 w-9  p-2 rounded-md justify-center items-center group lg:hidden"
        onClick={() => setMobileNavbar(!getMobileNavbar)}
      >
        <AiOutlineMenu className="text-xl " />
      </button>
    </div>
  );
};

export const NavbarMobileMenu = ({ mobileitems, userData, button, logo }) => {
  const [getMobileNavbar, setMobileNavbar] = useState(false);

  return (
    <div
      className={`${
        getMobileNavbar ? "top-0" : "-top-[100vh]"
      } px-4 py-4 absolute left-0 lg:hidden right-0 bg-white transition-all ease-in-out duration-300 shadow-md border-b-2 border-neutral-300`}
    >
      <section className="w-full flex justify-between pr-4 py-1.5 mb-4 pl-1">
        <img
          src={logo}
          alt="platform-logo"
          loading="eager"
          width={40}
          height={45}
          className="w-auto h-6 md:h-8 lg:h-9"
        />
        <AiOutlineClose
          className="text-neutral-base font-bold text-xl cursor-pointer"
          onClick={() => setMobileNavbar(!getMobileNavbar)}
        />
      </section>
      <section className="w-full pb-4 mb-4 px-1  flex items-center gap-3 border-b-[1px] border-neutral-200">
        <Avatar
          name={userData?.full_name}
          color="#F26800"
          className=" w-[36px] rounded-md h-[36px]"
          size="36"
        />

        <section>
          <h1 className="text-sm text-neutral-900 ">{userData?.full_name}</h1>
          <p className="text-xs text-neutral-500 ">{userData?.email}</p>
        </section>
      </section>

      <section className="border-b-[1px] border-neutral-200 pb-4 flex flex-col gap-y-4">
        {mobileitems.map((item, index) => {
          return (
            <Link to={item.href} key={index} className="flex items-center gap-2">
              {item.icon}
              <h1 className="font-bold text-sm text-neutral-700">{item.name}</h1>
            </Link>
          );
        })}
      </section>
      <section className="flex gap-2 py-4 px-1">{button}</section>
    </div>
  );
};
