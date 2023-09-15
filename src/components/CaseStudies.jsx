import { FaArrowLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

CaseStudies.propTypes = {
  colors: PropTypes.object,
};

function CaseStudies({ colors }) {
  const [color, setColor] = useState("transparent");

  useEffect(() => {
    window.innerWidth >= 1024 ? setColor(colors.dark) : setColor("transparent");
    window.addEventListener("resize", () => {
      window.innerWidth >= 1024
        ? setColor(colors.dark)
        : setColor("transparent");
    });
  }, []);

  return (
    <div className="case-studies w-[90%] mx-auto my-5 sm:mt-16">
      <div className="w-full flex flex-col gap-[40px] lg:flex-row justify-center lg:justify-start items-center py-[50px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start font-bold text-5xl lg:rounded-xl lg:bg-[#B9FF66]">
          <h1
            className="py-2 px-3 rounded-xl"
            style={{ backgroundColor: colors.main }}
          >
            Case
          </h1>
          <h1
            className="py-2 px-3 rounded-xl w-fit"
            style={{ backgroundColor: colors.main }}
          >
            Studies
          </h1>
        </div>
        <p className="w-full text-center lg:text-start">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div
        style={{ backgroundColor: color }}
        className="wrapper w-full overflow-auto flex flex-nowrap lg:rounded-[45px] lg:justify-center lg:items-center lg:py-[60px] lg:px-10"
      >
        <div
          style={{ backgroundColor: colors.dark }}
          className="flex flex-col justify-center min-w-[280px] min-h-[300px] lg:min-h-0 px-10 py-10 lg:py-0 text-white rounded-[45px]"
        >
          <p className="mb-5">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div
            className="flex items-center gap-2"
            style={{ color: colors.main }}
          >
            <span>Learn more</span>
            <FaArrowLeft className="rotate-[155deg]" />
          </div>
        </div>
        <span className="hidden lg:block min-h-[200px] bg-white w-1"></span>
        <div
          style={{ backgroundColor: colors.dark }}
          className="flex flex-col justify-center min-w-[280px] mx-5 lg:mx-0 min-h-[30lg:min-h-0 0px] px-10 py-10 lg:py-0 text-white rounded-[45px]"
        >
          <p className="mb-5">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div
            className="flex items-center gap-2"
            style={{ color: colors.main }}
          >
            <span>Learn more</span>
            <FaArrowLeft className="rotate-[155deg]" />
          </div>
        </div>
        <span className="hidden lg:block min-h-[200px] bg-white w-1"></span>
        <div
          style={{ backgroundColor: colors.dark }}
          className="flex flex-col justify-center min-w-[280px] min-h-[300px] lg:min-h-0 px-10 py-10 lg:py-0 text-white rounded-[45px]"
        >
          <p className="mb-5">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div
            className="flex items-center gap-2"
            style={{ color: colors.main }}
          >
            <span>Learn more</span>
            <FaArrowLeft className="rotate-[155deg]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
