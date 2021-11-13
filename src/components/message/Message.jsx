import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Message = () => {

    const [dis, setDis] = useState("none");
    const [icon, setIcondis] = useState("block");
    const [check, setCheck] = useState(true)

    const handleDis = () => {
        setIcondis("none");
        setDis("block");
    }

    const handleChat = () => {
        setDis("none");
        setIcondis("block");
    }

    return (
        <div>

             <MessageCont style={{display: icon}} onClick={handleDis}>
                <MessageContInner>
                    <MessageTitle>Messages</MessageTitle>
                    <MessageIcon>
                        <div><Link to="/chat"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="icon_svg-fill_as_stroke" d="M4.5 6.5V5.75C4.08579 5.75 3.75 6.08579 3.75 6.5H4.5ZM19.5 6.5H20.25C20.25 6.08579 19.9142 5.75 19.5 5.75V6.5ZM19.5 18.5V19.25C19.9142 19.25 20.25 18.9142 20.25 18.5H19.5ZM3.75 13C3.75 13.4142 4.08579 13.75 4.5 13.75C4.91421 13.75 5.25 13.4142 5.25 13H3.75ZM10 17.75C9.58579 17.75 9.25 18.0858 9.25 18.5C9.25 18.9142 9.58579 19.25 10 19.25V17.75ZM4.5 7.25H19.5V5.75H4.5V7.25ZM18.75 6.5V18.5H20.25V6.5H18.75ZM5.25 13V6.5H3.75V13H5.25ZM19.5 17.75H10V19.25H19.5V17.75Z" fill="#666666"></path><path class="icon_svg-stroke" d="M4.5 7.5L12 14L19.5 7.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-stroke" d="M7 18.5H2M4.5 16V21" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link></div>
                        <div><svg width="24px" height="24px" viewBox="0 0 24 24"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"><polyline transform="translate(12.002415, 12.000000) scale(1, -1) translate(-12.002415, -12.000000) " points="5 8.5 12 15.5 19.0048307 8.5"></polyline></g></svg></div>
                    </MessageIcon>
                </MessageContInner>
            </MessageCont>

            <MessageChat style={{display: dis}}>
                 <MessageContInner onClick={handleChat}>
                    <MessageTitle>Messages</MessageTitle>
                    <MessageIcon>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="icon_svg-fill_as_stroke" d="M4.5 6.5V5.75C4.08579 5.75 3.75 6.08579 3.75 6.5H4.5ZM19.5 6.5H20.25C20.25 6.08579 19.9142 5.75 19.5 5.75V6.5ZM19.5 18.5V19.25C19.9142 19.25 20.25 18.9142 20.25 18.5H19.5ZM3.75 13C3.75 13.4142 4.08579 13.75 4.5 13.75C4.91421 13.75 5.25 13.4142 5.25 13H3.75ZM10 17.75C9.58579 17.75 9.25 18.0858 9.25 18.5C9.25 18.9142 9.58579 19.25 10 19.25V17.75ZM4.5 7.25H19.5V5.75H4.5V7.25ZM18.75 6.5V18.5H20.25V6.5H18.75ZM5.25 13V6.5H3.75V13H5.25ZM19.5 17.75H10V19.25H19.5V17.75Z" fill="#666666"></path><path class="icon_svg-stroke" d="M4.5 7.5L12 14L19.5 7.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-stroke" d="M7 18.5H2M4.5 16V21" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                        <div><svg width="24px" height="24px" viewBox="0 0 24 24"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"><polyline points="5 8.5 12 15.5 19.0048307 8.5"></polyline></g></svg></div>
                    </MessageIcon>
                </MessageContInner>
                <hr />

                <Image>
                    <div>
                        <img width="80%" alt="message" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" />
                        <p>No Messages</p>
                        <span>Connect with others on Quora by beginning a new conversation.</span>
                    </div>
                </Image>

                <Link to="/chat">
                    <Button>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="icon_svg-fill_as_stroke" d="M4.5 6.5V5.75C4.08579 5.75 3.75 6.08579 3.75 6.5H4.5ZM19.5 6.5H20.25C20.25 6.08579 19.9142 5.75 19.5 5.75V6.5ZM19.5 18.5V19.25C19.9142 19.25 20.25 18.9142 20.25 18.5H19.5ZM3.75 13C3.75 13.4142 4.08579 13.75 4.5 13.75C4.91421 13.75 5.25 13.4142 5.25 13H3.75ZM10 17.75C9.58579 17.75 9.25 18.0858 9.25 18.5C9.25 18.9142 9.58579 19.25 10 19.25V17.75ZM4.5 7.25H19.5V5.75H4.5V7.25ZM18.75 6.5V18.5H20.25V6.5H18.75ZM5.25 13V6.5H3.75V13H5.25ZM19.5 17.75H10V19.25H19.5V17.75Z" fill="white"></path><path class="icon_svg-stroke" d="M4.5 7.5L12 14L19.5 7.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-stroke" d="M7 18.5H2M4.5 16V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                            <div style={{marginLeft:'3px', marginTop:'4px'}}> New Messages</div>
                        </div>
                    </Button>
                </Link>

            </MessageChat>

        </div>
    )
}

const MessageCont = styled.div`
    width: 300px;
    height: 45px;
    position : fixed;
    right: 30px;
    bottom: 0;
    font-size: 23px;
    cursor: pointer;
    z-index: 1000;
    background-color :white;
    border: 1px solid #f4f0f0;
    &:hover {
        background-color :#f4f0f0;
        cursor: pointer;
    }
    
 `;

 const MessageContInner = styled.div`
 height: 45px;
    display: flex;
    justify-content: space-between;
    flex-direction: coloumn;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    &:hover {
        background-color :#f4f0f0;
        cursor: pointer;
    }
 `

 const MessageTitle = styled.div`
    font-size: 18px;
    color: #282829;
    font-family: sans-serif;
    padding-left: 16px;
 `;

 const MessageIcon = styled.div`
    display: flex;
    width: 100px;
    justify-content: space-evenly;
 `;

 const MessageChat = styled.div`
    width: 350px;
    height: 57vh;
    border: 1px solid #f4f0f0;
    position : fixed;
    right: 30px;
    bottom : 0;
    z-index: 1000;
    background-color: white;
    hr{
        border-top: 0.1px solid #f4f0f0;
    }
 `

 const Image = styled.div`
    display: flex;
    flex-direction: coloumn;
    justify-content : center;
    align-items : center;
    div{
        width: 250px;
        height: 100px;
    }
    margin-top: 20px;
    p{
        font-size: 18px;
        font-weight: bold;
        color: grey;
        text-align: center;
    }
    span{
        font-size: 15px;
        color: grey;
        padding-left: auto;
        padding-right: auto;
    }
 `
const Button = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 20px;
    margin-left: 25px;
    background-color: blue;
    color: white;
    margin-top: 200px;
`
 