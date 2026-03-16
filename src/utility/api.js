// src/api/api.js
import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

// Get all images (with optional text)
export const getAllImages = async () => {
  try {
    const res = await axios.get(`${API_BASE}/images`);
    return res.data; // [{id, image_url, description}, ...]
  } catch (err) {
    console.error("Error fetching images:", err);
    return [];
  }
};

// Get text by image ID
export const getTextByImageId = async (imageId) => {
  try {
    const res = await axios.get(`${API_BASE}/text/${imageId}`);
    return res.data.text_content || "";
  } catch (err) {
    console.error("Text not found for imageId", imageId);
    return "";
  }
};

// Save text by image ID
export const saveTextByImageId = async (imageId, text) => {
  try {
    const res = await axios.post(`${API_BASE}/text`, {
      image_id: imageId,
      text_content: text,
    });
    return res.data;
  } catch (err) {
    console.error("Error saving text:", err);
    throw err;
  }
};