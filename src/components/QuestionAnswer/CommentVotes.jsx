import styled from "styled-components";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";
import { BiDotsHorizontalRounded, BiMessageRounded } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MyComment } from "./MyComment";
import { BiShare } from "react-icons/bi";

export const CommentVotes = () => {
    return (
        <>
            <CommentIcons>
                <div className="leftBtns">
                    <BiUpvote className="upvote"/>
                    <p>Upvote-</p>
                    <p>12</p>
                </div>
                <div className="leftBtns">
                    <BiShare className="share"/>
                    <p>Reply</p>
                    
                </div>
                <div className="rightBtn">
                    <BiDownvote className="downvote"/>
                    <BiDotsHorizontalRounded className="dots"/>
                </div>
                
            </CommentIcons>
            
        </>
    )
}


const CommentIcons = styled.div`
height: 30px;
margin-bottom: .2rem;
display: flex;
margin-left: 2.2rem;
/* justify-content: space-between; */
div:first-child {
    margin-left:1rem;
}

    .leftBtns {
        /* min-width:6.5rem; */
        display: flex;
        cursor: pointer;
        
        height: 30px;
        border-radius: 15px;
        margin-right: 10px;
        &:hover{
        border:1px solid #d8d7d7;
        background: rgb(247,247,247);

        }
        .upvote {
            padding-left:5px;
            padding-top: 5px;
            font-size: 1.55rem;
            width: 2rem;
            color: #636466;   

        }
        .share{
            padding-left:5px;
            padding-top: 5px;
            font-size: 1.55rem;
            width: 2rem;
            color: #636466;   
        }
        p{
            font-size: var( --primary-small-label-font-size);
            padding-top: 5px;
            padding-left:3px;
            padding-right: 9px;
        }

    }
    .rightBtn {
        margin-left:180px;
        min-width: 100px;
        
        .downvote{
            color: #636466;
            font-size: 1.6rem;
            margin-right: 10px;
            padding-right: 5px;

            /* display: flex; */
            cursor: pointer;
            padding-top: 5px;
            margin-left: 15px;
            width: 30px;
            padding-left: 7px;
            border-radius: 25px;
            color: #636466;
            height: 30px;
            /* label{
                        margin-left: 10px;
                        font-size: .85rem;
                        margin-top: -5px;
                        top: -30px;
                    
                    } */

            &:hover{
                        background: #eeeded;
                    }
                /* &:hover+.hide{
                    display: block;
                    background: #464444;;
                } */
        }
        .dots{
            color: #636466;
            font-size: 1.5rem;
            /* margin-right: 10px; */
            padding-right: 5px;

            /* display: flex; */
            cursor: pointer;
            padding-top: 5px;
            /* margin-left: 15px; */
            width: 32px;
            padding-left: 7px;
            border-radius: 25px;
            color: #636466;
            height: 30px;
            &:hover{
                        background: #eeeded;
                    }
        }
    }
`;

