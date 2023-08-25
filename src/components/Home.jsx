import HomeIllustration from './HomeIllustration';
import { useEffect, useState } from 'react';
import Brands from './Brands'

function Home( {mainColor} ) {
	const [smallW, setSmallW] = useState(true);
	useEffect(() => {
		window.innerWidth >= 1280 ? setSmallW(false) : setSmallW(true)
	}, []);
	window.addEventListener('resize', () => {
		window.innerWidth >= 1280 ? setSmallW(false) : setSmallW(true);
	});

	return (
		<div className='py-[20px] flex flex-col justify-center items-center'>
			<div className="w-[90%] lg:w-[80%] mx-auto flex justify-center xl:justify-between items-center lg:h-[80vh]">
				<div className='py-[20px] flex flex-col justify-center xl:items-start items-center xl:w-[50%] md:max-xl:text-center'>
					<p className="text-4xl 2xl:lg:leading-[2.5] lg:text-5xl 2xl:text-7xl font-medium leading-normal lg:leading-[1.3]">Navigating the digital landscape for success</p>
					{smallW && <HomeIllustration mainColor={ mainColor }/>}
					<p className='lg:text-lg lg-py[50px]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
					<button className='w-full md:w-[264px] bg-black height h-[68px] my-[40px] text-white rounded-2xl'>Book a consultation</button>
				</div>
				{!smallW && <HomeIllustration mainColor={ mainColor }/>}
			</div>
			<Brands/>
		</div>
	);
}

export default Home;