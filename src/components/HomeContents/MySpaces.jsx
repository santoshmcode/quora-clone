import styled from "styled-components"
import { VscCircleFilled } from "react-icons/vsc";


export const MySpaces = ({title,img}) => {
    return (
        <MySpace>
            <VscCircleFilled className="redDot"/>
            <img src={img} alt="" />
            <p>{ title}</p>
        </MySpace>
    )
}


const MySpace = styled.div`
display: flex;
padding-left: .51rem;
cursor: pointer;
min-height: 2.2rem;
margin-bottom: 8px;
padding-top: .4rem;
position: relative;
&:hover {
    background-color: var(--primary-hover-background-color);
}
    .redDot {
        color:var(--primar-quora-logo-color);
        z-index: 1;
        position: absolute;
        left: 1.15rem;
        font-size: 1.1rem;
        top: 0px;
    }
    img {
        height: 1.3rem;
        border-radius: 3px;
    }
    p{
        margin-left: 1rem;
        cursor: pointer;
    }

`;