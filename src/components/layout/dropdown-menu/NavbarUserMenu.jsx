import { Menu, Transition } from "@headlessui/react";
import Avatar from "react-avatar";

export const NavbarUserMenu = ({ items, userData }) => {
  return (
    <Menu as="div" className="hidden lg:inline-block h-9 w-9 z-50">
      <Menu.Button>
        <div className="bg-neutral-100  flex items-center justify-center  overflow-hidden rounded-md h-9 w-9 cursor-pointer group">
          <Avatar
            name={userData?.full_name}
            color="#F26800"
            className=" w-[36px] rounded-md h-[36px]"
            size="36"
          />
        </div>
      </Menu.Button>

      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        <Menu.Items
          as="div"
          className="absolute top-2 right-0 w-30 origin-top-right  overflow-hidden rounded-md bg-neutral-100  shadow-lg"
        >
          <div className="w-[300px] px-4 py-4 flex items-center gap-3 border-b-2 border-neutral-200">
            <Avatar
              name={userData?.full_name}
              color="#F26800"
              className=" w-[36px] rounded-md h-[36px]"
              size="36"
            />

            <section>
              <h1 className="text-sm text-neutral-900 dark:text-neubg-neutral-100">
                {userData?.full_name}
              </h1>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">{userData?.email}</p>
            </section>
          </div>

          {items.map(({ icon, name, onClick }, index) => (
            <Menu.Item
              key={index}
              as="div"
              className={
                "flex gap-3 items-center px-4 py-3 cursor-pointer hover:bg-neutral-200 transition-all duration-300 ease-in-out"
              }
              onClick={onClick}
            >
              {icon}
              <button type="button">
                <h1 className="text-[#171717] font-bold group:hover:text-neutral-100 text-[12px] text-center">
                  {name}
                </h1>
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
