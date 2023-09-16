import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";

Process.propTypes = {
  index: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  colors: PropTypes.object,
};

function Process({ index, title, paragraph, colors }) {
  const [expand, setExpand] = useState(false);
  const [heightExpand, setHeightExpand] = useState("115px");
  const [bgColor, setBgColor] = useState(colors.gray);
  const [visibility, setVisibility] = useState(0);
  const divRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => {
      expand && divRef
        ? setHeightExpand(115 + divRef.current.offsetHeight + 25)
        : setHeightExpand("115px");
    });
  }, []);

  return (
    <div
      className="process w-full shadow-[0_5px] shadow-black rounded-[45px] py-10 px-8 duration-300 ease-out overflow-hidden border-[1px] border-black border-solid"
      style={{
        backgroundColor: bgColor,
        maxHeight: heightExpand,
        zIndex: index,
      }}
    >
      <div className="flex justify-between items-center relative">
        <div className="flex justify-between items-center gap-5">
          <span className="font-bold text-2xl sm:text-3xl">{index}</span>
          <h1 className="font-bold text-sm sm:text-lg sm-h:absolute top-[50%] left-[15%] sm-h:translate-y-[-50%] sm-h:max-w-[60%]">
            {title}
          </h1>
        </div>
        <span
          style={{ backgroundColor: colors.gray }}
          onClick={(e) => {
            let expandBtns = document.querySelectorAll(".expand-btn");
            let processBottoms = document.querySelectorAll(".process .bottom");
            const firstPathELem = e.target.querySelector("svg path");
            expandBtns.forEach((elem, index) => {
              if (
                window
                  .getComputedStyle(processBottoms[index])
                  .getPropertyValue("opacity") == 1
              )
                elem.click();
            });
            if (expand) {
              setExpand(false);
              setBgColor(colors.gray);
              setHeightExpand("115px");
              setVisibility(0);
              firstPathELem.style.rotate = "0deg";
            } else {
              setExpand(true);
              setBgColor(colors.main);
              if (divRef) {
                setHeightExpand(115 + divRef.current.offsetHeight + 25);
              }
              setVisibility(1);
              firstPathELem.style.rotate = "90deg";
            }
          }}
          className="expand-btn cursor-pointer font-bold min-w-[35px] min-h-[35px] rounded-[50%] border-2 border-solid border-black flex justify-center items-center"
        >
          <AiOutlinePlus className="text-xl" />
        </span>
      </div>
      <div
        ref={divRef}
        className="bottom duration-300 ease-in"
        style={{ opacity: visibility }}
      >
        <hr className="border-black my-5" />
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

OurWorkingProcess.propTypes = {
  colors: PropTypes.object,
};

function OurWorkingProcess({ colors }) {
  const processes = [
    {
      index: "01",
      title: "Consultation",
      paragraph:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      index: "02",
      title: "Research and Strategy Development",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis neque, quas placeat deserunt dolor molestias magni expedita illum quo.",
    },
    {
      index: "03",
      title: "Implementation",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis neque, quas placeat deserunt dolor molestias magni expedita illum quo.",
    },
    {
      index: "04",
      title: "Monitoring and Optimization",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis neque, quas placeat deserunt dolor molestias magni expedita illum quo.",
    },
    {
      index: "05",
      title: "Reporting and Communication",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis neque, quas placeat deserunt dolor molestias magni expedita illum quo.",
    },
    {
      index: "06",
      title: "Continual Improvement",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis neque, quas placeat deserunt dolor molestias magni expedita illum quo.",
    },
  ];

  useEffect(() => {
    const firstPathELem = document.querySelectorAll(".expand-btn svg");
    firstPathELem.forEach((elem) => {
      const elemPath = elem.querySelector("path");
      elemPath.classList.add("duration-300");
      elemPath.classList.add("origin-center");
      elemPath.classList.add("ease-in-out");
    });
  }, []);

  return (
    <div className="w-[90%] mx-auto my-5 sm:mt-16">
      <div className="w-full flex flex-col gap-[40px] lg:flex-row justify-center lg:justify-start items-center py-[50px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start font-bold text-5xl lg:rounded-xl lg:bg-[#B9FF66]">
          <h1
            className="py-2 px-3 rounded-xl"
            style={{ backgroundColor: colors.main }}
          >
            Our Working
          </h1>
          <h1
            className="py-2 px-3 rounded-xl w-fit"
            style={{ backgroundColor: colors.main }}
          >
            Process
          </h1>
        </div>
        <p className="w-full lg:max-w-[240px] text-center lg:text-start">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {processes.map((elem) => {
          return (
            <Process
              index={elem.index}
              title={elem.title}
              paragraph={elem.paragraph}
              key={elem.index}
              colors={colors}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OurWorkingProcess;
