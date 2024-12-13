import React, { useState } from "react";

const Input = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-2">
      <button
        onClick={() => setToggleForm(true)}
        className={`${
          toggleForm ? "hidden" : "block"
        } border border-outlineWhite font-semibold p-2 rounded-md w-full text-start cursor-text`}
      >
        List anything...
      </button>
      <div className={`${!toggleForm ? "hidden" : "block"} `}>
        <form
          onSubmit={(e) => formSubmit(e)}
          className=" border border-outlineWhite rounded-md p-2"
        >
          <input
            className="bg-transparent w-full focus:outline-none"
            type="text"
            placeholder="Heading"
            id="inputField"
          />
          <textarea
            className=" mt-2 bg-transparent resize-none text-sm placeholder:text-sm w-full focus:outline-none"
            type="text"
            placeholder="Body..."
            id="inputField"
            rows={1}
          />
          <div className="flex justify-end">
            <button
              onClick={() => setToggleForm(false)}
              className=" font-semibold cursor-pointer p-1 hover:bg-neutral-800 rounded-md "
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
