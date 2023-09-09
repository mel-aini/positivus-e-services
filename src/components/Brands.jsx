import { ReactComponent as Logo1 } from '../assets/brands/logo-0.svg';
import { ReactComponent as Logo2 } from '../assets/brands/logo-1.svg';
import { ReactComponent as Logo3 } from '../assets/brands/logo-2.svg';
import { ReactComponent as Logo4 } from '../assets/brands/logo-3.svg';
import { ReactComponent as Logo5 } from '../assets/brands/logo-4.svg';
import { ReactComponent as Logo6 } from '../assets/brands/logo-5.svg';
import { useEffect, useRef, useState } from 'react';

function Brands() {
	const [leftP, setLeftP] = useState(0);
	const child = useRef();
	const parrent = useRef();

	useEffect(() => {
		let	x1 = parseInt(getComputedStyle(child.current).getPropertyValue('left'));
		const id = setInterval(() => {
			if (x1 === -child.current.offsetWidth) {
				setLeftP(parrent.current.offsetWidth);
				x1 = parrent.current.offsetWidth;
			}
			else {
				x1--;
				setLeftP(x1);
			}
		}, 10);
	}, []);
	
	return (
		<div ref={ parrent } className="flex overflow-hidden relative w-full sm:w-[90%] py-[50px]">
			<div  ref={ child } className="flex overflow-hidden absolute top-0" style={{left: leftP}}>
				<Logo1 className="mx-[30px] lg:mx-[80px] grayscale"/>
				<Logo2 className="mx-[30px] lg:mx-[80px] grayscale"/>
				<Logo3 className="mx-[30px] lg:mx-[80px] grayscale"/>
				<Logo4 className="mx-[30px] lg:mx-[80px] grayscale"/>
				<Logo5 className="mx-[30px] lg:mx-[80px] grayscale"/>
				<Logo6 className="mx-[30px] lg:mx-[80px] grayscale"/>
			</div>
		</div>
	);
}

export default Brands;