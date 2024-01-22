import { Button } from "../default/Button";

export const ChoiceProgramCard = (props) => {
  return (
    <section className="flex flex-col border border-neutral-300 w-full rounded-lg h-auto bg-white pb-4 my-5">
      <img
        src={props.src}
        alt={"card-landing"}
        width={325}
        height={208}
        loading={"lazy"}
        className="w-auto h-[208px] pt-4 px-4 object-cover"
      />
      <div className="flex flex-col p-[17px]">
        <div className="flex flex-col gap-y-4">
          <p className="w-1/2 text-xs px-2 py-1 text-center rounded-md bg-blue-base text-white ">
            {props.tag}
          </p>
          <h1 className="text-black font-semibold text-[20px] mb-2">{props.title}</h1>
        </div>
        <Button
          type="button"
          className="text-blue-base border-2 border-blue-base bg-transparent py-3 px-3 text-lg font-semibold rounded-lg flex justify-between items-center"
        >
          Telusuri Program <img src="icons/right-arrow.svg" alt="" />{" "}
        </Button>
      </div>
    </section>
  );
};
