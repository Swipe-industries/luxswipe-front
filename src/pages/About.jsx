import React from "react";
import DisplayRight from "../components/ui/DisplayRight";
import DisplayLeft from "../components/ui/DisplayLeft";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

function About() {
  const headlines = [`Our Mission`, `Our Story`];

  const content = [
    `At LuxSwipe, our mission is to empower fashion influencers by
  providing a dynamic platform to showcase their unique styles and
  connect with their followers. We strive to bridge the gap
  between influencers and their audiences, making fashion
  accessible, inspiring, and engaging for everyone.`,

    `LuxSwipe was born from a passion for fashion and a vision to revolutionize the 
    way influencers share their style. Founded in 2023, LuxSwipe is growing into a thriving 
    community of fashion enthusiasts. Our journey began with a simple idea: to create a platform where 
    influencers could effortlessly share their looks, link their favorite products, and build a loyal following. 
    Today, we continue to innovate and evolve, driven by our commitment to helping influencers succeed.`,
  ];

  const imgUrl = [
    `https://ik.imagekit.io/luxswipe/version-2.0/mission-img?updatedAt=1716403630854`,
    `https://ik.imagekit.io/luxswipe/version-2.0/story-img?updatedAt=1716403699971`,
    `https://ik.imagekit.io/luxswipe/version-2.0/vaidik.jpeg?updatedAt=1716403787629`,
    `https://ik.imagekit.io/luxswipe/version-2.0/sohail.jpg?updatedAt=1716403818469`,
  ];

  return (
    <>
      <DisplayRight
        headline={headlines[0]}
        content={content[0]}
        imgUrl={imgUrl[0]}
        color={"black"}
      />
      <DisplayLeft
        headline={headlines[1]}
        content={content[1]}
        imgUrl={imgUrl[1]}
        color={"black"}
      />

      <div
        className={`h-auto relative border border-mystic rounded-2xl p-10 md:mx-36 mx-5 mt-20 mb-5 bg-black/5 backdrop-blur-[1px]`}
      >
        <h1 className="text-white font-kalnia font-light md:text-5xl text-2xl mb-10 text-center">
          Meet The Founders
        </h1>
        <div className="flex md:flex-col flex-row justify-center gap-52 md:gap-8 md:mb-10 mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
            <div>
              <Card shadow="sm">
                <CardBody className="overflow-visible">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt="founder image"
                    className="md:w-full object-cover h-[180px]"
                    src={imgUrl[2]}
                  />
                </CardBody>
                <CardFooter className="text-small inline-block font-poppins">
                  <b>Vaidik Dubey</b>
                  <p className="text-default-500">Founder</p>
                </CardFooter>
              </Card>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              className="w-full md:w-1/2 text-white text-center items-center font-poppins md:text-lg text-base"
            >
              <p className="mb-3">
                Aspiring entrepreneur and iOS developer with a passion for
                e-commerce innovation. Launched my first product in the first
                year of college, learning key insights for future ventures.
                Currently developing Luxswipe, a platform for social media
                creators with integrated e-commerce. Selected for prestigious
                Google Summer of Code in my second year, driving forward with
                new iterations in the e-commerce sector.
              </p>
              <p className="font-poppins text-2xl font-semibold">
                "Go act, everything else doesn't matter"
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex md:flex-col flex-row justify-center gap-52 md:gap-8 md:mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
            <Card shadow="sm">
              <CardBody className="overflow-visible ">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt="founder image"
                  className="md:w-full object-cover h-[180px]"
                  src={imgUrl[3]}
                />
              </CardBody>
              <CardFooter className="text-small inline-block font-poppins">
                <b>Mohd Sohail Ansari</b>
                <p className="text-default-500">Co-founder</p>
              </CardFooter>
            </Card>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              className="w-full md:w-1/2 text-white text-center items-center font-poppins md:text-lg text-base"
            >
              <p className="mb-3">
                I'm a dedicated developer and UI/UX designer with a keen eye for
                creating intuitive and engaging digital experiences. Currently,
                I'm spearheading the development of LuxSwipe, an innovative
                platform designed to seamlessly integrate e-commerce
                functionalities for social media influencers. Beyond coding, I
                have a deep passion for photography and cinematography,
                constantly seeking new ways to capture and tell compelling
                visual stories.
              </p>
              <p className="font-poppins text-2xl font-semibold">
                "Creativity is nothing but a mind set free."{" "}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
