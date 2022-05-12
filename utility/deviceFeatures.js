import { db } from "./firebase";
import { setDoc, doc } from 'firebase/firestore'

const postDevice = async (value) => {
  const messagesRef = doc(db, 'devices', `${value.page}-${value.model}`);
  await setDoc(messagesRef, {
    Device: value
  }, { merge: true })
};

export { postDevice };