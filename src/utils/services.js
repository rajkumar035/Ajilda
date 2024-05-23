import { db } from "../firebase/configs";
import { getDocs, collection, getDoc, doc, addDoc } from "firebase/firestore";

export const getData = async (table) => {
  const collectionRef = collection(db, table);
  try {
    const data = await getDocs(collectionRef);
    return data.docs.map((doc) => {
      return { ...doc.data(), info: { id: doc.id, uid: table } };
    });
  } catch (err) {
    return err;
  }
};

export const getDocument = async (table, documentId) => {
  const documentRef = doc(db, table, documentId);
  try {
    const data = await getDoc(documentRef);
    return data.data() ? { ...data.data(), info: { id: data.id, uid: table } } : null;
  } catch (err) {
    return err;
  }
};

export const addData = async (table, data) => {
  const dataRef = collection(db, table);
  try {
    await addDoc(dataRef, data);
  } catch (err) {
    return err;
  }
};
