import styled from "styled-components"
import { MySpaces } from "./MySpaces";
import { AiOutlineCompass } from "react-icons/ai";
import { SpaceData } from "../../utils/HomeCreateSpace";


export const CreateSpace = () => {
    return (
        <Space>
            <div className="createSpace">
                <span>+</span>
                <p>Create Space</p>
            </div>
            {SpaceData.map((e, i) => <MySpaces key={i} {...e} />)}
            <div className="discoverSpace">
                <span><AiOutlineCompass className="compass" /></span>
                <p>Discover Spaces</p>
            </div>
            <div className="footer">
                <p> {`${`About . `}`}</p>
                <p> Careers . </p>
                <p> Terms . </p>
                <p> Privacy . </p>
                <p> Acceptable Use . </p>
                <p> Business . </p>
                <p> Press . </p>
                <p> Your </p>
                <p>Ad Choices</p>
            </div>
            
        </Space>
    )
}


const Space = styled.div`
width:11rem;
height: 34rem;
top: 2rem;
position: fixed;
color: #636466;
left: 8.1rem;
font-size: var(--primary-small-label-font-size);
scrollbar-width: thin;
scrollbar-color: white rgb(194, 193, 193);
overflow-x: hidden;
border-top: 1px solid rgba(240, 240, 240, 0.6);
&::-webkit-scrollbar {
    width: 6px;
}
&::-webkit-scrollbar-thumb {
    background-color: var(--primary-hover-background-color);
    border-radius: 2px;
    
}
    .createSpace {
        padding-left: 1rem;
        padding-top: .3rem;
        display: flex;
        min-height:2.2rem;
        background-color: rgb(236,237,237);
        span {
            width:1.1rem;
            height: 1.4rem;
            padding-top: 0px;
            margin-right: 10px;
            padding-bottom: 10px !important;
            padding-left: 4px;
            border-radius: .9rem;
            background-color: rgb(230,231,232);
        }
        &:hover {
            background: var(--primary-hover-background-color)
        }

    }
    .discoverSpace {
        padding-left: .54rem;
        padding-top: .3rem;
        display: flex;
        min-height:2.2rem;
        margin-bottom: 2rem;
        &:hover {
            background: var(--primary-hover-background-color)
        }
        span {
            width:1.2rem;
            height: 1.4rem;
            margin-right: 10px;
            padding-top: 4px;
            padding-bottom: 0px !important;
            padding-left: 3px;
            border-radius: .9rem;
            background-color: rgb(230,231,232);
        }
        p {
            padding-left: .4rem;
        }
    }
    .footer {
        border-top: 1px solid rgb(230,231,232);
        padding-top:2rem;
        display:flex;
        flex-wrap: wrap;
        color:#939598 ;
        word-spacing: 1px;
        padding-right: 0px;

        p {
            line-height: .55cm;
            letter-spacing: .7px;
            cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
        }
    }
`;