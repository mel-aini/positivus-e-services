import { ReactComponent as Logo1 } from '../assets/brands/logo-0.svg';
import { ReactComponent as Logo2 } from '../assets/brands/logo-1.svg';
import { ReactComponent as Logo3 } from '../assets/brands/logo-2.svg';
import { ReactComponent as Logo4 } from '../assets/brands/logo-3.svg';
import { ReactComponent as Logo5 } from '../assets/brands/logo-4.svg';
import { ReactComponent as Logo6 } from '../assets/brands/logo-5.svg';

function Brands() {
	return (
		<div className="flex overflow-hidden">
			<Logo1 className="mx-[30px]"/>
			<Logo2 className="mx-[30px]"/>
			<Logo3 className="mx-[30px]"/>
			<Logo4 className="mx-[30px]"/>
			<Logo5 className="mx-[30px]"/>
			<Logo6 className="mx-[30px]"/>
		</div>
	);
}

export default Brands;