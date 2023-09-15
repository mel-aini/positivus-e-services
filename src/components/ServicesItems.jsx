import Aat from "../assets/services/Aat.png";
import Cc from "../assets/services/Cc.png";
import Em from "../assets/services/Em.png";
import PpcA from "../assets/services/PpcA.png";
import Seo from "../assets/services/Seo.png";
import Smm from "../assets/services/Smm.png";
import { FaArrowLeft } from "react-icons/fa6";
import PropTypes from "prop-types";

ServicesItems.propTypes = {
  colors: PropTypes.object,
};

function ServicesItems({ colors }) {
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

  return (
    <div className="grid w-full gap-10 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
      {services.map(
        (
          { title1, title2, src, bgColor, hBgColor, hColor, bBgColor, bColor },
          index
        ) => {
          // console.log(src);
          return (
            <div
              style={{ backgroundColor: bgColor }}
              className={`shadow-[0_8px] shadow-black w-full border-[1px] border-black border-solid flex flex-col items-center justify-center px-12 py-9 rounded-[45px]`}
              key={index + 1}
            >
              <h1
                style={{ backgroundColor: hBgColor, color: hColor }}
                className="self-start text-2xl px-[5px] font-medium rounded-lg"
              >
                {title1}
              </h1>
              <h1
                style={{ backgroundColor: hBgColor, color: hColor }}
                className="self-start text-2xl px-[5px] font-medium bg-[#eee] rounded-lg"
              >
                {title2}
              </h1>
              <div className="flex w-full justify-between items-end mt-12">
                <FaArrowLeft
                  style={{ backgroundColor: bBgColor, color: bColor }}
                  className="text-2xl rotate-[135deg] bg-[#eee] rounded-3xl w-[40px] h-[40px] p-[5px]"
                />
                <img src={src} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default ServicesItems;
