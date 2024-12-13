import React from "react";
import { BiSolidTrash } from "react-icons/bi";

const Card = () => {
  return (
    <div className=" p-4 space-y-2 rounded-md border border-outlineWhite  ">
      <div className="flex justify-between items-start  ">
        <h1 className=" font-semibold  ">
          Hello i am with React, a popular It is a syntax extension for
          JavaScript often used with React, a popular JavaScript{" "}
        </h1>
        <button className=" cursor-pointer p-1 hover:bg-neutral-800 rounded-md">
          <BiSolidTrash size={20} />
        </button>
      </div>
      <div className="max-h-96 overflow-y-scroll ">
        <p className="">
          JSX stands for JavaScript XML. It is a syntax extension for JavaScript
          often used with React, a popular JavaScript library for building user
          interfaces. JSX allows you to write HTML-like code in your JavaScript
          files, making it easier to describe what the UI should look like.
          useEffect: useEffect is used for handling side effects in your
          functional components. Side effects might include data fetching,
          subscriptions, manually changing the DOM, and more. It runs after
          every render by default, and you can conditionally run effects based
          on certain dependencies. It takes two arguments: a function (the
          effect), and an array of dependencies (optional). useRef: useRef is
          used for creating mutable object references that persist across
          renders without causing re-renders when they change. It returns a
          mutable object with a current property. It's often used to keep track
          of values that don't trigger a re-render when they change, like
          maintaining a reference to a DOM element. useState: useState is used
          for managing state in functional components. It returns an array with
          two elements: the current state value and a function to update that
          value. Whenever the state is updated, the component re-renders.
          useReducer: The useReducer Hook is similar to the useState Hook. It
          allows for custom state logic. useCallback: the hook is used to
          memoize functions, preventing them from being recreated on every
          render. This can be particularly useful in optimizing performance,
          especially in scenarios where a function is passed down to child
          components as a prop. useMemo: is another React hook that is used for
          memoization, but it is typically used to memoize values rather than
          functions. It is useful when you need to calculate a value based on
          some dependencies and you want to avoid recalculating that value on
          every render.
        </p>
      </div>
      <p className="text-xs text-end">Edited: 2024 10 dec</p>
    </div>
  );
};

export default Card;
