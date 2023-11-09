import React from "react";

const Card = () => {
  return (
    <div className="w-full flex items-center justify-center mt-60">
      <div className="shadow-lg shadow-orange-500 xl:w-[20%] lg:w-[40%] w-[90%] max-sm:p-6 p-10 space-y-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 21 21"
        >
          <g fill="none">
            <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
            <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8" />
          </g>
        </svg>
        <h1 className=" text-6xl font-bold">Thanks for subscribing!</h1>
        <p className="text-lg">
          A confirmation has been sent to{" "}
          <code className="underline">ash@loremcompany.com</code>. Please open
          it and click the button inside of confirm your subscription.
        </p>
        <button className="font-bold text-lg border-2 border-black py-2 px-4 w-full hover:text-white hover:bg-black rounded-lg">
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default Card;
