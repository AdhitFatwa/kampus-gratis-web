import { Link } from "react-router-dom";

const FooterCredit = () => {
  return (
    <div className="w-full py-6">
      <section className="w-full max-w-[1440px] mx-auto text-center md:flex md:px-14 lg:px-16 text-[#737373] ">
        {/* <div className="w-full md:flex md:w-1/2">
          <h1 className="text-sm">2024 - www.kampusgratis.id - Hak Cipta Dilindungi.</h1>
        </div> */}
        <div className="w-full md:w-1/2 md:flex justify-end text-sm gap-x-8">
          <Link to={"/"} className="pr-4">
            Terms of use
          </Link>
          <Link to={"/"}>Privacy policy</Link>
        </div>
      </section>
    </div>
  );
};

export default FooterCredit;
