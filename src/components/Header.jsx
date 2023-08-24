import { HiOutlineMenu } from "react-icons/hi";
import { ReactComponent as Logo } from '../assets/PositivusBlack.svg';
import { useEffect, useState } from 'react';


function Header() {
	const [list, setList] = useState(true);
	useEffect(() => {
		window.innerWidth >= 1200 ? setList(true) : setList(false);
	}, []);

	window.addEventListener('resize', () => {
		window.innerWidth >= 1200 ? setList(true) : setList(false);
	});

	return (
		<div className="w-[90%] lg:w-[80%] mx-auto flex justify-between items-center py-[10px] lg:py-[50px]">
			{/* <img src={ BlackLogo } alt="Your SVG" /> */}
			<Logo className='w-[144px]'/>
			{!list && <HiOutlineMenu className="text-3xl"/> }
			{list &&  <ul className="flex items-center">
				<li>About us</li>
				<li className="ml-[20px]">Services</li>
				<li className="ml-[20px]">Use Cases</li>
				<li className="ml-[20px]">Pricing</li>
				<li className="ml-[20px]">Blog</li>
				<button className="ml-[20px] border-[1px] border-solid border-black h-[68px] w-[231px] rounded-2xl">Request a quote</button>
			</ul> }
		</div>
	);
}

export default Header;