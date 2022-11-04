function ShortUrl() {
  return (
    <div className="w-screen h-fit flex items-center justify-center">
      <div className="h-40 w-10/12 rounded-lg bg-martinique-500 mt-16">
        <img
          className="w-26 h-auto mt-5"
          src="/images/bg-shorten-mobile.svg"
          alt=""
        />
      </div>
      <input className="absolute rounded-md w-9/12 h-10" type="text" placeholder="Shorten a link here..."/>
      <div className="h-10 absolute bg-robins-egg-blue-500 hover:bg-robins-egg-blue-400 flex justify-center items-center w-9/12 rounded-md cursor-pointer mt-36">
        <span className="w-full h-fit text-center font-bold text-2x text-silver-100 mb-3 mt-3">
          Shorten It!
        </span>
      </div>
    </div>
  );
}

export default ShortUrl;
