import { collections, db } from "../firebase/configs";
import { getDocs, collection, getDoc, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";

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
    const response = await addDoc(dataRef, data);
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
    await updateDoc(dataRef, data);
  } catch (err) {
    return err;
  }
};

export const deleteData = async (table, documentId) => {
  const dataRef = doc(db, table, documentId);
  try {
    await deleteDoc(dataRef);
  } catch (err) {
    return err;
  }
};
