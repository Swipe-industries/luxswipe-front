import React from "react";
import { IconEdit } from "@tabler/icons-react";
import { Avatar, Button } from "@nextui-org/react";
import coverImage from "../../assets/Cover Image.jpg";

function ProfileSection({ apiData }) {
  const userData = apiData[0];
  return (
    <>
      <div className="h-auto relative bg-black/10 backdrop-blur-[1px] flex items-end justify-center">
        <div className="bg-black w-screen text-white md:w-2/3 font-poppins">
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
            <div className="flex flex-col items-start gap-2">
              {/* Profile Picture */}
              <div className="relative md:flex">
                <Avatar
                  src=""
                  className="md:w-40 md:h-40 aspect-square w-28 h-28 border-mystic border-2 "
                />
                <h1 className="text-3xl md:text-4xl md:ml-3 md:pt-16 md:translate-y-3 font-semibold mt-3">
                  {userData.name}
                </h1>
              </div>

              {/* Profile Info */}
              <div className="flex-grow">
                <button className="absolute top-4 right-2 p-2 rounded-full translate-y-16">
                  <IconEdit />
                </button>
                <p className="text-lg md:text-xl text-white">
                  {userData.bio}
                </p>
                {/* <div className="flex items-center gap-2">
                  <Button
                    className=" text-black px-4 py-2 rounded-full font-semibold"
                    color="primary"
                  >
                    Follow
                  </Button>
                  <Button
                    className=" px-4 py-2 rounded-full"
                    color="primary"
                    variant="bordered"
                  >
                    Message
                  </Button>
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
