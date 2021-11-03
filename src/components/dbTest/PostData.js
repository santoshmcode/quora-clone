import dayjs from "dayjs";
import React, { useEffect } from "react";
import db from "../../config/firebase.config";
import { Markup } from "interweave";
import { Answer } from "./Answer";

export const PostData = () => {
    const [question, setQuestion] = React.useState("");
    const [tag, setTag] = React.useState([]);
    const [allQuestions, setAllQuestions] = React.useState([]);

    const dbRef = db.collection("questions");
    const handleSubmit = async () => {
        const res = await dbRef.doc().set({
            question: question,
            tag: tag,
            createdAt: Date.now(),
            answers: [],
        });
        console.log("res:", res);
    };

    useEffect(() => {
        const subscriber = dbRef.onSnapshot((querySnapshot) => {
            console.log("querySnapshot:", querySnapshot);
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

        // return cleanup function
        return () => subscriber();
    }, []);

    const handleDelete = (id) => {
        dbRef.doc(id).update({});
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
                            <Markup content={question.question} />
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
                            onClick={() => handleDelete(question.key)}
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
                        {dayjs(question.createdAt).format("DD MM YYYY h:mm a")}
                        <br />
                        {question.key}
                        <br />
                        {question?.answers[0]}
                        <br />
                        <Markup content={question?.answers[0]} />

                        {question?.answers[1]}
                        {/* <Answer id={q uestion.key} /> */}
                        <br />
                    </li>
                ))}
            </ul>
        </>
    );
};
