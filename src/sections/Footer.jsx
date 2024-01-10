import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaAppStore } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex flex-col md:flex-row md:justify-around  max-sm:gap-4 max-md:gap-8 md:gap-12 px-4 pt-4 lg:pt-8 justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold">Jadoo </h2>
          <p className="text-sm capitalize">
            Book your trip in minute,
            <br /> get full Control for much longer.
          </p>
        </div>
        <div className="flex flex-col gap-2 max-md:hidden ">
          <p className="text-xl font-bold">Company</p>
          <ul className="flex flex-col gap-1">
            <li className="text-sm font-medium">About</li>
            <li className="text-sm font-medium">Careers</li>
            <li className="text-sm font-medium">Mobile</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 max-md:hidden ">
          <p className="text-xl font-bold">Contact</p>
          <ul className="flex flex-col gap-1">
            <li className="text-sm font-medium">Help/FAQ</li>
            <li className="text-sm font-medium">Press</li>
            <li className="text-sm font-medium">Affliates</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 max-md:hidden ">
          <p className="text-xl font-bold">More</p>
          <ul className="flex flex-col gap-1">
            <li className="text-sm font-medium">Airline Fee</li>
            <li className="text-sm font-medium">Airline</li>
            <li className="text-sm font-medium">Low Fare Tips</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center max-sm:gap-4 sm:gap-6">
          <div className="flex flex-row gap-4 justify-around">
            <FaInstagram className="w-10 h-10" />
            <RiFacebookBoxLine className="w-10 h-10" />
            <FaXTwitter className="w-10 h-10" />
          </div>
          <p className="text-lg font-semibold text-center">Discover our App</p>
          <div className="flex flex-row max-sm:flex-col max-sm:gap-3 sm:gap-4">
            <button className=" bg-stone-300 flex flex-row items-center justify-center p-2 rounded-2xl border-2 gap-2 border-black">
              {" "}
              <FaAppStore className="w-7 h-7" />{" "}
              <p className="text-base font-bold">App Store</p>
            </button>
            <button className=" bg-stone-300 flex flex-row items-center justify-center p-2 rounded-2xl border-2 gap-2 border-black">
              <BiLogoPlayStore className="w-7 h-7" />{" "}
              <p className="text-base font-bold">Play Store</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-12 justify-center items-center ">
        <div className="border-[1.5px] border-stone-500 m-2 px-40"></div>
         <p className="text-stone-800">developed by <a href="https://github.com/mxnan">@mxnan</a></p>
      </div>
    </footer>
  );
};

export default Footer;
