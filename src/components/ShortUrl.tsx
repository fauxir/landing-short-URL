import { useEffect, useState } from "react";
import axious from "axios";
import { useDispatch } from "react-redux";
import { update } from "C:/Users/Fauxir/Desktop/landing short URL/landing-short-url/src/redux/dataListSlice.js";

function ShortUrl() {
  const [shortLink, setShortLink] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [list, setList] = useState<any>([]);

  //const dispatch = useDispatch();

  const addLinkList = () => {
    setList([...list, { id: id, link: link, shortlink: shortLink }]);
    setId(id + 1);
    setLink("");
    setShortLink("");
    dispatch(update(list));
  };

  const shortApi = async () => {
    try {
      const res: any = await axious(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      setShortLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

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
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <div className="h-10 absolute z-20 bg-robins-egg-blue-500 hover:bg-robins-egg-blue-400 flex justify-center items-center w-9/12 rounded-md cursor-pointer mt-36">
          <div
            onClick={() => shortApi() && addLinkList()}
            className="w-full h-fit text-center font-bold text-2x text-silver-100 mb-3 mt-3"
          >
            Shorten It!
          </div>
        </div>
      </div>
      <div className="bg-white-50 w-screen h-40 relative bottom-60 z-10"></div>
    </div>
  );
}

export default ShortUrl;
