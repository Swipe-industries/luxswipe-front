import React from "react";
import { IconEdit } from "@tabler/icons-react";
import coverImage from "../../assets/Cover Image.jpg";
import logo from "../../assets/Logo.svg";

function ProfileSection() {
  return (
    <>
      <div className="h-auto relative bg-black/10 backdrop-blur-[1px] flex items-end justify-center">
        <div className="bg-black text-white md:w-2/3 font-poppins">
          {/* Cover Photo */}
          <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
            <img
              src={coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Content */}
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 -mt-16 md:-mt-20 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              {/* Profile Picture */}
              <div className="relative">
                <img
                  src={logo}
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-mystic"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-grow">
                <button className="absolute top-4 right-2 p-2 rounded-full translate-y-16">
                  <IconEdit />
                </button>
                <h1 className="text-3xl md:text-4xl font-semibold mb-1">
                  Sohail Ansari
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-2">
                  Creative Director. Some VFX, some fashion, & some fun.
                </p>
                {/* <div className="flex items-center gap-2">
              <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                Follow
              </button>
              <button className="border border-white px-4 py-2 rounded-full">
                Message
              </button>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSection;
