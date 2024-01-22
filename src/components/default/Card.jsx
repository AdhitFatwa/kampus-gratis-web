import { Link } from "react-router-dom";

export const Card = ({
  className,
  children,
  title,
  icon,
  src,
  href,
  imgwidth,
  imgheight,
  titleStyle,
  hasImage,
  imgStyle,
  onClick,
  download,
}) => {
  return (
    <>
      {href ? (
        <Link to={`${href}`}>
          <div
            className={`${className} flex auto p-4 bg-white border flex-col gap-2`}
            onClick={onClick}
          >
            {hasImage && (
              <img
                className={`object-cover ${imgStyle}`}
                src={src}
                alt="Picture of the author"
                width={imgwidth}
                height={imgheight}
              />
            )}
            {icon}
            <h1 className={titleStyle}>{title}</h1>
            <section className="flex">{children}</section>
          </div>
        </Link>
      ) : (
        <div
          className={`${className} flex bg-white shadow-md  auto p-4 flex-col cursor-pointer`}
          onClick={onClick}
        >
          {hasImage &&
            (download ? (
              <div className="relative">
                <img
                  className={`w-full object-cover ${imgStyle}`}
                  src={src}
                  alt={title}
                  width={imgwidth}
                  height={imgheight}
                />
                <div className="h-full w-full absolute top-0 left-0 bg-slate-950/20 rounded-[8px] opacity-0 hover:opacity-100">
                  <div className="flex justify-center items-center h-full text-white">
                    <div className="flex justify-center gap-3">
                      <div>
                        <img
                          src="/icons/ic-download.svg"
                          alt={"download-icon"}
                          width={50}
                          className="shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <img
                className={`w-full object-cover ${imgStyle}`}
                src={src}
                alt={title}
                width={imgwidth}
                height={imgheight}
              />
            ))}
          {icon}
          <h1 className={titleStyle}>{title}</h1>
          {children}
        </div>
      )}
    </>
  );
};
