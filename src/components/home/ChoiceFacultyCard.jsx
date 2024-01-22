export const ChoiceFacultyCard = (props) => {
  return (
    <section className="flex flex-col border border-neutral-300 w-auto rounded-lg h-auto bg-white pb-4 my-5">
      <img
        src={props.src}
        alt={"card-landing"}
        width={325}
        height={208}
        loading={"lazy"}
        className="w-auto h-[208px] pt-4 px-4 object-cover"
      />
      <div className="flex flex-col p-[17px]">
        <div className="flex flex-col gap-y-6">
          <div className="w-1/2 text-xs px-1 py-1 text-center rounded-md bg-blue-base text-white ">
            {props.tag}
          </div>
          <h1 className="text-black font-semibold text-[20px]">{props.title}</h1>
        </div>
      </div>
    </section>
  );
};
