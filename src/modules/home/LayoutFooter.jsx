import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const LayoutFooter = () => {
  return (
    <>
      <div className="w-full bg-[#F5F5F5]">
        <div className="z-40 py-6 gap-x-10 gap-y-10 lg:gap-x-14 xl:gap-y-20 grid grid-cols-3 w-full max-w-[1440px] mx-auto">
          <section className="pr-0  mb-4 col-span-3  lg:col-span-1">
            <Link to={"/"}>
              <img
                src={"/images/home/footer/logo.svg"}
                alt="M-Know Logo's"
                className="w-auto h-6 md:h-9 lg:h-11"
                width={100}
                height={60}
                loading="eager"
              />
            </Link>
            {/* <h1 className="text-xs md:text-sm text-neutral-800 text-justify left-6 mt-6 mb-4 md:mb-6">
              Kampus Gratis disingkat KG, merupakan sistem manajemen e-learning, yang mencantumkan
              laporan peningkatan atau kemajuan pembelajaran mahasiswa, layaknya perguruan tinggi.
            </h1> */}
            <div className="flex justify-between flex-wrap gap-y-4 items-center">
              <div className="text-lg text-neutral-800 flex gap-x-6">
                <FaFacebookF className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
                <FaTwitter className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
                <FaLinkedinIn className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
                <FaInstagram className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
              </div>
              <img
                src={"/images/home/footer/footerGPlay.svg"}
                alt="goolePlay-view"
                className=" w-[160px] -m-2"
                height={100}
                width={100}
                loading="eager"
              />
            </div>
          </section>
          <section className="flex gap-x-20 gap-y-10 flex-wrap xl:flex-nowrap col-span-3 lg:col-span-2">
            <section className="flex lg:gap-20 gap-8 w-full">
              <div className=" text-neutral-900">
                <h1 className=" mb-3 lg:mb-6 font-bold text-base">Halaman</h1>
                <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
                  <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
                    <Link to={"#"}>Rencana Studi</Link>
                  </li>
                  <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
                    <Link to={"/studi-ku"}>Studiku</Link>
                  </li>
                  <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
                    <Link to={"#"}>Panduan</Link>
                  </li>
                  <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
                    <Link to={"#"}>Sekilasi Ilmu</Link>
                  </li>
                </ul>
              </div>
              <div className=" text-neutral-900">
                <h1 className="mb-3 lg:mb-6 font-bold text-base">Kontak</h1>
                <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
                  <li>+62 2143 1244</li>
                  <li>kampusgratis123@gmail.com</li>
                </ul>
              </div>
            </section>
            <div className=" text-neutral-900">
              <h1 className="mb-3 lg:mb-2 text-base font-bold">Alamat</h1>

              <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
                <li className="flex gap-2 ">
                  <section className="min-w-[70px] flex justify-between">
                    <span>Utama</span>
                    <span>:</span>
                  </section>
                  <span>Jl.Radio IV No.8 B Barito Kebayoran Baru, Jakarta Selatan</span>
                </li>
                <li className="flex gap-2 ">
                  <section className="min-w-[70px] flex justify-between">
                    <span>Cabang</span>
                    <span>:</span>
                  </section>
                  <span>
                    Jl. Raya Cirendeu No.59, Cireundeu, Kec. Ciputat Timur., Kota Tangerang Selatan,
                    Banten 15419
                  </span>
                </li>
                <li className="flex gap-2 ">
                  <section className="min-w-[70px] flex justify-between">
                    <span>Cabang</span>
                    <span>:</span>
                  </section>
                  <span>Jl. Raya Darmo Permai III Surabaya. 60119</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="w-full py-6">
          <section className="w-full max-w-[1440px] mx-auto text-center md:flex md:px-14 lg:px-16 text-[#737373] ">
            <div className="w-full md:flex md:w-1/2">
              <h1 className="text-sm">2022 - www.kampusgratis.id - Hak Cipta Dilindungi.</h1>
            </div>
            <div className="w-full md:w-1/2 md:flex justify-end text-sm gap-x-8">
              <Link to={"/"} className="pr-4">
                Terms of use
              </Link>
              <Link to={"/"}>Privacy policy</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LayoutFooter;
