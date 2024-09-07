import React, { useState } from "react";
import { IconEdit } from "@tabler/icons-react";
import { Avatar, Button, user } from "@nextui-org/react";
import ProfileEditPopup from "../ui/ProfileEditPopup";
import dbService from "../../services/dynamodb";

function ProfileSection({ isUser, userData: initialUserData }) {
  const [userData, setUserData] = useState(initialUserData);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [message, setMessage] = useState("");

  const updateProfile = async ({ name, bio, avatarUrl, coverUrl }) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      name: name !== prevUserData.name ? name : prevUserData.name,
      bio: bio !== prevUserData.bio ? bio : prevUserData.bio,
      avatarUrl:
        avatarUrl !== prevUserData.avatarUrl
          ? avatarUrl
          : prevUserData.avatarUrl,
      coverUrl:
        coverUrl !== prevUserData.coverUrl ? coverUrl : prevUserData.coverUrl,
    }));

    const newData = {
      name: name,
      bio: bio,
      avatarUrl: avatarUrl,
      coverUrl: coverUrl,
    };
    try {
      const response = await dbService.updateUser(userData.username, newData);

      if (response.data) {
        setMessage("Data updated successfully");
      } else {
        setMessage("Unable to update data, try again");
      }
    } catch (error) {
      alert("There was an error updating the Profile. Please try again.");
    }
  };

  return (
    <>
      {isEditProfileOpen && (
        <ProfileEditPopup
          currentData={userData}
          setIsPopupOpen={setIsEditProfileOpen}
          onSave={updateProfile}
        />
      )}
      <div className="h-auto relative bg-black/10 backdrop-blur-[1px] flex items-end justify-center">
        <div className="bg-black w-screen text-white md:w-2/3 font-poppins">
          {/* Cover Photo */}
          <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
            <img
              src={
                userData?.coverUrl ||
                "https://ik.imagekit.io/luxswipe/version-2.0/Cover%20Image.jpg?updatedAt=1724828324583"
              }
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Content */}
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 -mt-16 md:-mt-20 relative z-10">
            <div className="flex flex-col items-start">
              {/* Profile Picture */}
              <div className="relative md:flex">
                <Avatar
                  isBordered
                  src={userData?.avatarUrl}
                  className="md:w-40 md:h-40 aspect-square w-28 h-28"
                />
                <h1 className="text-2xl ml-1 md:text-4xl md:ml-3 md:pt-16 md:translate-y-3 mt-3">
                  {userData?.name}
                </h1>
              </div>

              {/* Profile Info */}
              <div className="flex-grow">
                {isUser && (
                  <button
                    onClick={() => setIsEditProfileOpen(true)}
                    className="absolute top-4 right-2 p-2 rounded-full translate-y-16"
                  >
                    <IconEdit />
                  </button>
                )}
                <p className="ml-1 text-sm md:text-lg text-white md:mt-3">
                  {userData?.bio}
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
