import styled from "styled-components";
import { CommentVotes } from "./CommentVotes";
import { useState } from "react";
const comments = [
    {
        id: 1,
        userImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKf-df-vQH34nGs_rdQqbN8dzVY6ZSXBAjg&usqp=CAU",
        userName: "chirag",
        comment:
            "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
    },
];

export const AllComments = () => {
    const [unhide, setUnhide] = useState(false);
    const [ID, setID] = useState("");

    const handleUnhide = (id) => {
        setID(id);
        setUnhide(true);
    };

    return (
        comments.length &&
        comments.map((e) => (
            <AllComment key={e.id}>
                <div className="header">
                    <img src={e.userImg} alt="" />
                    <div className="user">
                        <p>
                            {e.userName} -<label htmlFor=""> Follow</label>
                        </p>
                        <span>address -updated date</span>
                    </div>
                </div>

                <p className="contents">
                    {e.comment.length > 70 ? (
                        <>
                            {e.comment.slice(0, 123)}{" "}
                            <label
                                onClick={() => {
                                    handleUnhide(e.id);
                                }}
                                className={
                                    unhide && ID === e.id ? `hide` : `unhide`
                                }
                            >
                                (more)
                            </label>
                            <span
                                className={
                                    unhide && ID === e.id ? `unhide` : `hide`
                                }
                            >
                                {e.comment.slice(123)}{" "}
                            </span>
                        </>
                    ) : (
                        e.comment
                    )}
                </p>

                <CommentVotes />
            </AllComment>
        ))
    );
};

const AllComment = styled.div`
    width: 100%;
    margin: 2rem auto 0rem;
    border-bottom: 0.5px solid rgb(222, 224, 225);
    .header {
        padding-top: 0.5rem;
        padding-bottom: 0rem;
        padding-left: 1rem;
        display: flex;
        .user {
            margin-top: 0px;
            padding-top: 3px;
            margin-left: 5px;
            p {
                padding-left: 5px;
                font-size: var(--primary-heading-font-size);
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
                padding-left: 5px;
                font-size: 13px;
            }
        }
        img {
            width: 2.25rem;
            height: 2.25rem;
            border-radius: 50%;
        }
    }
    .contents {
        font-size: var(--primary-paragraph-font-size);
        line-height: var(--primary-paragraph-line-height);
        color: var(--primary-paragraph-font-color);
        padding: 0.5rem 1rem 1rem 3.8rem;
        position: relative;
        label {
            position: absolute;
            color: blue;
            cursor: pointer;
            top: 1.8rem;
            right: 2.2rem;
            box-shadow: 0px 10px 10px 8px white;
        }
        .hide {
            display: none;
        }
        .unhide {
            display: block;
        }
    }
`;
