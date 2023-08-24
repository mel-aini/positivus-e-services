import { HiOutlineMenu } from "react-icons/hi";
import { ReactComponent as Logo } from '../assets/PositivusBlack.svg'

function Header() {
	return (
		<div className="w-[90%] mx-auto flex justify-between items-cente py-[10px]">
			{/* <img src={ BlackLogo } alt="Your SVG" /> */}
			<Logo className='w-[144px]'/>
			<HiOutlineMenu className="text-3xl"/> 
		</div>
	);
}

export default Header;