import heroimg from "../assets/images/hero.svg";
import plane from "../assets/images/plane.svg";

const Hero = () => {
  return (
    <section className="wrapper ">
      <div className=" flex flex-col lg:flex-row-reverse pt-8 px-10 ">
        <img
          src={heroimg}
          alt="hero"
          className=" max-lg:hidden md:w-[600px] h-[850px] w-[450px]"
        />

        <div className="flex flex-col md:pt-6 sm:gap-12 max-sm:pt-4 max-sm:gap-6  justify-center text-center items-center">
          <h2 className="uppercase sm:text-3xl max-sm:text-3xl max-sm:text-start font-medium text-black-700">
            best destinations around the world
          </h2>
          <h2 className="capitalize sm:text-7xl  max-md:text-[50px] max-sm:text-6xl max-sm:text-start font-extrabold bg-gradient text-rose-600/75 ">
            <strong className="text-rose-600">Travel</strong>, enjoy and {""}
            <strong className="text-rose-600">live</strong> a new and full life
          </h2>
          <p className=" font-normal sm:text-xl max-sm:text-start  text-sm text-black-900 px-1">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex items-center justify-start gap-8 max-sm:mt-6 ">
            <button className="bg-yellow-500 font-medium rounded-xl p-3 px-3">
              Find out more
            </button>
            <button className=" bg-transparent border-2 border-stone-600 rounded-xl font-medium p-2 flex">
              Play demo
            </button>
          </div>
          <img src={plane} alt="plane" className="max-sm:hidden lg:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
