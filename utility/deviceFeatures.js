import { db } from "./firebase";
import { collection, addDoc } from 'firebase/firestore'


const messagesRef = collection(db, 'devices');


const postDevice = async (value) => {
  
  addDoc(messagesRef, {
    Device: value 
  })
};

export { postDevice };