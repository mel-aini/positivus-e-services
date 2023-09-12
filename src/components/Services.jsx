import { useState, useEffect } from "react";
import ServicesItems from "./ServicesItems";
import { ReactComponent as Illustration } from '../assets/services/Illustration.svg';

function Services({ colors }) {
	const [smallW, setSmallW] = useState(true);
	useEffect(() => {
		window.innerWidth >= 1024 ? setSmallW(false) : setSmallW(true)
	}, []);
	window.addEventListener('resize', () => {
		window.innerWidth >= 1024 ? setSmallW(false) : setSmallW(true);
	});

	return (
		<div className="w-[90%] mx-auto flex flex-col justify-center items-center my-5">
			<div className="w-full flex flex-col gap-[40px] lg:flex-row lg:justify-start justify-center items-center pb-[50px]">
				<h1 className="font-bold text-5xl py-2 px-3 rounded-xl" style={{backgroundColor: colors.main}}>Services</h1>
				<p className="w-full text-center lg:text-start">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
			</div>
			<ServicesItems colors={ colors }/>
			<div className="w-full bg-gray-200 h-[400px] flex justify-between gap-12 py-10 px-[10%] sm:px-12 mt-[80px] rounded-[45px]">
				<div className="flex flex-col items-start justify-between sm:px-[50px] md:py-[30px]">
					<h1 className="font-medium text-2xl sm:text-4xl">Let’s make things happen</h1>
					<p className="leading-7">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
					<button 
						style={{backgroundColor: colors.dark}}
						className="text-white w-full lg:w-[288px] h-[68px] rounded-xl">Get your proposal</button>
				</div>
				{!smallW && <div className="relative w-[70%]">
					<Illustration className="absolute right-[-120px] top-[-35px]"/>
				</div> }
			</div>
		</div>
	);
}

export default Services;