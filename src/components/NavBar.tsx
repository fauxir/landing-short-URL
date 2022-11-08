import { useState } from "react";

function NavBar() {
  let [show, setShow] = useState<any>(0);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="justify-between flex items-center m-3 mt-4">
        {/* NavBar Mobile */}
        <div>
          <h1 className="font-bold text-3xl ml-1">Shortly</h1>{" "}
          {/* NavBar Logo Mobile */}
        </div>
        <div className="mr-2 cursor-pointer" onClick={handleClick}>
          {/* NavBar Hamburger Mobile */}
          <div className="w-6 h-1 bg-tuna-300 mb-1"></div>
          <div className="w-6 h-1 bg-tuna-300 mb-1"></div>
          <div className="w-6 h-1 bg-tuna-300"></div>
        </div>
      </div>

      {show ? (
        <div className="w-full h-fit flex justify-center absolute">
          {" "}
          {/* NavBar Menu Mobile */}
          <div className="w-11/12 h-fit bg-martinique-500 rounded-lg flex items-center flex-col justify-center pt-8 pb-8 mt-2">
            <span className="w-full h-fit text-center font-bold text-2x text-shark-100 mb-3">
              Features
            </span>
            <span className="w-full h-fit text-center font-bold text-2x text-shark-100 mb-3">
              Pricing
            </span>
            <span className="w-full h-fit text-center font-bold text-2x text-shark-100 mb-5">
              Resources
            </span>
            <div className="h-px w-11/12 bg-shark-300"></div>
            <span className="w-full h-fit text-center font-bold text-2x text-shark-100 mb-5 mt-5">
              Login
            </span>
            <div className="h-10 bg-robins-egg-blue-500 hover:bg-robins-egg-blue-400 flex justify-center items-center w-10/12 rounded-3xl cursor-pointer">
              <span className="w-full h-fit text-center font-bold text-2x text-shark-100 mb-3 mt-3">
                Sign Up
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NavBar;
