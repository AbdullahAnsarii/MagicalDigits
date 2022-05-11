import { db } from "./firebase";
import { collection, getDocs, addDoc } from 'firebase/firestore'


const messagesRef = collection(db, 'messages');


const postMessage = async (dispatchMakeTrue, firstname, lastname, email, company, description, projectType, country, contactNo) => {
  
  addDoc(messagesRef, {
    FirstName: firstname,
    LastName: lastname,
    Country: country,
    ContactNo: contactNo,
    Email: email,
    ProjectType: projectType,
    Company: company,
    Description: description
  }).then(() => {
      dispatchMakeTrue
  })
};

export { postMessage };