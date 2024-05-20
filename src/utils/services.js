import { db } from '../firebase/configs';
import { getDocs, collection, getDoc, doc } from 'firebase/firestore';

export const getData = async (table) => {
  const collectionRef = collection(db, table);
  const data = await getDocs(collectionRef);
  return data.docs.map((doc) => {
    return { ...doc.data(), info: { id: doc.id, uid: table } };
  });
};

export const getDocument = async (table, documentId) => {
  const documentRef = doc(db, table, documentId);
  const data = await getDoc(documentRef);
  console.log({ ...data.data(), info: { id: data.id, uid: table } });
  return data.data() ? { ...data.data(), info: { id: data.id, uid: table } } : null;
};
