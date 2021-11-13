import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../../config/firebase.config";
import { Markup } from "interweave";
import styled from "styled-components";
import dayjs from "dayjs";
import { IconGrp } from "../../components/HomeContents/IconGrp";

const SingleAnswer = ({ answer, id }) => {
    // console.log("answer:", answer);
    const [more, setMore] = useState(true);

    const handleExpand = () => {
        setMore(false);
    };

    useEffect(() => {
        if (answer[0]?.answer?.length < 200) {
            setMore(false);
        } else {
        }
    }, [answer]);

    const [commentToogle, setCommentToogle] = useState(false);
    const [showComments, setShowComments] = useState("");

    const handleComments = (id) => {
        setShowComments(id);
        setCommentToogle(!commentToogle);
    };

    return (
        <div>
            <AnswerContainer>
                <div className={more ? "container" : ""}>
                    <Markup content={answer.answer} />
                    {more && (
                        <p className="more-btn" onClick={handleExpand}>
                            more
                        </p>
                    )}
                </div>
                <p className="img-container">
                    {/* {console.log("ans", answer)} */}
                    {answer.images?.length > 0 && more && (
                        <img src={answer.images[0]} alt="img" />
                    )}
                </p>
            </AnswerContainer>
            <IconGrp
                handleComments={handleComments}
                toogle={commentToogle}
                showComments={showComments}
                id={id}
                answerKey={answer.key}
                vote_count={answer.up_votes}
            />
        </div>
    );
};

export default SingleAnswer;

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
        margin-bottom: 1rem;
        /* border: 1px solid #000; */

        img {
            width: 100%;
        }
    }
`;
