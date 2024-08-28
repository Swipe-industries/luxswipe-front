import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import NewLink from "../ui/NewLink";
import dbService from "../../services/dynamodb.js";
import {
  LinkIcon,
  PlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const LinkCard = ({ title, icon, link, isUser, setNewCardPopup }) => {
  const handleClick = () => {
    if (isUser) {
      setNewCardPopup(true);
    } else {
      //im future I will be adding here a safety check to confirm if link is present or not
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      className="w-24 h-32 md:w-32 md:h-40 rounded-xl flex flex-col items-center justify-center cursor-pointer relative overflow-hidden bg-mystic/15 border-1 border-mystic"
      onClick={handleClick}
      style={{
        boxShadow: "0 0 15px rgba(214, 78, 134, 0.5)",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="md:w-16 w-12 overflow-hidden md:rounded-xl rounded-md">
        <div className="flex items-center justify-center">{icon}</div>
      </div>
      <div className="text-white text-xs md:text-sm font-poppins font-medium translate-y-5 text-center px-1">
        {title}
      </div>
    </motion.div>
  );
};

const Links = ({ isUser, userData, linkDataProp }) => {
  const [newCardPopup, setNewCardPopup] = useState(false);
  const [linkData, setLinkData] = useState(linkDataProp);
  const scrollContainerRef = useRef(null);

  
  const saveData = async ({ link, title }) => {
    const data = {
      username: userData.username,
      linkURL: link,
      title: title,
    };
    try {
      const response = await dbService.createNewLink(data);
      
      if (response && response.data) {
        setLinkData((prevLinkData) => [...prevLinkData, response.data]);
      } else {
        throw new Error("Failed to save the link. Response is empty.");
      }
    } catch (error) {
      console.error("Error saving the link:", error.message || error);
      alert("There was an error saving the link. Please try again.");
    }
  };

  function getCompanyWebsite(url) {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      return hostname.replace("www.", "");
    } catch (error) {
      console.error("Invalid URL:", error);
      return null;
    }
  }

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {newCardPopup && <NewLink onClose={setNewCardPopup} onSave={saveData} />}
      <div className="bg-black text-white pt-6 px-4 md:px-8 lg:px-12 font-poppins">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold flex items-center md:mx-12">
            <LinkIcon className="h-6 w-6 mr-2" />
            Explore My Links
          </h2>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex items-center space-x-5 md:space-x-6 overflow-x-auto scrollbar-hide md:mx-12 h-48 md:h-56 pl-6"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {isUser && (
                <div
                  className="flex-shrink-0"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <LinkCard
                    title="Add New"
                    icon={<PlusIcon className="h-10 w-10 text-mystic" />}
                    isUser={isUser}
                    setNewCardPopup={setNewCardPopup}
                  />
                </div>
              )}

              {linkData.map((item) => (
                <div
                  key={item.linkID}
                  className="flex-shrink-0"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <LinkCard
                    title={item.title}
                    icon={
                      <img
                        src={`https://img.logo.dev/${getCompanyWebsite(
                          item.linkURL
                        )}?token=pk_OnuWAokNQXGu93emHmirpg`}
                        alt="Preview"
                        className="rounded-full"
                      />
                    }
                    link={item.linkURL}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 hidden md:block"
            >
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 hidden md:block"
            >
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
