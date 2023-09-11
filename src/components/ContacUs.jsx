function ContactUS({mainColor}) {
    return (
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center my-5">
			<div className="w-full flex flex-col gap-[40px] lg:flex-row lg:justify-start justify-center items-center py-[50px]">
				<h1 className="font-bold text-5xl whitespace-nowrap py-2 px-3 rounded-xl" style={{backgroundColor: mainColor}}>Contact Us</h1>
				<p className="w-full text-center lg:text-start">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
			</div>
        </div>
    )
}

export default ContactUS;