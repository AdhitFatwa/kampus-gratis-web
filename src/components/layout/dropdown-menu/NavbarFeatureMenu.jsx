import { Menu, Transition } from "@headlessui/react";
import { TbCategory2 } from "react-icons/tb";
import { Link } from "react-router-dom";

export const NavbarFeatureMenu = ({ features }) => {
  return (
    <Menu as="div" className={"relative hidden lg:inline-block text-left z-50 left-0"}>
      <Menu.Button as="button" aria-label="feature-menu" name="feature-menu" id="feature-menu">
        <div className="bg-neutral-100 w-9 h-9 flex items-center justify-center rounded-md shadow-sm">
          <TbCategory2 className="text-[20px] text-neutral-600 hover:text-version3-500 transition-colors ease-in-out duration-300" />
        </div>
      </Menu.Button>

      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        <Menu.Items className="absolute right-0 top-2 origin-top-right   bg-white   shadow-md   rounded-md overflow-hidden">
          <div className="bg-[#FEEAA2] h-[108px] w-[240px] md:w-[270px] flex gap-1 flex-col items-center justify-center">
            <h1 className="text-neutral-800 font-bold text-xl">Fitur</h1>
            <p className="text-white bg-[#FAB317] text-sm px-2.5 py-1.5 rounded-lg shadow-sm">
              Total 4 Fitur
            </p>
          </div>
          <div className="grid grid-cols-2 ">
            {features.map((feature, index) => {
              return (
                <Link to={feature.link} className="bg-neutral-100 " key={index}>
                  <Menu.Item
                    as="div"
                    aria-label="User"
                    className={
                      "flex flex-col gap-2 hover:bg-neutral-200 items-center p-4 cursor-pointer bg-neutral-100 h-full transition-all duration-300 ease-in-out"
                    }
                  >
                    <img src={feature.icon} alt={feature.icon} />
                    <h1 className="text-neutral-900 text-xs text-center">{feature.name}</h1>
                  </Menu.Item>
                </Link>
              );
            })}
          </div>
          <Link to={"#"}>
            <div className="bg-neutral-200 hover:bg-neutral-300 cursor-pointer transition-colors ease-in-out duration-300 w-full flex items-center group justify-center py-4">
              <h1 className="text-xs text-neutral-500 group-hover:text-neutral-900">Lihat Semua</h1>
            </div>
          </Link>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
