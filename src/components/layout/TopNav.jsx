import { Link } from "react-router-dom";
import { NavbarFeatureMenu } from "./dropdown-menu/NavbarFeatureMenu";
import { HamburgerIcon, NavbarMobileMenu } from "./dropdown-menu/Hamburger-Icon";
import { NavbarUserMenu } from "./dropdown-menu/NavbarUserMenu";
import { useSession } from "../../utils/auth/auth";

export const TopNav = ({
  logo,
  logoStyle,
  button,
  userData,
  topNavLinks,
  mobileMenuItems,
  ...props
}) => {
  const { isLogin, username } = useSession();

  return (
    <header className="flex w-full justify-between bg-white">
      <div className="flex gap-2 md:gap-4 items-center">
        <Link to={"/"} className="flex items-center">
          <img
            src={logo}
            alt="platform-logo"
            loading="eager"
            width={40}
            height={45}
            className={`${logoStyle} w-auto h-2 md:h-8 lg:h-9`}
          />
        </Link>
      </div>

      <div className="flex gap-2 md:gap-3 lg:gap-4 items-center ">
        {topNavLinks?.length !== 0 ? (
          <div className="gap-4 hidden lg:flex mr-2  w-full">
            {topNavLinks?.map((item) => {
              return (
                <Link to={item.href} key={item.href}>
                  <p className="text-sm text-neutral-900  hover:text-version3-500 ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-4">
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
        ) : null}
        <NavbarFeatureMenu features={props.features} />

        {isLogin ? (
          <>
            <NavbarUserMenu
              userData={{
                full_name: username,
                email: `${username}@gmail.com`,
              }}
              {...props}
            />
          </>
        ) : (
          <section className="lg:inline-block hidden">{button}</section>
        )}

        <HamburgerIcon />
      </div>
      <NavbarMobileMenu
        mobileitems={mobileMenuItems}
        userData={{
          full_name: userData?.full_name,
          email: userData?.email,
          avatar: userData?.avatar,
        }}
        button={button}
        logo={logo}
        {...props}
      />
    </header>
  );
};
