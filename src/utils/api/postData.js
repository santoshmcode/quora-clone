import db from "../../config/firebase.config";

export const postData = async (ref, data) => {
    const dbRef = db.collection(ref);
    return await dbRef.doc().set(data);
};

export const getSingleData = async (ref, id) => {
    const dbRef = db.collection(ref).doc(id);
    return await dbRef.get();
};

export const getData = (ref) => {
    let dataArray = [];
    const dbRef = db.collection(ref);
    // console.log("dbRef:", dbRef);
    return dbRef.onSnapshot((querySnapshot) => {
        // console.log("querySnapshot:", querySnapshot);
        dataArray = [];
        querySnapshot.forEach((doc) => {
            dataArray.push({
                ...doc.data(), //spread operator
                key: doc.id, // `id` given to us by Firebase
                createdAt: doc.data().createdAt,
            });
        });

        // console.log("dataArray:", dataArray);

        return dataArray;
    });
};

export const deleteData = async (ref, id) => {
    const dbRef = db.collection(ref);
    return await dbRef.doc(id).delete();
};

export const updateData = async (ref, id, data) => {
    const dbRef = db.collection(ref);
    return await dbRef.doc(id).update(data);
};
