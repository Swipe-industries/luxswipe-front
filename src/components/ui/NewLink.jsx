import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Input, Spinner } from "@nextui-org/react";
import { MdCancel } from "react-icons/md";
import { getPreview } from "../../services/preview.js";

function NewLink({ onClose, onSave }) {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  //below two things will be required when we will load the metadata but for now we are not doing that
  // const [loading, setLoading] = useState(false); 
  // const [previewURL, setPreviewURL] = useState("");

  const handleLinkChange = async (e) => {
    const value = e.target.value;
    setLink(value);
    // if (value) {
    //   setLoading(true);
    //   try {
    //     fetchPreview(value);
    //   } catch (error) {
    //     console.error("Error fetching companySite:", error);
    //   }
    // } else {
    //   setPreviewURL("");
    // }
  };

  // const fetchPreview = async (link) => {
  //   try {
  //     const metadata = await getPreview(link);
  //     metadata.ogImage
  //       ? setPreviewURL(metadata.ogImage)
  //       : setPreviewURL(metadata.favicon);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error:", error); // Handle any errors
  //   }
  // };

  const handTitleChange = (e) => {
    const title = e.target.value;
    // Capitalize the first letter
    const capitalizedValue = title.charAt(0).toUpperCase() + title.slice(1);
    setTitle(capitalizedValue);
  };

  const handleClear = () => {
    setLink("");
    // setPreviewURL("");
  };

  //This function is resonsible for passing the data to the Links Component where the final database call will be made
  const handleSave = () => {
    onSave({ link, title });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed z-50 inset-0 bg-black bg-opacity-95 backdrop-blur-[1px] shadow-xl flex items-center justify-center p-4 font-poppins text-white"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-black rounded-xl shadow-xl w-full max-w-md border border-mystic"
        >
          <div className="p-6">
            <h2 className="text-2xl font-medium mb-4">Add New Link</h2>
            <div className="mb-4">
              <label
                htmlFor="link"
                className="ml-1 block text-sm font-medium text-gray-100 mb-1"
              >
                Paste Your Link
              </label>
              <div className="relative">
                <Input
                  color="primary"
                  type="text"
                  id="link"
                  value={link}
                  onChange={handleLinkChange}
                  placeholder="https://example.com"
                  radius="md"
                  variant="faded"
                  className="text-black font-poppins font-medium placeholder:font-poppins"
                  endContent={
                    link && (
                      <MdCancel
                        onClick={handleClear}
                        className="cursor-pointer"
                      />
                    )
                  }
                />
              </div>
            </div>

            {/* <AnimatePresence>
              {loading && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center justify-center"
                >
                  <Spinner color="primary" />
                </motion.div>
              )}
              {previewURL && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-end justify-center"
                >
                  {/* `https://img.logo.dev/${companySite}?token=pk_OnuWAokNQXGu93emHmirpg` */}
                  {/* <img
                    src={previewURL}
                    alt="Preview"
                    className="rounded-full w-20"
                  />
                </motion.div>
              )}
            </AnimatePresence> */} 
            <div className="mb-4">
              <label
                htmlFor="title"
                className="ml-1 block text-sm font-medium text-gray-100 mb-1"
              >
                Title
              </label>
              <Input
                color="primary"
                type="text"
                id="title"
                value={title}
                onChange={handTitleChange}
                placeholder="Enter a title for your link"
                radius="md"
                variant="faded"
                className="text-black font-poppins font-medium placeholder:font-poppins"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                color="danger"
                variant="flat"
                className="font-poppins font-semibold"
                onClick={() => onClose(false)}
              >
                Cancel
              </Button>

              <Button
                color="primary"
                className="font-poppins font-medium"
                disabled={!link || !title}
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default NewLink;
