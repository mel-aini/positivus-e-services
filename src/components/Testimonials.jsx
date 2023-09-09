import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

function Comment({ elem, mainColor, index }) {
    return (
        <div className="comment text-white mb-[70px] min-w-[250px] sm:min-w-[400px] lg:min-w-[600px]">
            <div style={{border: `1px solid ${mainColor}`}} className="p-5 sm:p-10 rounded-3xl relative">{ elem.comment }
                <div className="absolute bottom-[-15px] left-[10%] w-[30px] h-[30px] rotate-[45deg] border-[1px] border-solid bg-black" style={{borderColor: `transparent ${mainColor} ${mainColor} transparent`}}>
                    <div className="relative w-full h-full rotate-[-45deg]">
                        <div className="absolute bottom-[-60px] left-[50%] min-w-[250px]">
                            <h1 className="text-sm font-bold" style={{color: mainColor}}>{ elem.client }</h1>
                            <h2 className="text-sm">{ elem.role } | {index} </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Testimonials({ mainColor, grayColor}) {
    const [trans, setTrans] = useState(0);
    const contRef = useRef();
    const parentRef = useRef();
    const [index, setIndex] = useState(1);
    useEffect(() => {
        const comment = window.getComputedStyle(document.querySelector('.comment'));
        const parent = window.getComputedStyle(parentRef.current);
        const parentWidth = parseFloat(parent.getPropertyValue('width')) - parseFloat(parent.getPropertyValue('padding-left')) - parseFloat(parent.getPropertyValue('padding-right'));
        const commentWidth = parseFloat(comment.getPropertyValue('width'));
        setTrans(((parentWidth / 2) - (commentWidth / 2) * index) + 'px');
    }, [])

    const commentTxt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, harum? Ratione ab error perspiciatis dolore assumenda at sequi? Voluptate facilis et vel. Aspernatur debitis dolores ducimus sit! Quae, dignissimos saepe! Voluptate facilis et vel. Aspernatur debitis dolores ducimus sit! Quae, dignissimos saepe!';
    const comments = [
        {client: 'John Smith', role: 'Marketing Director at XYZ Corp', comment: commentTxt},
        {client: 'John Smith', role: 'Marketing Director at XYZ Corp', comment: commentTxt},
        {client: 'John Smith', role: 'Marketing Director at XYZ Corp', comment: commentTxt},
        {client: 'John Smith', role: 'Marketing Director at XYZ Corp', comment: commentTxt},
        {client: 'John Smith', role: 'Marketing Director at XYZ Corp', comment: commentTxt}
    ];

    const forward = () => {
        const width = parseFloat(contRef.current.getBoundingClientRect().width);
        console.log(width);
        const incr = width / comments.length;
        setTrans((parseFloat(trans) - incr) + 'px');
    }
    const backward = () => {
        // const childWidth = childRef.current.getBoundingClientRect().width;
        const width = parseFloat(contRef.current.getBoundingClientRect().width);
        const incr = width / comments.length;
        setTrans((parseFloat(trans) + incr) + 'px');
    }

    return (
		<div className="w-[90%] mx-auto flex flex-col justify-center items-center my-5">
			<div className="w-full flex flex-col gap-[40px] lg:flex-row lg:justify-start justify-center items-center py-[50px]">
				<h1 className="font-bold text-5xl py-2 px-3 rounded-xl" style={{backgroundColor: mainColor}}>Testimonials</h1>
				<p className="w-full text-center lg:text-start">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
			</div>
            <div ref={parentRef} className="bg-black w-full flex flex-col gap-10 p-5 rounded-[45px] overflow-hidden">
                <div ref={contRef} className="flex flex-nowrap gap-[50px] duration-300" style={{transform: `translateX(${0})`}}>
                    { comments.map((elem, index) => {
                        return (
                            <Comment elem={ elem } mainColor={ mainColor } index={index} key={ index }/>
                        )
                    })}
                </div>
                <div className="arrows flex justify-between items-center w-[90%]">
                    <FaArrowLeft className="text-white" onClick={backward}/>
                    <div className="flex gap-1">
                        <span className="w-[15px] h-[15px] bg-white"></span>
                        <span className="w-[15px] h-[15px] bg-white"></span>
                        <span className="w-[15px] h-[15px] bg-white"></span>
                        <span className="w-[15px] h-[15px] bg-white"></span>
                        <span className="w-[15px] h-[15px] bg-white"></span>
                    </div>
                    <FaArrowLeft className="text-white rotate-[180deg]" onClick={forward}/>
                </div>
            </div>
		</div>
	);
}

export default Testimonials;