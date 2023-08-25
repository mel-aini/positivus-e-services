import { useState } from "react";
import { ReactComponent as Aat } from '../assets/services/Aat.svg';
import { ReactComponent as Cc } from '../assets/services/Cc.svg';
import { ReactComponent as Em } from '../assets/services/Em.svg';
import { ReactComponent as PpcA } from '../assets/services/PpcA.svg';
import { ReactComponent as Seo } from '../assets/services/Seo.svg';
import { ReactComponent as Smm } from '../assets/services/Smm.svg';
import { FaArrowLeft } from "react-icons/fa6";

function ServicesItems() {
	const mainColor = "#B9FF66";
	const grayColor = "#F3F3F3";
	const blackColor = "#000000";

	const services = [
		["Search engine", 'optimization', mainColor, mainColor, blackColor, blackColor, mainColor, Seo],
		["Pay-per-click", 'advertising', mainColor, grayColor, blackColor, blackColor, mainColor, PpcA],
		["Social Media", 'Marketing', blackColor, grayColor, blackColor, grayColor, blackColor, Smm],
		["Email", 'Marketing', grayColor, mainColor, blackColor, blackColor, mainColor, Em],
		["Content", 'Creation', mainColor, grayColor, blackColor, blackColor, mainColor, Cc],
		["Analytics and", 'Tracking', blackColor, grayColor, blackColor, grayColor, blackColor, Aat]
	];

	return (
		<div className="grid w-full gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
			{ services.map((elem, index) => {
				return (
					<div style={{backgroundColor: elem[2]}} className={`shadow-[0_8px] shadow-black w-full border-[1px] border-black border-solid flex flex-col items-center justify-center px-12 py-9 rounded-[45px]`} key={ index + 1 }>
						<h1 style={{backgroundColor: elem[3], color: elem[4]}} className="self-start text-2xl px-[5px] font-medium rounded-lg">{ elem[0] }</h1>
						<h1 style={{backgroundColor: elem[3], color: elem[4]}} className="self-start text-2xl px-[5px] font-medium bg-[#eee] rounded-lg">{ elem[1] }</h1>
						<div className="flex w-full justify-between items-end mt-12">
							<FaArrowLeft style={{backgroundColor: elem[5], color: elem[6]}} className="text-2xl rotate-[135deg] bg-[#eee] rounded-3xl w-[40px] h-[40px] p-[5px]"/>
							<Aat />
							{/* {return (
								<>
									{ elem[2]}
								</>
							)} */}
						</div>
					</div>
				);
				})
			}
		</div>
	);
}

export default ServicesItems;