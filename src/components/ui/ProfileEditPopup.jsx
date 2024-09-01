import React, { useState, useRef, useCallback } from "react";
import { FaPlus } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Input, Textarea, Button } from "@nextui-org/react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { getCroppedImg } from "../../feature/cropImage.js";
import { GiConfirmed } from "react-icons/gi";
import Cropper from "react-easy-crop";
import mediaUploadService from "../../services/imagekit.js";

function ProfileEditPopup({ currentData, setIsPopupOpen, onSave }) {
  const [formData, setFormData] = useState({
    avatarPreview: currentData?.avatarURL || null,
    coverPreview:
      currentData?.coverUrl ||
      "https://ik.imagekit.io/luxswipe/version-2.0/Cover%20Image.jpg?updatedAt=1724828324583",
    name: currentData?.name || "",
    bio: currentData?.bio || "",
    avatarUrl: "",
    coverUrl: "",
  });

  const [avatarCrop, setAvatarCrop] = useState({ x: 0, y: 0 });
  const [avatarZoom, setAvatarZoom] = useState(1);
  const [avatarCroppedAreaPixels, setAvatarCroppedAreaPixels] = useState(null);
  const [isAvatarCropping, setIsAvatarCropping] = useState(false);
  const [croppedAvatarBlob, setCroppedAvatarBlob] = useState(null);
  const [coverImageBlob, setCoverImageBlob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const avatarInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const uploadToImagekit = async (file, name) => {
    const formData = new FormData();
    formData.append("file", file, `${name}.jpg`);
    try {
      if (name == "avatar") {
        const uploadResponse = await mediaUploadService.uploadAvatar(formData);
        const url = uploadResponse.data.url;
        return url;
      }
      if (name == "cover") {
        const uploadResponse = await mediaUploadService.uploadCover(formData);
        const url = uploadResponse.data.url;
        return url;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      let newAvatarUrl = formData.avatarUrl;
      let newCoverUrl = formData.coverUrl;

      if (croppedAvatarBlob) {
        newAvatarUrl = await uploadToImagekit(croppedAvatarBlob, "avatar");
      }
      if (coverImageBlob) {
        newCoverUrl = await uploadToImagekit(coverImageBlob, "cover");
      }

      const updatedData = {
        ...formData,
        avatarUrl: newAvatarUrl,
        coverUrl: newCoverUrl,
      };

      const data = {
        name: updatedData.name,
        bio: updatedData.bio,
        avatarUrl: updatedData.avatarUrl,
        coverUrl: updatedData.coverUrl
      }
      onSave(data);
      setIsPopupOpen(false);
    } catch (error) {
      console.error("Error saving profile:", error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = async (e, type) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "avatar") {
          setFormData(prevData => ({ ...prevData, avatarPreview: reader.result }));
          setIsAvatarCropping(true);
        } else {
          setFormData(prevData => ({ ...prevData, coverPreview: reader.result }));
          setCoverImageBlob(base64ToBlob(reader.result));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onAvatarCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setAvatarCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onAvatarCropConfirm = useCallback(async () => {
    try {
      const croppedImageBlob = await getCroppedImg(
        formData.avatarPreview,
        avatarCroppedAreaPixels,
        0
      );
      const base64 = await blobToBase64(croppedImageBlob);
      setFormData(prevData => ({ ...prevData, avatarPreview: base64 }));
      setIsAvatarCropping(false);
      setCroppedAvatarBlob(croppedImageBlob);
    } catch (e) {
      console.error(e);
    }
  }, [formData.avatarPreview, avatarCroppedAreaPixels]);

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const base64ToBlob = (base64String, contentType = "image/jpeg") => {
    const byteCharacters = atob(base64String.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  };


  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-95 backdrop-blur-[1px] shadow-xl flex items-center justify-center p-4 font-poppins text-white overflow-y-auto">
      <div className="bg-black rounded-xl shadow-xl w-full max-w-3xl border border-mystic mt-10">
        <div className="relative h-48 md:h-64 overflow-hidden rounded-t-xl">
          <img
            src={formData.coverPreview}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <label
            htmlFor="upload-cover"
            className="absolute top-4 z-40 right-4 bg-mystic p-2 rounded-full cursor-pointer hover:bg-pink-600"
          >
            <HiOutlinePencilSquare size={18} />
            <input
              id="upload-cover"
              type="file"
              className="hidden"
              accept="image/*"
              ref={coverInputRef}
              onChange={(e) => handleFileChange(e, "cover")}
            />
          </label>
        </div>

        <div className="p-6 -mt-16 relative z-10">
          <div className="flex gap-x-3 mb-4 items-end -translate-y-6">
            <div className="relative">
              {isAvatarCropping ? (
                <div className="w-40 h-40 md:w-64 md:h-64 overflow-hidden">
                  <Cropper
                    image={formData.avatarPreview}
                    crop={avatarCrop}
                    zoom={avatarZoom}
                    aspect={1}
                    onCropChange={setAvatarCrop}
                    onCropComplete={onAvatarCropComplete}
                    onZoomChange={setAvatarZoom}
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-gray-200">
                  {formData.avatarPreview ? (
                    <img
                      src={formData.avatarPreview}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <IoPersonSharp
                      size={140}
                      className="text-gray-400 translate-y-3"
                    />
                  )}
                </div>
              )}
              {isAvatarCropping ? (
                <Button
                  color="primary"
                  onClick={onAvatarCropConfirm}
                  className="mt-2 font-medium rounded-none w-full"
                >
                  <GiConfirmed size={15} />
                  Confirm
                </Button>
              ) : (
                <label
                  htmlFor="upload-avatar"
                  className="absolute bottom-0 right-0 bg-mystic p-2 rounded-full cursor-pointer hover:bg-pink-600"
                >
                  <FaPlus />
                  <input
                    id="upload-avatar"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    ref={avatarInputRef}
                    onChange={(e) => handleFileChange(e, "avatar")}
                  />
                </label>
              )}
            </div>
            <div className="flex-grow">
              <Input
                variant="underlined"
                color="primary"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="text-2xl md:text-4xl font-medium"
              />
            </div>
          </div>

          <div className="mb-4">
            <Textarea
              label="Bio"
              placeholder="Enter your bio..."
              variant="bordered"
              color="primary"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full font-poppins font-medium"
            />
          </div>

          <div className="flex justify-between mt-6">
            <Button
              variant="flat"
              color="danger"
              onClick={() => setIsPopupOpen(false)}
              className="font-medium"
            >
              Cancel
            </Button>
            <Button
              isLoading={isLoading}
              color="primary"
              onClick={handleSave}
              className="font-medium"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEditPopup;
