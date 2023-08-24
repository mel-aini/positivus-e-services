import { useState } from 'react'
import Header from './components/header'
import Home from './components/Home'
import './style.scss'

function App() {
	const mainColor = '#B9FF66';
	
	return (
		<div>
			{/* <span>world</span> */}
			<Header />
			<Home mainColor={ mainColor }/>
		</div>
	)
}

export default App
