import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  setDoc,
  increment,
  where,
  query,
} from "firebase/firestore";
import db from "./firebase";
export class dbController {
  constructor() {}
  //Agregar un nuevo documento a una colección
  async addNewDoc(coleccion, data) {
    const docRef = await addDoc(collection(db, coleccion), data);
    console.log("Document written with name ", docRef);
  }

  async getData(coleccion){
    const data= await getDocs(coleccion);
    console.log(data)
  }
}
