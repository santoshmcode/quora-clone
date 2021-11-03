import styled from "styled-components";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { BiDotsHorizontalRounded} from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import { GoArrowUp} from "react-icons/go";
import { useState } from "react";


export const CommentVotes = () => {
    const [upvotes, setUpvotes] = useState(false);
    const [countUpvotes, setCountUpVotes] = useState(1);

    const handleClick = () => {
        setUpvotes(!upvotes);
        upvotes?setCountUpVotes(pre=>pre-1):setCountUpVotes(prev=>prev+1)

    }

    return (
        <>
            <CommentIcons>
                <div onClick={handleClick} className="leftBtns">
                    {upvotes?<GoArrowUp className="upvotefilled"/>:<BiUpvote className="upvote" />}
                    <p>Upvote-</p>
                    <p>{countUpvotes }</p>
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
div:first-child {
    margin-left:1rem;
    
}

    .leftBtns {
        display: flex;
        cursor: pointer;
        height: 30px;
        border-radius: 15px;
        margin-right: 10px;
        &:hover{
        background: #eeeded;
        }
        .upvote {
            padding-left:5px;
            padding-top: 5px;
            font-size: 1.55rem;
            width: 2rem;
            color: #636466;   

        }
        .upvotefilled {
            padding-left:5px;
            padding-top: 2px;
            padding-bottom: 2px;
            font-size: 1.9rem;
            width: 2rem;
            color:#2e69ff;   

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
            cursor: pointer;
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
            cursor: pointer;
            padding-top: 5px;
            margin-left: 15px;
            width: 32px;
            padding-left: 7px;
            border-radius: 25px;
            color: #636466;
            height: 30px;
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

