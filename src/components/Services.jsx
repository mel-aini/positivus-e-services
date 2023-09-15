import Aat from "../assets/services/Aat.png";
import Cc from "../assets/services/Cc.png";
import Em from "../assets/services/Em.png";
import PpcA from "../assets/services/PpcA.png";
import Seo from "../assets/services/Seo.png";
import Smm from "../assets/services/Smm.png";

import { useState, useEffect } from "react";
import ServicesItem from "./ServicesItem";
import { ReactComponent as Illustration } from "../assets/services/Illustration.svg";
import ReusableButton from "./ReusableButton";
import PropTypes from "prop-types";

Services.propTypes = {
  colors: PropTypes.object,
};

function Services({ colors }) {
  const [smallW, setSmallW] = useState(true);
  const blackColor = "#000000";

  const services = [
    {
      title1: "Search engine",
      title2: "optimization",
      src: Seo,
      bgColor: colors.main,
      hBgColor: colors.main,
      hColor: blackColor,
      bBgColor: blackColor,
      bColor: colors.main,
    },
    {
      title1: "Pay-per-click",
      title2: "advertising",
      src: PpcA,
      bgColor: colors.main,
      hBgColor: colors.gray,
      hColor: blackColor,
      bBgColor: blackColor,
      bColor: colors.main,
    },
    {
      title1: "Social Media",
      title2: "Marketing",
      src: Smm,
      bgColor: colors.dark,
      hBgColor: colors.gray,
      hColor: blackColor,
      bBgColor: colors.gray,
      bColor: blackColor,
    },
    {
      title1: "Email",
      title2: "Marketing",
      src: Em,
      bgColor: colors.gray,
      hBgColor: colors.main,
      hColor: blackColor,
      bBgColor: blackColor,
      bColor: colors.main,
    },
    {
      title1: "Content",
      title2: "Creation",
      src: Cc,
      bgColor: colors.main,
      hBgColor: colors.gray,
      hColor: blackColor,
      bBgColor: blackColor,
      bColor: colors.main,
    },
    {
      title1: "Analytics and",
      title2: "Tracking",
      src: Aat,
      bgColor: colors.dark,
      hBgColor: colors.gray,
      hColor: blackColor,
      bBgColor: colors.gray,
      bColor: blackColor,
    },
  ];
  useEffect(() => {
    window.innerWidth >= 1024 ? setSmallW(false) : setSmallW(true);
  }, []);
  window.addEventListener("resize", () => {
    window.innerWidth >= 1024 ? setSmallW(false) : setSmallW(true);
  });

  return (
    <div className="w-[90%] mx-auto flex flex-col justify-center items-center my-5">
      <div className="w-full flex flex-col gap-[40px] lg:flex-row lg:justify-start justify-center items-center pb-[50px]">
        <h1
          className="font-bold text-5xl py-2 px-3 rounded-xl"
          style={{ backgroundColor: colors.main }}
        >
          Services
        </h1>
        <p className="w-full text-center lg:text-start">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      {/* <ServicesItems colors={colors} /> */}
      <div className="grid w-full gap-10 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        {services.map((elem, index) => {
          return <ServicesItem elem={elem} colors={colors} key={index + 1} />;
        })}
      </div>
      <div className="w-full bg-gray-200 h-[400px] flex justify-between gap-12 py-10 px-[10%] sm:px-12 mt-[80px] rounded-[45px]">
        <div className="flex flex-col items-start justify-between sm:px-[50px] md:py-[30px]">
          <h1 className="font-medium text-2xl sm:text-4xl">
            Let’s make things happen
          </h1>
          <p className="leading-7">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <ReusableButton
            className={"w-full lg:w-[288px] h-[68px]"}
            title="Get your proposal"
            bgColor={colors.dark}
            textColor={"#FFFFFF"}
            circleBgColor={colors.main}
            hoverTextColor={colors.dark}
          />
          {/* <button 
						style={{backgroundColor: colors.dark}}
						className="text-white w-full lg:w-[288px] h-[68px] rounded-xl">Get your proposal</button> */}
        </div>
        {!smallW && (
          <div className="relative w-[70%]">
            <Illustration className="absolute right-[-120px] top-[-35px]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
