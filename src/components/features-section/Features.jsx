"use client";
import React from "react";
import StickyScrollReveal from "./StickyScrollReveal";

const content = [
  {
    title: "Create Your Own Storefront",
    description:
      "With LuxSwipe, fashion influencers like you have the opportunity to showcase your favorite looks, curated collections, and must-have products in a beautifully designed space that's all your own. Tailor your storefront with customizable templates, upload stunning visuals, and engage with your followers like never before. Start building your fashion empire today with LuxSwipe's intuitive storefront creation tools.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="https://ik.imagekit.io/luxswipe/version-2.0/random-cloths?updatedAt=1711687736319" alt="storefront img" />
      </div>
    ),
  },
  {
    title: "Connect With Your Audience",
    description:
      "Foster direct engagement with your followers through LuxSwipe's innovative storefront platform, enabling personalized interaction, feedback, and community-building. Showcase your style, share exclusive content, and strengthen relationships with your audience in a dynamic and immersive online environment tailored to your unique brand.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img src="https://ik.imagekit.io/luxswipe/version-2.0/rampwalk?updatedAt=1711687799611" alt="Lady walking on ramp" />
      </div>
    ),
  },
  {
    title: "Monetize Your Influence",
    description:
      "Turn your passion for fashion into revenue by seamlessly integrating product sales and promotions within your LuxSwipe storefront. Maximize your earning potential while sharing your expertise and style with your dedicated audience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       <img src="https://ik.imagekit.io/luxswipe/version-2.0/money-flex?updatedAt=1711687846819" alt="lady showing money" />
      </div>
    ),
  }
];
export default function Features() {
  return (
    <div className="p-5">  
      <StickyScrollReveal content={content} />
    </div>
  );
}
// add the class names above if you want to change the container size