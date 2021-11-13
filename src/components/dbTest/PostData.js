// import dayjs from "dayjs";
import React, { useEffect } from "react";
import db from "../../config/firebase.config";
// import { Markup } from "interweave";
// import { Answer } from "./Answer";

import { deleteData, getData, postData } from "../../utils/api/postData";

export const PostData = () => {
    const [question, setQuestion] = React.useState("");
    const [tag, setTag] = React.useState([]);
    const [allQuestions, setAllQuestions] = React.useState([]);



    const handleSubmit = () => {
        postData("questions/", {
            question: question,
            tag: tag,
            createdAt: Date.now(),
            answers: [],
        });
    };

    useEffect(() => {
        const dbRef = db.collection("questions");
        const data = dbRef.onSnapshot((querySnapshot) => {
            const questions = [];
            querySnapshot.forEach((doc) => {
                questions.push({
                    ...doc.data(), //spread operator
                    key: doc.id, // `id` given to us by Firebase
                    createdAt: doc.data().createdAt,
                });
            });
            setAllQuestions(
                questions.sort((a, b) => b.createdAt - a.createdAt)
            );
        });

       
        return () => data();
    }, []);

    

    const handleDelete = (id) => {
        const dbRef = db.collection("questions");
        dbRef.doc(id).delete();
    };

    return (
        <>
            <h2>Add Question</h2>
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
            {/* <button onClick={handleGetData}>Get Data</button> */}
            <ul style={{ border: "1px solid #000" }}>
                {allQuestions.map((question) => (
                    <li style={{ margin: "20px" }} key={question.key}>
                        <h2>
                            {question.question}
                            {/* <Markup content={question.question} /> */}
                        </h2>
                        <div
                            style={{
                                border: "1px solid #000",
                                padding: "2px 10px",
                                display: "inline-block",
                                borderRadius: "15px",
                            }}
                        >
                            {question.tag}
                        </div>
                        <span
                            onClick={() =>
                                deleteData("questions", question.key)
                            }
                            style={{
                                border: "1px solid #000",
                                padding: "2px 10px",
                                borderRadius: "15px",
                                cursor: "pointer",
                                marginLeft: "10px",
                            }}
                        >
                            ❌
                        </span>
                        <br />
                        {/* {dayjs(question.createdAt).format("DD MM YYYY h:mm a")} */}
                        {question.createdAt}
                        <br />
                        {question.key}
                        <br />
                        {question?.answers[0]}
                        <br />
                        {/* <Markup content={question?.answers[0]} /> */}
                        {question?.answers[0]}
                        {/* <Answer id={q uestion.key} /> */}
                        <br />
                    </li>
                ))}
            </ul>
        </>
    );
};
