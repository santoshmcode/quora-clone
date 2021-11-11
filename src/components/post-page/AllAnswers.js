import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../../config/firebase.config";
import { Markup } from "interweave";
import styled from "styled-components";

const AllAnswers = () => {
    const { question_id: questionId } = useParams();
    console.log("questionId:", questionId);
    const [unhide, setUnhide] = useState(false);
    const [ID, setID] = useState("");
    const handleUnhide = (id) => {
        setID(id);
        setUnhide(true);
    };
    const [answer, setAnswer] = useState([]);
    console.log("answer:", answer);
    const [more, setMore] = useState(true);
    // const [answerLength, setAnswerLength] = useState(0);

    const handleExpand = () => {
        setMore(false);
    };

    useEffect(() => {
        const dbRef = db.collection(`questions/${questionId}/answers`);
        const data = dbRef.onSnapshot((querySnapshot) => {
            const ans = [];
            querySnapshot.forEach((doc) => {
                ans.push({
                    ...doc.data(), //spread operator
                    key: doc.id, // `id` given to us by Firebase
                    createdAt: doc.data().createdAt,
                });
            });
            setAnswer(ans);
        });

        // return cleanup function
        return () => data();
    }, []);

    useEffect(() => {
        if (answer[0]?.answer?.length < 200) {
            setMore(false);
        } else {
        }
    }, [answer]);

    return (
        <div>
            <MainContainer>
                {answer.map((answer) => {
                    return (
                        <div key={answer.key}>
                            <div className="header">
                                <img src={answer.user_img} alt="q_avatar" />
                                <div className="user">
                                    <p>
                                        {answer.user_name || answer.user_email}{" "}
                                        <label htmlFor=""> Follow</label>
                                    </p>
                                    <span>address -updated date</span>
                                </div>
                            </div>
                            <>
                                <AnswerContainer>
                                    <div className={more ? "container" : ""}>
                                        <Markup content={answer.answer} />
                                        {more && (
                                            <p
                                                className="more-btn"
                                                onClick={handleExpand}
                                            >
                                                more
                                            </p>
                                        )}
                                    </div>
                                    <p className="img-container">
                                        {console.log("ans", answer)}
                                        {answer.images && more && (
                                            <img
                                                src={answer.images[0]}
                                                alt="img"
                                            />
                                        )}
                                    </p>
                                </AnswerContainer>
                            </>
                        </div>
                    );
                })}
            </MainContainer>
        </div>
    );
};

export default AllAnswers;

const AnswerContainer = styled.div`
    margin-top: 1rem;
    position: relative;

    & .more-btn {
        position: absolute !important;
        top: 2.4rem;
        right: 12px;
        background: #fff;
        box-shadow: 20px 0px 10px 5px #fff, -10px 0px 10px 5px #fff;
        color: royalblue !important;
        cursor: pointer;
    }

    & .container {
        height: 3.5rem;
        overflow: hidden;
    }

    .img-container {
        width: 100%;
        margin-top: 1rem;
        /* border: 1px solid #000; */

        img {
            width: 100%;
        }
    }
`;

const MainContainer = styled.div`
    .header {
        padding-top: 1rem;
        /* padding-left: 1rem; */
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
`;
