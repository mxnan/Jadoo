import rectangle from "../assets/images/rectangle.svg";
import service1 from "../assets/images/service1.svg";
import service3 from "../assets/images/service3.svg";
import service4 from "../assets/images/service4.svg";
import plane from "../assets/images/plane.svg";

const Services = () => {
  return (
    <section className="wrapper">
      <div className="pt-8 flex flex-col gap-4  items-center">
        <h2 className=" capitalize text-center text-rose-600/75 font-semibold text-4xl tracking-tight">
          we offer <strong className="text-rose-600">best</strong> services
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  md:gap-16 md:mt-24 gap-4 lg:gap-28">
          <div className="relative bg-stone-200 py-6 rounded-3xl flex flex-col gap-6 justify-center items-center">
            <img src={service1} alt="service1" className="w-24 h-20 z-20" />
            <div className="flex flex-col gap-2 items-center w-[230px] ">
              <h2 className="text-sm">Calculated Weather </h2>
              <p className="text-xs text-center px-2">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
            <img
              src={rectangle}
              alt="rect"
              className="w-14 h-14 absolute left-1/2 top-[50px] z-10"
            />
          </div>
          <div className="relative bg-stone-200 py-6 rounded-3xl flex flex-col gap-6 justify-center items-center">
            <img src={plane} alt="service1" className="w-36 h-20 z-20" />
            <div className="flex flex-col gap-2 items-center w-[230px] ">
              <h2 className="text-sm">Best Flights </h2>
              <p className="text-xs text-center px-2">
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
            <img
              src={rectangle}
              alt="rect"
              className="w-14 h-14 absolute left-1/2 top-[50px] z-10"
            />
          </div>
          <div className="relative bg-stone-200 py-6 rounded-3xl flex flex-col gap-6 justify-center items-center">
            <img src={service3} alt="service1" className="w-24 h-20 z-20" />
            <div className="flex flex-col gap-2 items-center w-[230px] ">
              <h2 className="text-sm">Local Events </h2>
              <p className="text-xs text-center px-2">
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </p>
            </div>
            <img
              src={rectangle}
              alt="rect"
              className="w-14 h-14 absolute left-1/2 top-[50px] z-10"
            />
          </div>
          <div className="relative bg-stone-200 py-6 rounded-3xl flex flex-col gap-6 justify-center items-center">
            <img src={service4} alt="service1" className="w-24 h-20 z-20" />
            <div className="flex flex-col gap-2 items-center w-[230px] ">
              <h2 className="text-sm">Customization </h2>
              <p className="text-xs text-center px-2">
                We deliver outsourced aviation services for military customers
              </p>
            </div>
            <img
              src={rectangle}
              alt="rect"
              className="w-14 h-14 absolute left-1/2 top-[50px] z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
