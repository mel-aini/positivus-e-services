import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { ReactComponent as Frame } from "../assets/Frame.svg";

let cRef;

function Comment({ elem, colors }) {
  cRef = useRef();

  return (
    <div
      ref={cRef}
      className="comment text-white mb-[80px] min-w-[250px] sm:min-w-[400px] lg:min-w-[600px]"
    >
      <div
        style={{ border: `1px solid ${colors.main}` }}
        className="p-5 sm:p-10 rounded-3xl relative"
      >
        {elem.comment}
        <div
          className="absolute bottom-[-15px] left-[10%] w-[30px] h-[30px] rotate-[45deg] border-[1px] border-solid"
          style={{
            borderColor: `transparent ${colors.main} ${colors.main} transparent`,
            backgroundColor: colors.dark,
          }}
        >
          <div className="relative w-full h-full rotate-[-45deg]">
            <div className="absolute bottom-[-70px] left-[50%] min-w-[250px]">
              <h1 className="text-sm font-bold" style={{ color: colors.main }}>
                {elem.client}
              </h1>
              <h2 className="text-sm">{elem.role}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials({ colors }) {
  const [trans, setTrans] = useState(0);
  const contRef = useRef();
  const circlesRef = useRef();
  const parentRef = useRef();
  const [index, setIndex] = useState(2);
  const indexRef = useRef(index);
  const startX = useRef(0);
  const startTrans = useRef(trans);
  const [leftArr, setLeftArr] = useState(1);
  const [rightArr, setRightArr] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const centerlize = () => {
    const comment = window.getComputedStyle(document.querySelector(".comment"));
    let parent;
    if (parentRef) parent = window.getComputedStyle(parentRef.current);
    const parentWidth =
      parseFloat(parent.getPropertyValue("width")) -
      parseFloat(parent.getPropertyValue("padding-left")) * 2;
    const commentWidth = parseFloat(comment.getPropertyValue("width"));
    const incr = (cRef.current.clientWidth + 50) * indexRef.current;
    setTrans(parentWidth / 2 - commentWidth / 2 - incr + "px");
  };

  useEffect(() => {
    window.addEventListener("resize", centerlize);
    centerlize();
  }, []);

  useEffect(() => {
    let allChilds = [...circlesRef.current.children];
    allChilds.forEach((element) => {
      element.style.fill = "white";
    });
    allChilds[index].style.fill = colors.main;
    index == comments.length - 1 ? setRightArr(0.5) : setRightArr(1);
    index == 0 ? setLeftArr(0.5) : setLeftArr(1);
  }, [index]);

  const commentTxt =
    '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."';
  const comments = [
    {
      client: "John Smith",
      role: "Marketing Director at XYZ Corp",
      comment: commentTxt,
    },
    {
      client: "John Smith",
      role: "Marketing Director at XYZ Corp",
      comment: commentTxt,
    },
    {
      client: "John Smith",
      role: "Marketing Director at XYZ Corp",
      comment: commentTxt,
    },
    {
      client: "John Smith",
      role: "Marketing Director at XYZ Corp",
      comment: commentTxt,
    },
    {
      client: "John Smith",
      role: "Marketing Director at XYZ Corp",
      comment: commentTxt,
    },
  ];

  const forward = () => {
    if (index < comments.length - 1) {
      const incr = cRef.current.clientWidth + 50;
      setTrans(parseFloat(trans) - incr + "px");
      setIndex(index + 1);
      indexRef.current = index + 1;
    }
  };
  const backward = () => {
    if (index > 0) {
      const incr = cRef.current.clientWidth + 50;
      setIndex(index - 1);
      indexRef.current = index - 1;
      setTrans(parseFloat(trans) + incr + "px");
    }
  };

  const dragStart = (pageX) => {
    setIsDragging(true);
    startX.current = pageX;
    startTrans.current = trans;
    contRef.current.classList.add("dragging");
  };

  const dragStop = (pageX) => {
    setIsDragging(false);
    if (indexRef.current == 0 && pageX - startX.current > 0) {
      return;
    } else if (
      indexRef.current == comments.length - 1 &&
      pageX - startX.current < 0
    ) {
      return;
    }
    if (pageX - startX.current > 30) {
      setIndex(index - 1);
      indexRef.current = index - 1;
    } else if (pageX - startX.current < -30) {
      setIndex(index + 1);
      indexRef.current = index + 1;
    }
    centerlize();
    contRef.current.classList.remove("dragging");
  };

  const dragging = (pageX) => {
    if (!isDragging) return;
    const newPos = parseFloat(trans) + pageX - startX.current;
    if (indexRef.current == 0 && pageX - startX.current > 0) {
      setIsDragging(false);
      return;
    }
    if (indexRef.current == comments.length - 1 && pageX - startX.current < 0) {
      setIsDragging(false);
      return;
    }
    if (Math.abs(pageX - startX.current) > 40) {
      setIsDragging(false);
      setTrans(parseFloat(startTrans) + "px");
      return;
    }
    setTrans(newPos + "px");
  };

  return (
    <div className="w-[90%] mx-auto flex flex-col justify-center items-center my-5 sm:mt-16">
      <div className="w-full flex flex-col gap-[40px] lg:flex-row lg:justify-start justify-center items-center py-[50px]">
        <h1
          className="font-bold text-5xl py-2 px-3 rounded-xl"
          style={{ backgroundColor: colors.main }}
        >
          Testimonials
        </h1>
        <p className="w-full text-center lg:text-start">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div
        ref={parentRef}
        style={{ backgroundColor: colors.dark }}
        className="w-full flex flex-col gap-14 sm:gap-20 pt-10 pb-5 sm:pt-[100px] rounded-[45px] overflow-hidden"
      >
        <div
          ref={contRef}
          onTouchMove={(e) => {
            dragging(e.changedTouches[0].pageX);
          }}
          onTouchStart={(e) => {
            dragStart(e.changedTouches[0].pageX);
          }}
          onTouchEnd={(e) => {
            dragStop(e.changedTouches[0].pageX);
          }}
          onMouseDown={(e) => {
            dragStart(e.pageX);
          }}
          onMouseUp={(e) => dragStop(e.pageX)}
          onMouseMove={(e) => {
            dragging(e.pageX);
          }}
          className="contRef flex flex-nowrap gap-[50px] duration-500 ease-out"
          style={{ transform: `translateX(${trans})` }}
        >
          {comments.map((elem, index) => {
            return <Comment elem={elem} colors={colors} key={index} />;
          })}
        </div>
        <div className="arrows flex justify-between items-center max-w-[250px] w-[80%] sm:max-w-[400px] lg:max-w-[600px] mx-auto">
          <FaArrowLeft
            style={{ opacity: leftArr }}
            className="text-white cursor-pointer"
            onClick={backward}
          />
          <div ref={circlesRef} className="flex gap-2">
            <Frame className="w-[16px] rotate-45 duration-500" />
            <Frame className="w-[16px] rotate-45 duration-500" />
            <Frame className="w-[16px] rotate-45 duration-500" />
            <Frame className="w-[16px] rotate-45 duration-500" />
            <Frame className="w-[16px] rotate-45 duration-500" />
          </div>
          <FaArrowLeft
            style={{ opacity: rightArr }}
            className="text-white rotate-[180deg] cursor-pointer"
            onClick={forward}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
