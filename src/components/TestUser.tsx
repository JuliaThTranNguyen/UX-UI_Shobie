import Image from "next/image";
import React from "react";

export default function TestUser() {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-2">
        <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-gray-300 rounded-3xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1 p-2">
              <div className="relative">
                <Image
                  className="rounded-full inline-block"
                  src="/user.jpg"
                  width={90}
                  height={90}
                  alt="user"
                />
                <h2 className="text-gray-500 font-black text-[20px]">
                  Julia TH.
                </h2>
              </div>
              <p>Software Developer</p>
              <Image
                className="inline-block py-1"
                src="/quotes.svg"
                width={30}
                height={30}
                alt="quotes"
              />
              <p className="max-w-[200px] text-gray-700 text-left">
                This seamless design was created in November 2023 with the hope
                of providing a user-friendly shopping experience.
              </p>
            </div>
          </div>

          <div className="bg-red-600 bg-[url(/offers.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-white min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <div className="bg-blackish text-white p-2 rounded-md cursor-pointer hover:bg-white hover:text-black hover:font-extrabold">
                25% DISCOUNT
              </div>
              <h2 className="font-extrabold text-2xl text-blackish">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px] ">
                <i>
                  Starting from $20 <b className="text-gray-700">Shop now</b>
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
