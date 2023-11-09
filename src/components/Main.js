import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate("/card");
    }
  };

  const validateEmail = () => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isEmailValid = regex.test(email);

    setIsValid(isEmailValid);
  };
  return (
    <div className="main-container ">
      <div className="custom-order mt-7 max-md:w-full">
        <h1 className=" text-5xl font-bold">Stay updated!</h1>
        <p className="mt-6 text-lg font-medium ">
          Joins 60,000+ products managers receiving monthly <br></br> updates
          on:
        </p>
        <ul className="mt-4 space-y-5 text-xl">
          <li className="flex items-center justify-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  stroke-width="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <p>Lorem ipsum dolor, sit amet consectetur</p>
          </li>
          <li className="flex items-center justify-start gap-3 ">
            <svg
              xmlns="1ttp://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  stroke-width="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <p>Lorem ipsum dolor, sit amet consectetur </p>
          </li>
          <li className="flex items-center justify-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  stroke-width="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <p>Lorem ipsum dolor, sit amet consectetur </p>
          </li>
        </ul>
        <form
          onSubmit={handleSubmit}
          action=""
          className=" flex flex-col gap-4 mt-8"
        >
          <div className="flex items-center justify-between">
            <label htmlFor="" className="font-bold">
              Email address
            </label>
            {isValid ? null : (
              <p className="text-red-500 font-bold">Valid email required</p>
            )}
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(); // Call the validation function on every keystroke
            }}
            onBlur={validateEmail}
            style={{
              padding: "10px 12px",
              borderRadius: "6px",
              border: "2px solid black",
            }}
            className={
              isValid
                ? "border border-gray-600"
                : "border-2 border-red-500 bg-red-200"
            }
          />

          <input
            className=" bg-black bg-opacity-80 text-white py-4 rounded-lg cursor-pointer text-lg"
            type="submit"
            value="Subscribe to monthly newsletter"
          />
        </form>
      </div>
      <div className="custom-order_one">
        <img
          className="lg:w-[400px] h-[500px] object-cover max-w-full"
          src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?format=pjeg&auto=webp&crop=16:9v"
          alt="picture"
        />
      </div>
    </div>
  );
};

export default Main;
