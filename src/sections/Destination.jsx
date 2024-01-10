import vector from "../assets/images/vector.svg";


const Destination = () => {
  return (
    <section className="wrapper">
      <div className="flex flex-col gap-10 pt-12">
        <h2
          className=" capitalize text-center text-rose-600/75 font-semibold 
        text-4xl md:text-6xl tracking-tight"
        >
        <strong className="text-rose-600">top</strong> destination
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:px-32  max-md:gap-8 md:mt-20 gap-10 md:gap-16 justify-items-center px-4">
          <div
            id="trip1"
            className=" flex flex-col justify-between rounded-3xl py-2 px-4"
          >
            <div className="flex flex-col gap-2 ">
              <h2 className="text-black font-bold text-2xl">London</h2>
              <p className="text-black text-end font-semibold text-lg">
                5679 <strong className="text-stone-950">USD</strong>
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={vector} alt="vector" className="w-6 h-6" />
              <p className="text-white text-base font-bold tracking-wider">
                15 days trip
              </p>
            </div>
          </div>
          <div
            id="trip2"
            className=" flex flex-col justify-between rounded-3xl py-2 px-4"
          >
            <div className="flex flex-col gap-2 ">
              <h2 className="text-black font-bold text-2xl">Paris</h2>
              <p className="text-black text-end font-semibold text-lg">
                4769 <strong className="text-stone-950">USD</strong>
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={vector} alt="vector" className="w-6 h-6" />
              <p className="text-white text-base font-bold tracking-wider">
                7 days trip
              </p>
            </div>
          </div>
          <div
            id="trip3"
            className=" flex flex-col justify-between rounded-3xl py-2 px-4"
          >
            <div className="flex flex-col gap-2 ">
              <h2 className="text-black font-bold text-2xl">Rome</h2>
              <p className="text-black text-end font-semibold text-lg">
                5599 <strong className="text-stone-950">USD</strong>
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={vector} alt="vector" className="w-6 h-6" />
              <p className="text-white text-base font-bold tracking-wider">
                12 days trip
              </p>
            </div>
          </div>
          <div
            id="trip4"
            className=" flex flex-col justify-between rounded-3xl py-2 px-4"
          >
            <div className="flex flex-col gap-2 ">
              <h2 className="text-black font-bold text-2xl">Venice</h2>
              <p className="text-black text-end font-semibold text-lg">
                8999 <strong className="text-stone-950">USD</strong>
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={vector} alt="vector" className="w-6 h-6" />
              <p className="text-white text-base font-bold tracking-wider">
                20 days trip
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
