export const ContentLayouts = ({
  children,
  className = "",
  withFlex = true,
  withGrid = false,
  withGap = true,
}) => {
  const flexContent = `${withFlex ? `flex flex-col ${withGap ? "gap-y-[50px]" : ""}` : ""}`;

  const gridContent = `${withGrid ? `grid ${withGap ? "gap-y-10" : ""}` : ""}`;

  return <section className={`${flexContent} ${gridContent} ${className}`}>{children}</section>;
};
