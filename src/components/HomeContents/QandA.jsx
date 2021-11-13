import { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../../config/firebase.config";
import { AllComments } from "./AllComments";
import Answers from "./Answers";
import { IconGrp } from "./IconGrp";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const QandA = ({ flag }) => {
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
                !flag
                    ? questions
                          .filter((el) => el.isAnswered === true)
                          .sort((a, b) => b.createdAt - a.createdAt)
                    : questions
                          .filter((el) => el.isAnswered === false)
                          .sort((a, b) => b.createdAt - a.createdAt)
            );
        });

        return () => data();
    }, []);

    const handleComments = (id) => {
        setShowComments(id);
        setCommentToogle(!commentToogle);
    };
    return (
        <>
            {allQuestion.map((e, i) => (
                <Container key={i}>
                    <div className="header">
                        <img src={e.admin_img} alt="q_avatar" />
                        <div className="user">
                            <p>
                                {e.admin_name || e.admin_email} -
                                <label htmlFor=""> Follow</label>
                            </p>

                            <span>
                                {dayjs(Date.now() - e.created_at).format("hh") /
                                    1 <
                                48
                                    ? dayjs(e.created_at).from(Date.now())
                                    : dayjs(e.created_at).format("D MMM")}
                            </span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="textContent">
                            <Link to={`question/${e.key}`}>
                                {" "}
                                <h4>{e.question}</h4>
                            </Link>

                            <Answers
                                questionId={e.key}
                                handleComments={handleComments}
                                toogle={commentToogle}
                                showComments={showComments}
                                id={e.key}
                            />
                        </div>
                    </div>

                    {e.id === showComments && commentToogle && <AllComments />}
                </Container>
            ))}
        </>
    );
};

const Container = styled.div`
    width: 35.625rem;
    margin-left: 1rem;
    margin-top: 1rem;
    background-color: #ffffff;
    border: 0.5px solid rgb(222, 224, 225);
    box-shadow: 0px 0px 5px rgb(222, 224, 225);
    border-radius: 3px;

    .icon-group-container {
        padding: 0 1rem;
        margin-bottom: 0.5rem;
    }

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
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
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
