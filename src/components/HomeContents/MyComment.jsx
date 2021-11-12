import styled from "styled-components";
import { useState } from "react";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

export const MyComment = () => {
    const user = useSelector(selectUser);
    const [comment, setComment] = useState("");

    const handleChange = (e) => {
        setComment(e.target.value);
    };
    return (
        <Comment>
            <img
                src={
                    user
                        ? user.photoURL
                        : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png "
                }
                alt=""
            />
            <input
                onChange={handleChange}
                type="text"
                name=""
                id=""
                placeholder="Add a comment..."
            />
            <button>Add Comment</button>
        </Comment>
    );
};

const Comment = styled.div`
    height: 3rem;
    width: 100%;
    display: flex;
    background-color: rgb(247, 247, 248);
    justify-content: space-between;
    border-bottom: 0.5px solid rgb(222, 224, 225);
    img {
        margin-left: 1rem;
        width: 2.25rem;
        height: 2.25rem;
        margin-top: 6px;
        border-radius: 50%;
    }
    input {
        border: none;
        background-color: white;
        width: 65%;
        margin-left: 10px;
        margin-top: 0.3rem;
        border-radius: 1.2rem;
        height: 2.4rem;
        padding: 0px 35px;
        &:focus {
            outline: none;
        }
        &::placeholder {
            color: #a0a0a1;
            font-size: 15px;
            padding-left: 15px 15px;
            margin-left: 30px;
        }
    }
    button {
        background-color: rgb(46, 105, 255);
        width: 20%;
        margin-top: 0.6rem;
        margin-right: 5px;
        height: 1.8rem;
        border-radius: 15px;
        align-items: center;
        text-align: center;
        color: white;
        font-weight: 500;
    }
`;
