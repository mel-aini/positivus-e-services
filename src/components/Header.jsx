import { HiOutlineMenu } from "react-icons/hi";
import { ReactComponent as Logo } from '../assets/PositivusBlack.svg';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import ReusableButton from "./ReusableButton";

function Header( { colors } ) {
	// const [list, setList] = useState(false);
	const [showSideBar, setShowSideBar] = useState(false);
	const [toggleSideBar, setToggleSideBar] = useState(false);
	const [visibleNav, setVisibleNav] = useState('-100%');

	useEffect(() => {
		window.innerWidth >= 1200 ? setShowSideBar(false) : setShowSideBar(true);
		const callback = () => window.innerWidth >= 1200 ? setShowSideBar(false) : setShowSideBar(true);
		window.addEventListener('resize', callback);
		return () => window.removeEventListener('resize', callback);
	}, [showSideBar]);

	return (
		<div className="w-[90%] lg:w-[90%] mx-auto flex justify-between items-center h-[60px] sm:h-[100px] lg:h-[20vh]">
			{/* <img src={ BlackLogo } alt="Your SVG" /> */}
			<Logo className='w-[144px]' />
			{showSideBar && <HiOutlineMenu className="text-3xl cursor-pointer" onClick={() => { setVisibleNav('0px'); setToggleSideBar(true); }} />}
			{showSideBar && toggleSideBar && <div style={{ left: visibleNav }} className="duration-700 ease-in-out fixed top-0 w-[100vw] h-[100vh] z-10 bg-white flex flex-col justify-between items-center py-[20%] px-[15%]">
				<FaArrowLeft className="self-end text-2xl" onClick={() => { setVisibleNav('-100%'); setToggleSideBar(false); }} />
				<ul>
					<li className="px-6 py-3 text-lg">About us</li>
					<li className="px-6 py-3 text-lg">Services</li>
					<li className="px-6 py-3 text-lg">Use Cases</li>
					<li className="px-6 py-3 text-lg">Pricing</li>
					<li className="px-6 py-3 text-lg">Blog</li>
				</ul>
				<ReusableButton
                        className={"ml-[20px] border-[1px] border-solid border-black h-[68px] w-[231px] text-lg"}
                        title='Request a quote' bgColor={'transparent'} textColor={'#000000'} circleBgColor={colors.dark}
				/>
				{/* <button className="ml-[20px] border-[1px] border-solid border-black h-[68px] w-[231px] rounded-2xl">Request a quote</button> */}
			</div>}
			{!showSideBar && <ul className="flex items-center">
				<li className="cursor-pointer ">About us</li>
				<li className="cursor-pointer ml-[20px]">Services</li>
				<li className="cursor-pointer ml-[20px]">Use Cases</li>
				<li className="cursor-pointer ml-[20px]">Pricing</li>
				<li className="cursor-pointer ml-[20px]">Blog</li>
				<ReusableButton
                        className={"ml-[20px] border-[1px] border-solid border-black h-[68px] w-[231px]"}
                        title='Request a quote' bgColor={'transparent'} textColor={'#000000'} circleBgColor={colors.dark} hoverTextColor={'#FFFFFF'}
				/>
				{/* <button className="ml-[20px] border-[1px] border-solid border-black h-[68px] w-[231px] rounded-2xl">Request a quote</button> */}
			</ul>}
		</div>
	);
}

export default Header;