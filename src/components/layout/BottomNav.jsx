import { Link, useLocation, useSearchParams } from "react-router-dom";

export const BottomNav = ({ bottomNavItemStyle, bottomNavItems }) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const pages = searchParams.get("pages");

  return (
    <nav className="bg-neutral-50 hidden sm:flex w-full px-6 md:px-14 lg:px-16 ">
      <div className="w-full max-w-[1440px] border-b-[1px] border-t-[1px] border-neutral-100 py-3 mx-auto  sm:flex gap-4">
        {bottomNavItems.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index}
              className={`${
                item.link === `/${pages}`
                  ? bottomNavItemStyle
                  : pathname.includes(item.link) && pages === null
                  ? bottomNavItemStyle
                  : "hover:text-version3-500"
              }  px-4 py-2.5 text-sm transition-all ease-in-out duration-300`}
            >
              <p>{item.name}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
