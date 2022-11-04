function Hero() {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-fit h-fit overflow-hidden">
        <img
          className="w-auto h-full relative left-10 mt-5"
          src="/images/illustration-working.svg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center h-fit w-full mt-5">
        <h1 className="text-center font-bold text-4xl">
          More than just shorter links
        </h1>
        <span className="text-center font-medium text-tuna-400 text-lg h-fit w-11/12 mt-5">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </span>
        <div className="h-12 bg-robins-egg-blue-500 hover:bg-robins-egg-blue-400 flex justify-center items-center w-40 rounded-3xl cursor-pointer mt-5">
          <span className="w-full h-fit text-center font-bold text-2x text-silver-100 mb-3 mt-3">
            Get Started
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
