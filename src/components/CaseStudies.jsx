import { FaArrowLeft } from "react-icons/fa6";

function CaseStudies({ mainColor }) {
    return (
        <div className="w-[90%] mx-auto my-5">
            <div className="w-full flex flex-col gap-[40px] lg:flex-row justify-center lg:justify-start items-center py-[50px]">
                <div className="flex flex-col lg:flex-row items-center lg:items-start font-bold text-5xl lg:rounded-xl lg:bg-[#B9FF66]">
                    <h1 className="py-2 px-3 rounded-xl" style={{backgroundColor: mainColor}}>Case</h1>
                    <h1 className="py-2 px-3 rounded-xl w-fit" style={{backgroundColor: mainColor}}>Studies</h1>
                </div>
				<p className="w-full text-center lg:text-start">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
            <div className="w-full overflow-auto flex flex-nowrap lg:rounded-[45px] lg:bg-black lg:justify-center lg:items-center lg:py-[60px] lg:px-10">
                <div className="flex flex-col justify-center min-w-[280px] min-h-[300px] lg:min-h-0 px-10 py-10 lg:py-0 bg-black text-white rounded-[45px]">
                    <p className="mb-5">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <div className="flex items-center gap-2" style={{color: mainColor}}>
                        <span>Learn more</span>
                        <FaArrowLeft className="rotate-[155deg]"/>
                    </div>
                </div>
                <span className="hidden lg:block min-h-[200px] bg-white w-1"></span>
                <div className="flex flex-col justify-center min-w-[280px] mx-5 lg:mx-0 min-h-[30lg:min-h-0 0px] px-10 py-10 lg:py-0 bg-black text-white rounded-[45px]">
                    <p className="mb-5">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <div className="flex items-center gap-2" style={{color: mainColor}}>
                        <span>Learn more</span>
                        <FaArrowLeft className="rotate-[155deg]"/>
                    </div>
                </div>
                <span className="hidden lg:block min-h-[200px] bg-white w-1"></span>
                <div className="flex flex-col justify-center min-w-[280px] min-h-[300px] lg:min-h-0 px-10 py-10 lg:py-0 bg-black text-white rounded-[45px]">
                    <p className="mb-5">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <div className="flex items-center gap-2" style={{color: mainColor}}>
                        <span>Learn more</span>
                        <FaArrowLeft className="rotate-[155deg]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies;