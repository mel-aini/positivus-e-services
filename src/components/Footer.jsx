import { ReactComponent as Logo } from '../assets/PositivusWhite.svg';
import { ReactComponent as LinkedIn } from '../assets/social/LinkedIn.svg';
import { ReactComponent as Facebook } from '../assets/social/Facebook.svg';
import { ReactComponent as Twitter } from '../assets/social/Twitter.svg';
import ReusableButton from "./ReusableButton";

function Footer( { colors } ) {
    return (
        <div className="w-[100%] font-light sm:w-[90%] mx-auto flex flex-col gap-10 lg:gap-16 justify-center items-center mt-10 text-white py-10 px-5 sm:rounded-[45px_45px_0_0] sm:mt-28" style={{backgroundColor: colors.dark}}>
            <div className='w-full lg:w-[90%] flex flex-col items-center lg:flex-row lg:justify-between gap-10'>
                <Logo className="w-[144px]" />
                <ul className='flex flex-col lg:flex-row items-center gap-4'>
                    <li className='lg:underline cursor-pointer'>About us</li>
                    <li className='lg:underline cursor-pointer'>Services</li>
                    <li className='lg:underline cursor-pointer'>Use Cases</li>
                    <li className='lg:underline cursor-pointer'>Pricing</li>
                </ul>
                <div className='hidden lg:flex justify-center gap-4'>
                    <LinkedIn className="cursor-pointer"/>
                    <Facebook className="cursor-pointer"/>
                    <Twitter className="cursor-pointer"/>
                </div>
            </div>
            <div className='w-full lg:w-[90%] lg:h-[190px] flex flex-col items-center gap-8 lg:gap-0 lg:flex-row lg:justify-between'>
                <div className='flex flex-col items-center gap-4 max-w-[270px] lg:items-start'>
                    <h1 className='font-bold rounded-lg px-2 py-[1px] mb-5' style={{backgroundColor: colors.main, color: 'black'}}>Contact us:</h1>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: 555-567-8901</p>
                    <p className='text-center lg:text-left'>Address: 1234 Main St Moonstone City, Stardust State 12345
                    </p>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()} 
                    action="" 
                    className='w-full lg:h-full p-5 lg:p-10 bg-[#292A32] flex flex-col justify-center items-center gap-5 rounded-2xl max-w-[400px] lg:flex-row lg:justify-between lg:min-w-[60%]'>
                    <input 
                        type="email" 
                        name="mail" 
                        id="mail" 
                        placeholder='Email' 
                        className="w-full border-[1px] border-solid border-white bg-transparent outline-none p-4 rounded-2xl"/>
                    {/* <button 
                        type='submit' 
                        className="h-[60px] text-white font-medium rounded-2xl w-full" 
                        style={{backgroundColor: colors.main, color: colors.dark}}>Subscribe to news
                    </button> */}
                    <ReusableButton
                        className={"h-[60px] w-full font-medium"}
                        title={'Subscribe to news'} bgColor={colors.main} textColor={colors.dark} circleBgColor={'#FFFFFF'}
                    />
                </form>
                <div className='flex justify-center gap-4 lg:hidden'>
                    <LinkedIn className="cursor-pointer"/>
                    <Facebook className="cursor-pointer"/>
                    <Twitter className="cursor-pointer"/>
                </div>
            </div>
            <div className='w-full lg:w-[90%]'>
                <hr className='w-full'/>
                <div className='mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-5'>
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <p className='lg:underline'>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;