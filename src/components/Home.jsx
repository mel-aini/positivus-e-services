import HomeIllustration from "./HomeIllustration";
import { useEffect, useState, useRef } from "react";
import Brands from "./Brands";
import { motion } from "framer-motion";
import ReusableButton from "./ReusableButton";

function Home({ colors }) {
  const [smallW, setSmallW] = useState(true);
  let [dictionary, setDictionary] = useState("");

  useEffect(() => {
    window.innerWidth >= 768 ? setSmallW(false) : setSmallW(true);
    window.addEventListener("resize", () => {
      window.innerWidth >= 768 ? setSmallW(false) : setSmallW(true);
    });
  }, []);

  useEffect(() => {
    titleAnimation();
  }, []);

  const titleAnimation = () => {
    const str =
      "Our digital marketing agency helps businesses grow and succeed \
    online through a range of services including SEO, PPC, social media \
    marketing, and content creation.";
    let tmp = "";
    let i = 0;
    let id = setInterval(frame, 20);
    function frame() {
      if (i === str.length) clearInterval(id);
      else {
        tmp = tmp + str[i];
        setDictionary(tmp);
        i++;
      }
    }
  };
  return (
    <div className="Home py-[20px] flex flex-col justify-center items-center mb-5">
      <div className="w-[90%] mx-auto flex justify-center xl:justify-between items-center md:h-[80vh] sm-h:h-fit">
        <div className="py-[20px] flex flex-col justify-center items-center md:items-start xl:w-[50%] sm:text-center md:text-left">
          <motion.p
            // initial={{x: 50, opacity: 0}}
            // animate={{x: 0, opacity: 1}}
            // transition={{delay: 0.5, duration: 1.5}}
            className=" text-4xl leading-normal lg:!leading-[1.5] xl:text-5xl 2xl:text-7xl font-medium md:mb-10"
          >
            Navigating the digital landscape for success
          </motion.p>
          {smallW && <HomeIllustration colors={colors} />}
          <p className="lg:text-lg ">{dictionary}</p>
          <ReusableButton
            className={
              "w-full md:w-[264px] height h-[68px] my-[40px] text-white"
            }
            title="Book a consultation"
            bgColor={colors.dark}
            textColor={"#FFFFFF"}
            circleBgColor={colors.main}
            hoverTextColor={colors.dark}
          />
        </div>
        {!smallW && <HomeIllustration colors={colors} />}
      </div>
      <Brands />
    </div>
  );
}

export default Home;
