import { FaArrowLeft } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

ServicesItem.propTypes = {
  elem: PropTypes.object,
  colors: PropTypes.object,
};

function ServicesItem({ elem, colors }) {
  const [scale, setScale] = useState(0);
  const [btnScale, setBtnScale] = useState(1);
  const [arrowColor, setArrowColor] = useState(elem.bColor);
  const [spanOpacity, setSpanOpacity] = useState(0);
  const contRef = useRef(null);
  const spanSize = 40;
  const [spanPos, setSpanPos] = useState({ left: 0, bottom: 0 });

  const getbgColor = () => {
    if (elem.bgColor == colors.main) return colors.gray;
    if (elem.bgColor == colors.dark) return colors.main;
    if (elem.bgColor == colors.gray) return colors.main;
  };
  const spanBgColor = getbgColor();
  useEffect(() => {
    setSpanPos({
      left: window.getComputedStyle(contRef.current).paddingLeft,
      bottom: window.getComputedStyle(contRef.current).paddingBottom,
    });
  }, []);
  return (
    <div
      ref={contRef}
      style={{ backgroundColor: elem.bgColor }}
      className="relative shadow-[0_8px] shadow-black w-full border-[1px] border-black border-solid flex flex-col items-center justify-center px-12 py-9 rounded-[45px] overflow-hidden"
    >
      <span
        style={{
          transform: `scale(${scale})`,
          backgroundColor: spanBgColor,
          width: spanSize,
          height: spanSize,
          left: spanPos.left,
          bottom: spanPos.bottom,
          opacity: spanOpacity,
        }}
        className="z-0 absolute bg-blue-500 rounded-full duration-500 ease-out"
      ></span>
      <h1
        style={{ backgroundColor: elem.hBgColor, color: elem.hColor }}
        className="z-10 self-start text-2xl px-[5px] font-medium rounded-lg"
      >
        {elem.title1}
      </h1>
      <h1
        style={{ backgroundColor: elem.hBgColor, color: elem.hColor }}
        className="z-10 self-start text-2xl px-[5px] font-medium bg-[#eee] rounded-lg"
      >
        {elem.title2}
      </h1>
      <div className="z-10 flex w-full justify-between items-end mt-12">
        <div
          style={{ transform: `scale(${btnScale})` }}
          className="overflow-hidden w-[40px] h-[40px] p-[5px] cursor-pointer rounded-3xl relative duration-500 ease-out"
        >
          <FaArrowLeft
            onMouseEnter={() => {
              setScale(30);
              setSpanOpacity(2);
              setBtnScale(1.1);
              spanBgColor == colors.main && elem.bBgColor == colors.gray
                ? setArrowColor(colors.dark)
                : setArrowColor(spanBgColor);
            }}
            onMouseLeave={() => {
              setScale(1);
              setSpanOpacity(0);
              setBtnScale(1);
              setArrowColor(elem.bColor);
            }}
            style={{
              backgroundColor: elem.bBgColor,
              color: arrowColor,
            }}
            className="text-2xl rotate-[135deg] bg-[#eee] w-[40px] h-[40px] p-[5px] absolute top-0 left-0 duration-500 ease-out"
          />
        </div>
        <img src={elem.src} />
      </div>
    </div>
  );
}

export default ServicesItem;
