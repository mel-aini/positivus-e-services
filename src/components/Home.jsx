import HomeIllustration from './HomeIllustration';
import { useEffect, useState } from 'react';
import Brands from './Brands'

function Home( {mainColor} ) {
	const [smallW, setSmallW] = useState(true);
	useEffect(() => {
		window.innerWidth >= 768 ? setSmallW(false) : setSmallW(true)
	}, []);
	window.addEventListener('resize', () => {
		window.innerWidth >= 768 ? setSmallW(false) : setSmallW(true);
	});

	return (
		<div className='py-[20px] flex flex-col justify-center items-center mb-5'>
			<div className="w-[90%] mx-auto flex justify-center xl:justify-between items-center xl:h-[80vh] sm-h:h-fit">
				<div className='py-[20px] flex flex-col justify-center items-center md:items-start xl:w-[50%] sm:text-center md:text-left'>
					<p className=" text-4xl leading-normal lg:!leading-[1.5] xl:text-5xl 2xl:text-7xl font-medium lg:mb-10">Navigating the digital landscape for success</p>
					{smallW && <HomeIllustration mainColor={ mainColor }/>}
					<p className='lg:text-lg '>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
					<button className='w-full md:w-[264px] bg-black height h-[68px] my-[40px] text-white rounded-2xl'>Book a consultation</button>
				</div>
				{!smallW && <HomeIllustration mainColor={ mainColor }/>}
			</div>
			<Brands/>
		</div>
	);
}

export default Home;