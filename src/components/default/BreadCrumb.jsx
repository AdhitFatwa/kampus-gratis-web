import { Fragment } from "react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

export const BreadCrumb = ({ items, textColor = "text-[#106FA4]", bgColor = "bg-light" }) => {
  return (
    <div
      className={` px-8 md:px-14 lg:px-16 place-content-start w-full text-xs md:text-sm py-4 !font-extrabold  ${bgColor}`}
      aria-label="Breadcrumb"
    >
      <div className="max-w-[1440px] mx-auto grid">
        <ol className="flex w-full items-center gap-x-2 flex-wrap">
          {items.map((crumb, index) => {
            const isLastItem = index === items.length - 1;
            if (!isLastItem) {
              return (
                <Fragment key={index}>
                  <Link
                    to={crumb.link}
                    key={index}
                    className={`inline-flex  font-[600] items-center ${textColor}`}
                  >
                    {crumb.name}
                  </Link>
                  <MdChevronRight className={`text-xl ${textColor}`} />
                </Fragment>
              );
            } else {
              return (
                <Link key={index} to={crumb.link}>
                  <span className="text-neutral-500 font-[600] cursor-pointer">{crumb.name}</span>
                </Link>
              );
            }
          })}
        </ol>
      </div>
    </div>
  );
};
