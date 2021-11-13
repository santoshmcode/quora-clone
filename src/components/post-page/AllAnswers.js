import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../../config/firebase.config";
import { Markup } from "interweave";
import styled from "styled-components";
import dayjs from "dayjs";
import SingleAnswer from "./SingleAnswer";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const AllAnswers = ({ handleSetAnswerCount, questionId: id }) => {
    const { question_id: questionId } = useParams();
    const [unhide, setUnhide] = useState(false);
    const [ID, setID] = useState("");
    const handleUnhide = (id) => {
        setID(id);
        setUnhide(true);
    };
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        handleSetAnswerCount(answer.length);
    }, [answer]);

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
                                    <span>
                                        {dayjs(
                                            Date.now() - answer.timestamp
                                        ).format("hh") < 48
                                            ? dayjs(answer.timestamp).from(
                                                  Date.now()
                                              )
                                            : dayjs(answer.timestamp).format(
                                                  "D MMM"
                                              )}
                                    </span>
                                </div>
                            </div>
                            <>
                                <SingleAnswer answer={answer} id={id} />
                            </>
                        </div>
                    );
                })}
            </MainContainer>
        </div>
    );
};

export default AllAnswers;

const MainContainer = styled.div`
    & > div {
        border-bottom: 1px solid #e6e6e6;
        padding: 1rem 0;
    }

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
