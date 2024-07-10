import moment from "moment";
import { collections, db, storageBucket } from "../firebase/configs";
import { getDocs, collection, getDoc, doc, addDoc, deleteDoc, updateDoc, where, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const getData = async (table, userId) => {
  let collectionRef = collection(db, table);

  // Querying data based on user
  if (userId) {
    const userRef = doc(db, collections.USERS, userId);
    collectionRef = collection(userRef, table);
  }

  try {
    const data = await getDocs(collectionRef);
    return data.docs.map((doc) => {
      return { ...doc.data(), info: { id: doc.id, table: table } };
    });
  } catch (err) {
    return err;
  }
};

export const getDocument = async (table, documentId, userId) => {
  let documentRef = doc(db, table, documentId);

  // Querying data based on user
  if (userId) {
    const userRef = doc(db, collections.USERS, userId);
    documentRef = doc(userRef, table, documentId);
  }

  try {
    const data = await getDoc(documentRef);
    return data.data() ? { ...data.data(), info: { id: data.id, table: table } } : null;
  } catch (err) {
    return err;
  }
};

export const addData = async (table, data, userId) => {
  let dataRef = collection(db, table);

  // Querying data based on user
  if (userId) {
    const userRef = doc(db, collections.USERS, userId);
    dataRef = collection(userRef, table);
  }

  try {
    const response = await addDoc(dataRef, {
      ...data,
      createdAt: moment().utc().format(),
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const updateData = async (table, data, docId, userId) => {
  let dataRef = doc(db, table, docId);

  // Querying data based on user
  if (userId) {
    const userRef = doc(db, collections.USERS, userId);
    dataRef = doc(userRef, table, docId);
  }

  try {
    await updateDoc(dataRef, { ...data, lastUpdated: moment().utc().format() });
  } catch (err) {
    return err;
  }
};

export const deleteData = async (table, docId, userId) => {
  let dataRef = doc(db, table, docId);

  // Querying data based on user
  if (userId) {
    const userRef = doc(db, collections.USERS, userId);
    dataRef = doc(userRef, table, docId);
  }

  try {
    await deleteDoc(dataRef);
  } catch (err) {
    return err;
  }
};

export const getFileURL = async (file, folder) => {
  try {
    const uniqueID = Date.now() + Math.floor(Math.random()).toString();
    const fileRef = ref(storageBucket, `/${folder}/${uniqueID}${file.name}`);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  } catch (err) {
    return `Failed to Generate URL and ${err}`;
  }
};
export const getCustomerUsers = async () => {
  try {
    const userlistRef = collection(db, "userlist");
    const q = query(userlistRef, where("role", "==", "CUSTOMER"));
    const querySnapshot = await getDocs(q);
    const customerUsers = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return customerUsers;
  } catch (err) {
    console.error("Error fetching customer users: ", err);
    return err;
  }
};

export const getUserOrderDetails = async () => {
  try {
    const usersCollectionRef = collection(db, "userlist");
    const usersSnapshot = await getDocs(usersCollectionRef);
    let userOrderDetails = [];
    let users = await getCustomerUsers();
    for (const userDoc of users) {
      const ordersCollectionRef = collection(db, "users", userDoc?.uid, "orders");
      const ordersSnapshot = await getDocs(ordersCollectionRef);
      for (const orderDoc of ordersSnapshot.docs) {
        const orderId = orderDoc.id;
        const orderData = orderDoc.data();
        const cartId = orderData.cartId;
        const cartDocRef = doc(db, "users", userDoc?.uid, "cart", cartId);
        const cartDoc = await getDoc(cartDocRef);
        if (cartDoc.exists()) {
          const cartData = cartDoc.data();
          userOrderDetails.push({
            ...userDoc,
            orderId,
            ...orderData,
            cartDetails: cartData,
          });
        }
      }
    }
    return userOrderDetails;
  } catch (err) {
    console.error("Error fetching user order details:", err);
    return err;
  }
};
// getUserOrderDetails().then((data) => console.log(JSON.stringify(data, null, 2, "dataaaaaa")));
