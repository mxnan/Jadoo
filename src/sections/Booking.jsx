import { AiOutlineLike } from "react-icons/ai";
import { LiaCitySolid } from "react-icons/lia";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiTaxiLine } from "react-icons/ri";

const Booking = () => {
  return (
    <section className="wrapper">
      <div className="pt-8 md:py-12 max-sm:pb-8 flex flex-col max-md:gap-6 lg:gap-16 max-md:items-center md:flex-row gap-4  ">
        <div className="sm:pt-4 px-2 flex flex-col items-center">
          <h2 className=" capitalize text-start text-rose-600/75 font-semibold text-4xl md:text-6xl tracking-tight">
            Book your <strong className="text-rose-600 capitalize">next</strong>{" "}
            trip in{" "}
            <strong className="text-rose-600 text-5xl md:text-7xl capitalize">
              3
            </strong>{" "}
            steps
          </h2>
          <div className="flex flex-col gap-8 px-2 mt-10">
            <div className="flex flex-row items-center">
              <div className="w-14 h-12 max-sm:hidden flex justify-center items-center rounded-xl bg-orange-600">
                <LiaCitySolid className="w-10 h-10" />
              </div>
              <div className="flex flex-col max-sm:gap-1 sm:gap-2  text-start m-1 sm:ml-6">
                <h2 className="capitalize text-stone-50 text-xl font-semibold">
                  Choose destination
                </h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, earum!
                </p>
              </div>
            </div>
            <div className="flex flex-row  items-center">
              <div className="w-14 h-12 max-sm:hidden flex justify-center items-center rounded-xl bg-yellow-300">
                <RiSecurePaymentFill className="w-10 h-10" />
              </div>
              <div className="flex flex-col text-start m-1 sm:ml-6">
                <h2 className="capitalize text-stone-50 text-xl font-semibold">
                  Make payment
                </h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, earum!
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-14 h-12 max-sm:hidden flex justify-center items-center rounded-xl bg-lime-400">
              <RiTaxiLine className="w-10 h-10" />
              </div>
              <div className="flex flex-col text-start m-1 sm:ml-6">
                <h2 className="capitalize text-stone-50 text-xl font-semibold">
                  Reach airport on selected date
                </h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, earum!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-sm:hidden flex items-center justify-center w-1/2 ">
          <div className="p-1 bg-black rounded-3xl flex items-center justify-center ">
            <div id="booking" className="rounded-2xl">
              <div className="bg-stone-100 w-2/5 absolute bottom-4 right-4 rounded-lg">
                <div className="flex flex-col gap-2 p-4 ">
                  <h2 className="text-black font-bold text-lg capitalize">
                    trip to london
                  </h2>
                  <p className="text-stone-700 text-base">
                    14-29 Jan | by Robin Jones
                  </p>
                  <div className="flex justify-between">
                    <p className="text-stone-700 text-base">24 people going</p>
                    <button>
                      <AiOutlineLike className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
