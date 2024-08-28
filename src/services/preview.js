import conf from "../conf/conf.js";
import axios from "axios";

const previewUrl = conf.previewEndpoint;

export const getPreview = async (link) => {
  try {
    const response = await axios.get(`${previewUrl}${link}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
