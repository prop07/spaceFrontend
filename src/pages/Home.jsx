import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, resetSpaceState } from "../features/spaceSlice";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.space);
  const [activeSearch, setActiveSearch] = useState(false);

  const searchSpace = (e) => {
    setActiveSearch(!!e.target.value.trim());
  };

  useEffect(() => {
    console.log("data: ", data);
    console.log("loading: ", loading);
    console.log("error: ", error);
    if (data) {
      navigate(`/space/${data.unique_id}`);
      dispatch(resetSpaceState());
    }
  }, [data, error]);

  const getSpace = () => {
    if (!loading) {
      dispatch(fetchData());
    }
  };

  return (
    <div className="flex-1 flex overflow-hidden">
      <div className="grid place-items-center w-screen">
        <div className="space-y-2">
          <h1 className=" text-center font-bold pb-8 text-4xl tracking-normal">
            Help You Find Space ?
          </h1>
          <div className=" min-w-[700px] ">
            <input
              onChange={(e) => searchSpace(e)}
              className="bg-neutral-800 pb-2 pt-3 px-3 w-full rounded-t-md focus:outline-none border-t border-x border-neutral-600"
              type="text"
              placeholder="Enter space code !"
              id="inputField"
            />
            <label htmlFor="inputField">
              <div className="bg-neutral-800 cursor-text flex justify-between rounded-b-md px-3 py-3 border-b border-x border-neutral-600">
                <button
                  onClick={getSpace}
                  className="bg-neutral-800 text-sm flex items-center gap-2  font-semibold text-neutral-300 cursor-pointer hover:bg-neutral-700 border py-1 px-2 rounded-md border-neutral-600 "
                >
                  Create Space <FaPlus className="text-white" size={13} />
                </button>
                <button
                  className={`${
                    activeSearch
                      ? "bg-neutral-100 border-neutral-100  cursor-pointer "
                      : "bg-neutral-500 border-neutral-500 cursor-default "
                  }  text-sm  font-semibold text-black  border py-1 px-2 rounded-md  `}
                >
                  <FaArrowUp className="rotate-90" />
                </button>
              </div>
            </label>
          </div>
          <div className="flex justify-center">
            <button className="rounded-full text-sm border py-1 px-2 flex items-center gap-1 border-neutral-600 hover:bg-neutral-700 ">
              Quick Guide <FaArrowUp size={10} className="rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
