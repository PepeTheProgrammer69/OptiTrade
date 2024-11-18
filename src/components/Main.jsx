import React from "react";
import PhoneImageS from "../images/PhoneImageS.png";

const Main = () => {
    return (
        <main className="flex justify-center pt-24 gap-12">
            <div className="max-w-[450px]">
                <h1 className="text-[52px] font-normal text-[#00c805]">Investing</h1>
                <h2 className="text-[50px] font-normal text-black mt-5">
                    Build your portfolio starting with just $1
                </h2>
                <p className="text-[18px] leading-[24px] text-black mt-7">
                    Invest in stocks, options, and ETFs at your pace and commission-free.
                </p>
                <button className="mt-12 px-6 py-3.5 border border-black rounded-full text-[15px] font-bold text-black">
                    Learn more
                </button>
            </div>
            <img src={PhoneImageS} alt="" className="w-[500px] h-[600px] rounded-[20px] text-[#888] text-[18px] flex items-center justify-center" />
        </main>
    );
};

export default Main;