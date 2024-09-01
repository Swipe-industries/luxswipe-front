import axios from "axios";
import conf from "../conf/conf.js";

const baseURL = conf.apiEndpoint;

class ImageKit {
  constructor() {
    this.baseURL = baseURL;
  }

  async uploadAvatar(formData) {
    try {
      const response = await axios.post(
        `${baseURL}/upload/avatar`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      return error.code;
    }
  }

  async uploadCover(formData) {
    try {
      const response = await axios.post(
        `${baseURL}/upload/cover`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      return error.code;
    }
  }
}

const mediaUploadService = new ImageKit();

export default mediaUploadService;