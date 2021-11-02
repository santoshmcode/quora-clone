import React, { useEffect } from "react";
import db from "../../config/firebase.config";

export const PostData = () => {
    const [question, setQuestion] = React.useState("");
    const [tag, setTag] = React.useState([]);

    const dbRef = db.collection("questions");
    useEffect(() => {
        // console.log("getDB:", getDB);
        // const post = async () => {
        //     await dbRef.doc("SF").set({
        //         name: "San Francisco",
        //         state: "CA",
        //         country: "USA",
        //         capital: false,
        //         population: 860000,
        //     });
        // };
    }, []);

    const getDB = async () => {
        return await dbRef.doc("question").get();
        // console.log("doc:", doc.data());
    };

    const handleSubmit = async () => {
        const res = await dbRef.doc().set({
            question: question,
            tag: tag,
            answers: [{}],
        });
        console.log("res:", res);
    };

    return (
        <>
            <input
                type="text"
                name="question"
                value={question}
                placeholder="Question"
                onChange={(event) => setQuestion(event.target.value)}
            />
            <input
                type="text"
                name="tag"
                value={tag}
                placeholder="add tag"
                onChange={(event) => setTag([event.target.value])}
            />
            <input type="submit" value="add question" onClick={handleSubmit} />
        </>
    );
};
