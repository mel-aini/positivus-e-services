import { ReactComponent as Illustration } from "../assets/contactUs.svg";
import ReusableButton from "./ReusableButton";

function ContactUS({ colors }) {
  return (
    <div className="contactUs w-[90%] mx-auto flex flex-col justify-center items-center my-5 sm:mt-16">
      <div className="w-full flex flex-col gap-[40px] lg:flex-row lg:justify-start justify-center items-center py-[50px]">
        <h1
          className="font-bold text-5xl whitespace-nowrap py-2 px-3 rounded-xl"
          style={{ backgroundColor: colors.main }}
        >
          Contact Us
        </h1>
        <p className="w-full text-center lg:text-start">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="w-full relative overflow-hidden lg:bg-gray-200 lg:rounded-[45px] lg:p-14">
        <form
          action=""
          className="lg:max-w-[50%]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-5 rounded-[45px] bg-gray-200 py-10 px-7 lg:p-0">
            <div className="flex gap-5 lg:justify-start justify-center ml-[5px] lg:ml-[5px]">
              <div className="flex justify-center items-center gap-3 ">
                <input
                  type="radio"
                  name="choice"
                  id="say-hi"
                  defaultChecked="checked"
                />
                <label htmlFor="say-hi">Say Hi</label>
              </div>
              <div className="flex justify-center items-center gap-3 ">
                <input type="radio" name="choice" id="get-a-guote" />
                <label htmlFor="get-a-guote">Get a Quote</label>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="border-[1px] border-solid border-black outline-none p-4 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="border-[1px] border-solid border-black outline-none p-4 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                className="border-[1px] border-solid border-black outline-none p-4 rounded-2xl"
              ></textarea>
            </div>
          </div>
          <ReusableButton
            type="submit"
            className={"h-[60px] my-6 w-full"}
            title={"Send Message"}
            bgColor={colors.dark}
            textColor={"#FFFFFF"}
            circleBgColor={colors.main}
            hoverTextColor={colors.dark}
          />
        </form>
        <Illustration className="hidden lg:block absolute right-0 top-[50%] translate-y-[-50%] translate-x-[51%]" />
      </div>
    </div>
  );
}

export default ContactUS;
