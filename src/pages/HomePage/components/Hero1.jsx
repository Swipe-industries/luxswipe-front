function Hero1() {
  return (
    <>
      <div className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            {/* Left Div Content Goes Here */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-kalnia-300 text-contrast-3 mb-4">
            Hey, Creators! Let's create magic <br /> together
            </h3>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-kalnia-300 text-contrast-3 mb-0">
            Monetize your audience with <br /> personalized storefronts
            </h3>
            <p className="text-xs text-contrast-3 font-poppins mb-4">
            Stop creating web of stores and product links
            </p>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-kalnia-300 text-contrast-3 mb-0">
            Create a digital shop
            </h3>
            <p className="text-xs text-contrast-3 font-poppins mb-4">
            Where creativity meets connection <br />
            Join us and elevate your online presence today!
            </p>
          </div>
          <div className="md:ml-8">
            {/* Right Div Content Goes Here */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Right Content
            </h2>

          </div>
        </div>
      </div>
    </>
  );
}

export default Hero1;
