import React from "react";

function Video() {

  return (
    <>
      <div className="justify-center items-center flex m-10">
        <iframe
          className="md:w-[1080px] md:h-[338px] w-[501px] h-[157px] md:rounded-3xl shadow-sm rounded-xl"
          src="https://www.youtube.com/embed/wAi14z08gAo?si=ltWvVmBOWkko1p-6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Video;
