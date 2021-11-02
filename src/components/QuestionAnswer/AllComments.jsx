import styled from "styled-components"
import { CommentVotes } from "./CommentVotes";


const comments = [
    {   id:1,
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKf-df-vQH34nGs_rdQqbN8dzVY6ZSXBAjg&usqp=CAU",
        userName: "chirag",
        comment:"The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript"
    }
]

export const AllComments = () => {
    return (
        comments.length && comments.map((e) => <AllComment key={e.id}>
                                                    <div className="header">
                                                        <img src={e.userImg} alt="" />
                                                        <div className="user">
                                                        <p> {e.userName} -<label htmlFor=""> Follow</label></p>
                                                        <span>address -updated date</span>
                                                        </div>
                                                    </div>
            
                                                <p className="contents">{ e.comment}</p>
            

                                                <CommentVotes/>
                                                </AllComment>)
    )
}


const AllComment = styled.div`
width: 100%;
margin:2rem auto;
/* border:1px solid grey; */
    .header{
        padding-top: .5rem;
        padding-bottom: .5rem;
        padding-left: 1rem;
        display: flex;
        .user{
            margin-top: 0px;
            padding-top: 3px;
            margin-left: 5px;
                p {
                    padding-left: 5px;
                    font-size: var(--primary-heading-font-size);
                    font-weight: 700;
                    color: #282829;
                    line-height: .3cm;
                    padding-top: 0px;
                label{
                    color:#2e69ff;
                    font-weight: 500;
                }

            }
            span{
                padding-left: 5px;
                font-size: 13px;
            }
        }
        img{
            width: 2.25rem;
            height:2.25rem;
            border-radius: 50%;
        }

    }
    .contents{
        font-size: var(--primary-paragraph-font-size);
        line-height: var(--primary-paragraph-line-height);
        color:  var(--primary-paragraph-font-color);
        padding:.5rem 1rem 1rem 3.8rem;
        
       
    }
`;
