import styled from "styled-components"

export const MyComment = () => {
    return (
        <Comment>
            <img src="https://st2.depositphotos.com/1032921/5237/v/950/depositphotos_52374307-stock-illustration-blue-profile-icon.jpg" alt="" />
            <input type="text" name="" id="" placeholder="Add a comment..."/>
            <button>Add Comment</button>
            
        </Comment>
    )
}




const Comment = styled.div`
height: 3rem;
width: 100%;
display: flex;
background-color: rgb(247,247,248);
justify-content: space-between;
    img{
        margin-left: 1rem;
        width: 2.25rem;
        height:2.25rem;
        margin-top: 6px;
        border-radius: 50%;
    }
    input{
        border:none;
        background-color: white;
        width: 65%;
        margin-left: 10px;
        margin-top: .3rem;
        border-radius: 1.2rem;
        height: 2.4rem;
        &:focus{
            outline: none;
        }
        &::placeholder{
            color: #a0a0a1;
            font-size: 15px;
            padding-left: 15px;
        }
    }
    button{
        background-color: rgb(46,105,255);
        width:20%;
        margin-top: .6rem;
        margin-right: 5px;
        height: 1.8rem;
        border-radius: 15px;
        align-items: center;
        text-align: center;
        color: white;
        font-weight: 500;
    }

`;