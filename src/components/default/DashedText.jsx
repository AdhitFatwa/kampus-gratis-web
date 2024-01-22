export const DashedText = ({ text = "Atau" }) => {
  return (
    <div className="inline-flex items-center justify-center w-full">
      <hr className="w-full h-px my-6 bg-[#D9D9D9] border-0 dark:bg-gray-700" />
      <span className="absolute px-8 font-medium text-neutral-500 bg-neutral-50 text-sm">
        {text}
      </span>
    </div>
  );
};
