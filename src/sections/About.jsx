import company1 from "../assets/images/company1.svg";
import company2 from "../assets/images/company2.svg";
import company3 from "../assets/images/company3.svg";
import company4 from "../assets/images/company4.svg";
import client1 from "../assets/images/clientOne.png"

const About = () => {
  return (
    <section className="wrapper">
      <div className="flex flex-col px-2 py-4">
        <div className="flex flex-col items-center justify-around lg:flex-row md:gap-10 max-md:gap-8  md:pt-16  ">
          <div className="max-sm:mt-10 lg:w-2/5 max-md:mt-16 sm:gap-12 flex flex-col  max-sm:gap-8">
            <h2 className=" capitalize text-center text-rose-600/75 font-semibold text-4xl md:text-6xl tracking-tight">
              Hear what <strong className="text-rose-600">People</strong> say
              about <strong className="text-rose-600">Us</strong>
            </h2>
            <p className="text-xl text-center text-stone-800 sm:px-4">
              <strong>{"''"}</strong>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus voluptas odit illo necessitatibus
              sapiente tempora sint architecto dolores id fuga?
              <strong>{"''"}</strong>
            </p>
          </div>
          <div className="grid max-md:grid-cols-1 gap-8 md:gap-12 py-4 md:grid-cols-2 ">
            <div className="relative rounded-lg -skew-x-6  -translate-y-6 hover:-translate-y-1 hover:-translate-x-0 hover:skew-x-0 duration-500 w-72 h-44 p-1 bg-blue-100 card-compact hover:bg-base-200 transition-all  [box-shadow:12px_12px] hover:[box-shadow:4px_4px]">
              <figure className="w-full h-full">
                <div
                  alt="border"
                  className="bg-blue-300 text-neutral-50 min-h-full rounded-lg border border-opacity-5"
                >
                </div>
              </figure>
              <div className="absolute text-black top-2 left-0 mx-4">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-lg font-semibold">Aaron smith</p>
                  <img src={client1} alt="client1" className="w-24 h-24 rounded-full" />
                </div>
                <p className="text-sm opacity-60 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eget feugiat orci. 
                </p>
              </div>
            </div>
            <div className="relative rounded-lg -skew-x-6  -translate-y-6 hover:-translate-y-1 hover:-translate-x-0 hover:skew-x-0 duration-500 w-72 h-44 p-1 bg-blue-100 card-compact hover:bg-base-200 transition-all  [box-shadow:12px_12px] hover:[box-shadow:4px_4px]">
              <figure className="w-full h-full">
                <div
                  alt="border"
                  className="bg-blue-300 text-neutral-50 min-h-full rounded-lg border border-opacity-5"
                >
                </div>
              </figure>
              <div className="absolute text-black top-2 left-0 mx-4">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-lg font-semibold">John Doe </p>
                  <img src={client1} alt="client1" className="w-24 h-24 rounded-full" />
                </div>
                <p className="text-sm opacity-60 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eget feugiat orci. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-2 py-4 sm:pt-8 lg:pt-16 grid max-md:grid-cols-2 max-lg:grid-cols-4 lg:grid-cols-4 lg:justify-evenly justify-items-center max-md:gap-8 ">
           <img src={company1} alt="brand" className="w-36 h-20" />
           <img src={company2} alt="brand" className="w-36 h-20" />
           <img src={company3} alt="brand" className="w-36 h-20" />
           <img src={company4} alt="brand" className="w-36 h-20" />
        </div>
      </div>
    </section>
  );
};

export default About;
