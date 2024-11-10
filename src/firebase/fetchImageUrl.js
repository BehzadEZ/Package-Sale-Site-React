// // src/firebase/fetchImageUrl.js
// import { storage, ref, getDownloadURL } from "./firebaseConfig";

// const fetchImageUrl = async (filePath) => {
//   const imageRef = ref(storage, filePath);
//   try {
//     const url = await getDownloadURL(imageRef);
//     return url;
//   } catch (error) {
//     console.error("Error fetching image URL:", error);
//     return null;
//   }
// };

// export default fetchImageUrl;
