import { ReactComponent as MainIcon } from '../assets/Group.svg';
import { ReactComponent as Icon1 } from '../assets/Icon-1.svg';
import { ReactComponent as Icon2 } from '../assets/Icon-2.svg';
import { ReactComponent as Icon3 } from '../assets/Icon-3.svg';
import { ReactComponent as Icon4 } from '../assets/Icon-4.svg';
import { ReactComponent as Circle } from '../assets/circle.svg';
import { ReactComponent as Ellipse } from '../assets/Ellipse.svg';
import { ReactComponent as Frame } from '../assets/Frame.svg';

function HomeIllustration( {mainColor}) {
	return (
		<div className="relative h-[230px] mb-[130px] mt-[50px] xl:mr-[100px] lg:scale-125 2xl:scale-150">
			<Circle className="absolute top-[50px] left-[-40px] z-[-1]" />
			<Circle className="absolute top-[75px] left-[-55px] z-[-1]" />
			<Circle className="absolute top-[100px] left-[-70px] z-[-1]" />
			<Icon1 className="absolute top-[-2px] right-[-60px]" />
			<Icon2 className="absolute top-[60px] right-[-55px]" />
			<Icon3 className="absolute top-[120px] right-[-45px]" />
			<Icon4 className="absolute top-[-10px] right-[-5px]" />
			<Ellipse className="absolute top-[27px] left-[-50px] fill-[black]" />
			<Ellipse className='absolute top-[50px] left-[-20px] w-[25px]' style={{ fill: mainColor }} />
			<Ellipse className={`absolute top-[238px] right-[40px] w-[15px] fill-black`} style={{ fill: mainColor }} />
			<Frame className="absolute top-[186px] left-[-53px]" />
			<Frame className="absolute top-[230px] left-[83px] w-[30px] rotate-45" />
			<MainIcon className="w-[206px] h-[222px] z-10" />
		</div>
	)
}

export default HomeIllustration;