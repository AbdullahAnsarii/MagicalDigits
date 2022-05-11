import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "./firebase";
import { collection, addDoc } from 'firebase/firestore'

const applicationsRef = collection(db, 'applications');

const postCareer = async (dispatchMakeTrue, name, email, phoneNo, resume) => {// Create a root reference
    addDoc(applicationsRef, {
        Name: name,
        ContactNo: phoneNo,
        Email: email
    })
    const sotrageRef = ref(storage, `resumes/${resume.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, resume);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(prog);
        },
        (error) => console.log(error),
        () => {
            () => {
                dispatchMakeTrue
            }
        }
    );
}

export { postCareer };