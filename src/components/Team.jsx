import { useState, useEffect } from "react";

function Member({ elem, mainColor, grayColor }) {
	return (
		<div className="flex flex-col gap-4 rounded-[45px] py-10 px-8 border-[1px] border-solid border-black shadow-[0_5px] shadow-black">
            <div className="flex justify-start items-end gap-2 relative">
                {/* <span></span> */}
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold">{ elem.name }</h1>
                    <h3>{ elem.slug }</h3>
                </div>
                <span className="absolute top-0 right-0 w-[30px] h-[30px] font-bold rounded-[50%] bg-black flex justify-center items-center" style={{color: mainColor}}>in</span>
            </div>
            <hr className="border-[1px] border-solid border-black"/>
            <p>{ elem.bio }</p>
		</div>
	);
}

function Team({ mainColor, grayColor }) {
    const [disNbr, setDisNbr] = useState(3);
    const [btnExpand, setBtnExpand] = useState(false);
    const [btnMsg, setBtnMsg] = useState('See all team');

	useEffect(() => {
		if (window.innerWidth >= 640) setDisNbr(6);
	}, []);
	window.addEventListener('resize', () => {
        if (window.innerWidth >= 640) setDisNbr(6);
        else { setDisNbr(3); setBtnExpand(false); setBtnMsg('See all team'); }
	});

    const members = [
        {name: 'John Smith', slug: 'CEO and Founder', bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'},
        {name: 'John Smith', slug: 'CEO and Founder', bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'},
        {name: 'John Smith', slug: 'CEO and Founder', bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'},
        {name: 'John Smith', slug: 'CEO and Founder', bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'},
        {name: 'John Smith', slug: 'CEO and Founder', bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'},
        {name: 'John Smith', slug: 'CEO and Founder', bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'},
    ]
	return (
		<div className="w-[90%] mx-auto flex flex-col justify-center items-center my-5">
			<div className="w-full flex flex-col gap-[40px] lg:flex-row lg:justify-start justify-center items-center py-[50px]">
				<h1 className="font-bold text-5xl py-2 px-3 rounded-xl" style={{backgroundColor: mainColor}}>Team</h1>
				<p className="w-full text-center lg:text-start">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
			</div>
            <div className="grid w-full gap-10 grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 py-1">
                {members.map((elem, index) => {
                    if (index < disNbr) {
                        return (
                            <Member elem={elem} mainColor={ mainColor } grayColor={ grayColor } key={index}/>
                        )
                    }
                })}
                <button onClick={() => {
                    if (btnExpand) { setDisNbr(3); setBtnExpand(false); setBtnMsg('See all team'); }
                    else { setDisNbr(6); setBtnExpand(true); setBtnMsg('Show less'); }
                }} className='sm:hidden bg-black h-[60px] text-white rounded-2xl w-full'>{ btnMsg }</button>
            </div>
		</div>
	);
}

export default Team;