import { useState } from 'react'
import Header from './components/header'
import Home from './components/Home'
import './style.scss'
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import OurWorkingProcess from './components/OurWorkingProcess';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

function App() {
	const mainColor = '#B9FF66';
	const grayColor = '#EEEEEE';
	
	return (
		<div className='container mx-auto'>
			{/* <span>world</span> */}
			<Header mainColor={ mainColor }/>
			<Home mainColor={ mainColor }/>
			<Services mainColor={ mainColor }/>
			<CaseStudies mainColor={ mainColor }/>
			<OurWorkingProcess mainColor={ mainColor } grayColor={ grayColor }/>
			<Team mainColor={ mainColor } grayColor={ grayColor }/>
			{/* <Testimonials mainColor={ mainColor } grayColor={ grayColor }/> */}
		</div>
	)
}

export default App
