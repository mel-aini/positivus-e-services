import { useEffect, useState, useRef } from "react";

function ReusableButton({
  type,
  handler,
  className,
  bgColor,
  textColor,
  title,
  circleBgColor,
  hoverTextColor,
}) {
  const [isHover, setIsHover] = useState(0);
  const [titleColor, setTitleColor] = useState(textColor);
  const [axis, setAxis] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);
  const cirlceRef = useRef(null);

  return (
    <button
      type={type || "button"}
      onClick={handler || null}
      ref={btnRef}
      onMouseMove={(e) => {
        const pos = btnRef.current.getBoundingClientRect();
        setAxis({
          x: e.screenX - pos.x - cirlceRef.current.clientWidth / 2,
          y: e.screenY - pos.y - cirlceRef.current.clientWidth / 2,
        });
      }}
      onMouseEnter={(e) => {
        const x = window.matchMedia("(hover: hover)");
        if (x.matches) {
          setIsHover(1);
          setTitleColor(hoverTextColor || textColor);
          const pos = btnRef.current.getBoundingClientRect();
          setAxis({
            x: e.screenX - pos.x - cirlceRef.current.clientWidth / 2,
            y: e.screenY - pos.y - cirlceRef.current.clientWidth / 2,
          });
        }
      }}
      className={"relative overflow-hidden rounded-2xl " + className}
      onMouseLeave={() => {
        setIsHover(0);
        setTitleColor(textColor);
      }}
      style={{ backgroundColor: bgColor }}
    >
      <span
        style={{ color: titleColor }}
        className="relative z-[2] font-medium duration-300"
      >
        {title}
      </span>
      <span
        ref={cirlceRef}
        style={{
          left: axis.x,
          top: axis.y,
          transform: `scale(${isHover})`,
          backgroundColor: circleBgColor,
        }}
        className="hover-span absolute z-[1] w-[400px] h-[400px] rounded-full duration-300"
      ></span>
    </button>
  );
}

export default ReusableButton;
