import React, { useEffect, useState } from "react";
import db from "../../config/firebase.config";
import { Markup } from "interweave";
import styled from "styled-components";
import { IconGrp } from "./IconGrp";

const Answers = ({ questionId, handleComments, id, showComments, toogle }) => {
    const [unhide, setUnhide] = useState(false);
    const [ID, setID] = useState("");
    const handleUnhide = (id) => {
        setID(id);
        setUnhide(true);
    };
    const [answer, setAnswer] = useState([]);
    const [more, setMore] = useState(true);

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
            <>
                <>
                    {answer[0] && (
                        <>
                            <AnswerContainer>
                                <div className={more ? "container" : ""}>
                                    <Markup content={answer[0].answer} />
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
                                    {answer[0].images && more && (
                                        <img
                                            src={answer[0].images[0]}
                                            alt="img"
                                        />
                                    )}
                                </p>
                            </AnswerContainer>
                            <IconGrp
                                handleComments={handleComments}
                                toogle={toogle}
                                showComments={showComments}
                                id={id}
                                answerKey={answer[0].key}
                                vote_count={answer[0].up_votes}
                            />
                        </>
                    )}
                   
                </>
            </>
        </div>
    );
};

export default Answers;

const AnswerContainer = styled.div`
    margin-top: 1rem;
    position: relative;

    & .more-btn {
        position: absolute !important;
        top: 2.6rem;
        right: 16px;
        background: #fff;
        box-shadow: 0px 0px 4px 10px #fff;
        color: royalblue !important;
    }

    & .container {
        height: 4rem;
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
