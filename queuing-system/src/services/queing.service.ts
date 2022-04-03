import React from 'react'
import firebase from "../firebase/config";
const db = firebase.collection("/user");
class QueingDataService {
    // getAll() {
    //     return db;
    //   }
    //   create(tutorial: ITutorialData) {
    //     return db.add(tutorial);
    //   }
    //   update(id: string, value: any) {
    //     return db.doc(id).update(value);
    //   }
    //   delete(id: string) {
    //     return db.doc(id).delete();
    //   }
    check(id: string){
        
    }
    
}
export default new QueingDataService();
