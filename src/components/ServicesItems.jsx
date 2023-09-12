import { useEffect, useState } from "react";
import Aat from '../assets/services/Aat.png';
import Cc from '../assets/services/Cc.png';
import Em from '../assets/services/Em.png';
import PpcA from '../assets/services/PpcA.png';
import Seo from '../assets/services/Seo.png';
import Smm from '../assets/services/Smm.png';
import { FaArrowLeft } from "react-icons/fa6";

const Icon = () => {
	return (
		<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_315_586)">
				<path d="M41.2104 19.9769L60.1571 30.3002L41.2104 40.7064L30.8457 59.6116L20.481 40.7064L1.53428 30.3002L20.481 19.9769L30.8457 0.98877L41.2104 19.9769Z" fill="black" stroke="white" stroke-miterlimit="10" />
			</g>
			<defs>
				<clipPath id="clip0_315_586">
					<rect width="42.3321" height="42.3321" fill="white" transform="translate(30.8457 0.408203) rotate(45)" />
				</clipPath>
			</defs>
		</svg>
	)
}

function ServicesItems({ colors }) {
	const blackColor = "#000000";

	const services = [
		{ title1: "Search engine", title2: 'optimization', src: Seo, bgColor: colors.main, hBgColor: colors.main, hColor: blackColor, bBgColor: blackColor, bColor: colors.main },
		{ title1: "Pay-per-click", title2: 'advertising', src: PpcA, bgColor: colors.main, hBgColor: colors.gray, hColor: blackColor, bBgColor: blackColor, bColor: colors.main },
		{ title1: "Social Media", title2: 'Marketing', src: Smm, bgColor: colors.dark, hBgColor: colors.gray, hColor: blackColor, bBgColor: colors.gray, bColor: blackColor },
		{ title1: "Email", title2: 'Marketing', src: Em, bgColor: colors.gray, hBgColor: colors.main, hColor: blackColor, bBgColor: blackColor, bColor: colors.main },
		{ title1: "Content", title2: 'Creation', src: Cc, bgColor: colors.main, hBgColor: colors.gray, hColor: blackColor, bBgColor: blackColor, bColor: colors.main },
		{ title1: "Analytics and", title2: 'Tracking', src: Aat, bgColor: colors.dark, hBgColor: colors.gray, hColor: blackColor, bBgColor: colors.gray, bColor: blackColor }
	];

	return (
		<div className="grid w-full gap-10 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
			{services.map(({ title1, title2, src, bgColor, hBgColor, hColor, bBgColor, bColor }, index) => {
				// console.log(src);
				return (
					<div style={{ backgroundColor: bgColor }} className={`shadow-[0_8px] shadow-black w-full border-[1px] border-black border-solid flex flex-col items-center justify-center px-12 py-9 rounded-[45px]`} key={index + 1}>
						<h1 style={{ backgroundColor: hBgColor, color: hColor }} className="self-start text-2xl px-[5px] font-medium rounded-lg">{title1}</h1>
						<h1 style={{ backgroundColor: hBgColor, color: hColor }} className="self-start text-2xl px-[5px] font-medium bg-[#eee] rounded-lg">{title2}</h1>
						<div className="flex w-full justify-between items-end mt-12">
							<FaArrowLeft style={{ backgroundColor: bBgColor, color: bColor }} className="text-2xl rotate-[135deg] bg-[#eee] rounded-3xl w-[40px] h-[40px] p-[5px]" />
							<img src={src} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ServicesItems;