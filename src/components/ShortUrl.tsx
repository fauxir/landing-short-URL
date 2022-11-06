function ShortUrl() {
  return (
    <div className="h-60">
      <div className="w-screen h-fit flex items-center justify-center bg-silver-200 -z-10">
        <div className="h-44 w-10/12 pl-14 pb-5 rounded-lg bg-martinique-500 mt-16 overflow-hidden flex justify-end z-20">
          <img
            className="w-auto h-4/5"
            src="/images/bg-shorten-mobile.svg"
            alt=""
          />
        </div>
        <input
          className="absolute rounded-md w-9/12 h-10 z-20 pl-2"
          type="text"
          placeholder="Shorten a link here..."
        />
        <div className="h-10 absolute z-20 bg-robins-egg-blue-500 hover:bg-robins-egg-blue-400 flex justify-center items-center w-9/12 rounded-md cursor-pointer mt-36">
          <span className="w-full h-fit text-center font-bold text-2x text-silver-100 mb-3 mt-3">
            Shorten It!
          </span>
        </div>
      </div>
      <div className="bg-white-50 w-screen h-40 relative bottom-60 z-10"></div>
    </div>
  );
}

export default ShortUrl;
