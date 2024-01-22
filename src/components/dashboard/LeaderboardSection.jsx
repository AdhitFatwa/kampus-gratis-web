import { Link } from "react-router-dom";
import { leaderboard } from "../../data/leaderboard";

export const LeaderboardSection = () => {
  const getRank = leaderboard;

  return (
    <section className="w-full bg-white mb-10 px-8 py-7 rounded-md  shadow-md shadow-neutral-100">
      <section className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <img width={80} height={80} src={"/icons/bigTrophyIcon.svg"} alt="papan skor" />
          <div className="gap-4">
            <h1 className="text-xl text-neutral-900 font-bold ">Papan Skor</h1>
            <p className="text-lg text-yellow-500 font-bold ">0</p>
            <p className="text-sm text-yellow-500">Poin Kamu</p>
          </div>
        </div>
      </section>
      <section className="mb-6 ">
        {Array.isArray(getRank) &&
          [...getRank]
            .sort((a, b) => {
              return b?.author?.poin - a?.author?.poin;
            })
            .slice(0, 5)
            .map((leaderBoard, index) => (
              <div
                key={index}
                className="flex bg-white hover:bg-neutral-100 transition-colors ease-in-out duration-300 cursor-pointer gap-2 items-center border-t-2 border-neutral-200 border-dashed pt-4 pb-3"
              >
                {index === 0 ? (
                  <img height={36} width={36} src={"/icons/medal1Icon.svg"} alt="firstplace" />
                ) : index === 1 ? (
                  <img height={36} width={36} src={"/icons/medal2Icon.svg"} alt="secondPlace" />
                ) : index === 2 ? (
                  <img height={36} width={36} src={"/icons/medal3Icon.svg"} alt="thirdPlace" />
                ) : (
                  <p className="w-9 text-center text-xl">{index + 1}</p>
                )}
                <div className="flex rounded-full object-fit w-10 h-10">
                  <img
                    src={
                      leaderBoard.author.avatar === null
                        ? "/icons/avatar.svg"
                        : leaderBoard.author.avatar
                    }
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-neutral-900 font-bold capitalize text-sm">
                    {leaderBoard.author.user_name}
                  </h1>
                  <p className="text-primary-600 font-bold text-xs">
                    {leaderBoard.author.poin} Poin
                  </p>
                </div>
              </div>
            ))}
      </section>
      <Link
        to="#"
        className="border-2 border-yellow-500 w-full flex items-center justify-center text-sm text-yellow-500 py-2 rounded-md shadow-sm cursor-pointer bg-white hover:bg-yellow-100 hover:text-yellow-600 hover:border-yellow-500 transition-all ease-in-out duration-300 hover:shadow-md"
      >
        Lihat Semua
      </Link>
    </section>
  );
};
