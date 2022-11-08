function ShortLink() {
  return (
    <div className="w-screen flex justify-center -mt-5 mb-10">
      <div className="flex  flex-col w-10/12 rounded-lg h-fit bg-white-50 overflow-hidden">
        <span className="ml-4 text-shark-900 font-semibold mt-3 mb-3">
          {" "}
          https://www.frontendmentor.io{" "}
        </span>
        <div className="w-full h-px bg-shark-100 mb-3"></div>
        <span className="ml-4 text-robins-egg-blue-500 font-semibold mb-3">
          {" "}
          hhtps://linkscurt
        </span>
        <div className="h-fit w-full flex justify-center">
          <button
            type="button"
            className="w-11/12 h-9 bg-robins-egg-blue-500 rounded-lg text-white-50 font-semibold mb-3"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShortLink;
