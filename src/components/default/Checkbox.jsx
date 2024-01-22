"use client";

export const Checkbox = ({ variant = "lg", ...props }) => {
  return (
    <label
      htmlFor={props.name}
      className={`
       ${props.className} 
       ${props.disabled && "text-neutral-500"}
       ${variant === "lg" && "text-[18px]"}
       ${variant === "md" && "text-[16px]"}
       ${variant === "sm" && "text-[14px]"}
      flex items-center`}
    >
      <input {...props} type="checkbox" id={props.name} className="mr-2 accent-primary-base" />
      {props.label}
    </label>
  );
};
