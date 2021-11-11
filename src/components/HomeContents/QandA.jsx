import { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../../config/firebase.config";
import { AllComments } from "./AllComments";
import Answers from "./Answers";
import { IconGrp } from "./IconGrp";

export const QandA = () => {
    const [showComments, setShowComments] = useState("");
    const [commentToogle, setCommentToogle] = useState(false);
    const [allQuestion, setAllQuestions] = useState([]);

    useEffect(() => {
        const dbRef = db.collection("questions/");
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
            console.log("questions:", questions);
        });

        // return cleanup function
        return () => data();
    }, []);

    const handleComments = (id) => {
        setShowComments(id);
        setCommentToogle(!commentToogle);
    };
    return (
        <>
            {allQuestion.map((e, i) => (
                <Container
                    key={i}
                    // style={
                    //     i === dummydata.length - 1
                    //         ? { marginBottom: "2rem" }
                    //         : null
                    // }
                >
                    <div className="header">
                        <img src={e.admin_img} alt="q_avatar" />
                        <div className="user">
                            <p>
                                {e.admin_name || e.admin_email} -
                                <label htmlFor=""> Follow</label>
                            </p>
                            <span>address -updated date</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="textContent">
                            <h4>{e.question}</h4>
                            <Answers questionId={e.key} />
                        </div>
                    </div>
                    <IconGrp
                        handleComments={handleComments}
                        toogle={commentToogle}
                        showComments={showComments}
                        id={e.id}
                    />

                    {e.id === showComments && commentToogle && <AllComments />}
                </Container>
            ))}
        </>
    );
};

const Container = styled.div`
    width: 35.625rem;
    margin-left: 12.5rem;
    margin-top: 1rem;
    background-color: #ffffff;
    border: 0.5px solid rgb(222, 224, 225);
    box-shadow: 0px 0px 5px rgb(222, 224, 225);
    border-radius: 3px;
    .header {
        padding-top: 1rem;
        padding-left: 1rem;
        display: flex;
        .user {
            margin-top: 0px;
            padding-top: 3px;
            margin-left: 5px;
            p {
                font-size: 13px;
                font-weight: 700;
                color: #282829;
                line-height: 0.3cm;
                padding-top: 0px;
                label {
                    color: #2e69ff;
                    font-weight: 500;
                }
            }
            span {
                font-size: 13px;
            }
        }
        img {
            width: 2.25rem;
            height: 2.25rem;
            border-radius: 50%;
        }
    }
    .content {
        .textContent {
            padding: 1rem;
            h4 {
                color: #282829;
            }
            p {
                position: relative;
                cursor: pointer;
                font-size: 15px;
                line-height: 21px;
                color: #282829;
                label {
                    position: absolute;
                    right: 0.5rem;
                    top: 1.3rem;
                    color: #195faa;
                    cursor: pointer;
                    box-shadow: 0px 10px 10px 8px white;
                }
            }
            .more {
                color: "blue";
            }

            .hide {
                display: none;
            }
            .unhide {
                display: block;
            }
        }
        .imageSection {
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
`;
