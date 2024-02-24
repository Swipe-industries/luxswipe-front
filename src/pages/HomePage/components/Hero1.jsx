import top from "../assets/Top.svg";
import middle from "../assets/Middle.svg";
import bottom from "../assets/Rectangle 30.svg";
import shd from "../assets/Ellipse-16.svg";
import VerticalMarquee from "./Marquee";
import Footer from "./Footer";
import StartBtn from "./StartBtn";

function Hero1() {
  const count = 20;

  return (
    <>
      {/* <img className=" cursor-pointer w-[700px] z-1 ml-[900px] mt-[120px] md:w-[500px] md:-top-[20px] md:left-12 duration-200 absolute top-[10px] " src={shd} alt="" />  */}
      <div className="pt-24 md:pt-16 md:pb-2 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mt-8 mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:-mt-[80px] md:mb-0 md:mr-0">
            {/* Left Div Content Goes Here */}
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-kalnia-300 text-contrast-3 mb-4">
              Hey, Creators! Let's create magic <br /> together
            </h3>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-kalnia-300 text-contrast-3 mb-0">
              Monetize your audience with <br /> personalized storefronts
            </h3>
            <p className="text-xs text-contrast-3 font-poppins mb-4">
              Stop creating web of stores and product links
            </p>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-kalnia-300 text-contrast-3 mb-0">
              Create a digital shop
            </h3>
            <p className="text-xs text-contrast-3 font-poppins mb-4">
              Where creativity meets connection <br />
              Join us and elevate your online presence today!
            </p>
            <div className="">
              <StartBtn label="Start Creating" />
            </div>
          </div>
          <div className="md:ml-8 bg-transparent z-8 flex  items-center justify-center w-[490px] mt-5 md:mt-16  h-[430px] md:h-[504px] relative">
            <img
              className=" cursor-pointer w-[400px]  md:w-[450px] md:left-12 duration-200 absolute top-[70px] "
              src={bottom}
              alt=""
            />
            <img
              className=" w-[440px] md:w-[545px] md:left-7 absolute  top-[30px] "
              src={middle}
              alt=""
            />
            <img
              className=" w-[440px] md:w-[545px] md:left-7 absolute top-[0px] "
              src={top}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pb-[100px] pt-[50px]">
        <p className="text-white font-poppins text-[28px]">
          Grab One For Yourself
        </p>
      </div>

      <div className=" mx-auto mb-10 text-white flex items-center justify-center text-[27px]  overflow-hidden font-poppins rounded-lg w-[300px] h-[169px] md:w-[510px] md:h-[260px]  bg-[#D64F87] ">
        <div>
          <p className="mr-2">luxswipe.in/</p>
        </div>
        <div className="flex flex-col">
          <div className="container mx-auto mt-8">
            <h1 className="text-center text-2xl overflow-hidden relative md:-mt-20 font-bold text-mystic  ">
              anasssss
            </h1>
            <div className="w-[250px] z-10 text-mystic mt-[7px] overflow-hidden h-8 text-transparent absolute bg-[#000000 ]">
              
            </div>
            <div className="w-[120px] z-8  text-mystic mt-[145px] -ml-[5px] md:mt-[230px] overflow-hidden h-4 absolute bg-mystic">
              
            </div>
            <div className="scroll-smooth h-[160px] mb-14 ">
              <VerticalMarquee>
                <span>rahul</span>
                <span>aditya</span>
                <span>adarsh</span>
                <span>siddarth</span>
                <span>vikram</span>
                <span>rahul</span>
                <span>aditya</span>
                <span>adarsh</span>
                <span>siddarth</span>
                <span>vikram</span>
                <span>rahul</span>
                <span>aditya</span>
                <span>adarsh</span>
                <span>siddarth</span>
                <span>vikram</span>
                <span>rahul</span>
                <span>aditya</span>
                <span>adarsh</span>
                <span>siddarth</span>
                <span>vikram</span>
              </VerticalMarquee>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StartBtn label="Start creting" />
      </div>
    </>
  );
}

export default Hero1;
