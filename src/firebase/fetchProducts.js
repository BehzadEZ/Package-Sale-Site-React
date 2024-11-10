// import { collection, getDocs } from "firebase/firestore";
// import db from "./firebaseConfig";

// const fetchProducts = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "package"));
//     const products = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     return products;
//   } catch (error) {
//     console.error("Error fetching products: ", error);
//     return [];
//   }
// };

// export default fetchProducts;
