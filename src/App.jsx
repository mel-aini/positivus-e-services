import { useState } from 'react'
import Header from './components/header'
import Home from './components/Home'
import './style.scss'
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import OurWorkingProcess from './components/OurWorkingProcess';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactUS from './components/ContacUs';

function App() {
	const mainColor = '#B9FF66';
	const darkColor = '#191A23';
	const grayColor = '#EEEEEE';
	
	return (
		<div className='container mx-auto'>
			{/* <span>world</span> */}
			<Header mainColor={ mainColor }/>
			<Home mainColor={ mainColor }/>
			<Services mainColor={ mainColor }/>
			<CaseStudies mainColor={ mainColor } darkColor={ darkColor }/>
			<OurWorkingProcess mainColor={ mainColor } grayColor={ grayColor }/>
			<Team mainColor={ mainColor } grayColor={ grayColor }/>
			<Testimonials mainColor={ mainColor } grayColor={ grayColor } darkColor={ darkColor }/>
			<ContactUS mainColor={ mainColor } grayColor={ grayColor } darkColor={ darkColor }/>
		</div>
	)
}

export default App
