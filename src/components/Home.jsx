import HomeIllustration from './HomeIllustration';
import { useState } from 'react';

function Home( {mainColor} ) {
	const [smallW, setSmallW] = useState(true);
	return (
		<div className={`sm:${() => {setSmallW(false)}} w-[90%] mx-auto py-[20px] flex flex-col justify-center items-center`}>
			<p className="text-4xl font-medium leading-normal">Navigating the digital landscape for success</p>
			{smallW && <HomeIllustration mainColor={ mainColor }/>}
			<p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
			<button className='w-full bg-black height h-[68px] my-[40px] text-white rounded-2xl'>Book a consultation</button>
			<div>
				{/* // logos */}
			</div>
			{/* {!smallW && <HomeIllustration mainColor={ mainColor }/>} */}
		</div>
	);
}

export default Home;