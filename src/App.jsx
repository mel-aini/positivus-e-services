import { useState } from 'react'
import Header from './components/header'
import Home from './components/Home'
import './style.scss'
import Services from './components/Services';

function App() {
	const mainColor = '#B9FF66';
	
	return (
		<div className='container mx-auto'>
			{/* <span>world</span> */}
			<Header />
			<Home mainColor={ mainColor }/>
			<Services />
		</div>
	)
}

export default App
