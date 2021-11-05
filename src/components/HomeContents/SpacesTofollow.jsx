import styled from "styled-components"
import { SpacetoFollowData } from "../../utils/HomeSpacetofollow"


export const SpacesTofollow = () => {
    return (
        <SpaceFollow>
            <div className="heading">
                <p>Spaces to follow</p>
            </div>
            {SpacetoFollowData.map((e, i) => <div key={i} className="contents">
                <div className="main" style= {i===SpacetoFollowData.length-1?{borderBottom:"none"}:null}>
                    <img src={e.img} alt="" />
                    <div className="text" style= {i===0?{borderTop:"none"}:null}>
                        <span>{ e.title}</span>
                        <p>{ e.content}</p>
                    </div>
                </div>
            </div>)}
            
        </SpaceFollow>
    )
}


const SpaceFollow = styled.div`
width:14.135rem;
border: 1px solid var(--primary-border-color);
height: fit-content;

margin-left: 1.5rem;
margin-top: 2rem;
border-radius: 3px;
font-size: var(--primary-small-label-font-size);
box-shadow: 0px 0px 5px rgb(222,224,225);
background-color: #ffffff;

    .heading {
        padding-left: .5rem;
        min-height: 2.4rem;
        border-bottom: 1px solid rgb(230,231,232);
        p{
            padding-top: .5rem;
            padding-left: 1rem;
            font-size: var(--primary-paragraph-font-size);
            font-weight: 500;
        }
    }
    .contents {
        min-height:4.6rem;
        width: 100%;
        padding-top: 1rem;
        /* padding-left: .8rem; */
        &:hover{
            cursor: pointer;
            background-color:#fafafa;
        }

        .main {
        display: flex;
        width: 13rem;
        padding-bottom: .5rem;
        border-bottom: 1px solid #d9dadb;
        cursor: pointer;
        margin:auto;
            img {
            height: 1.5rem;
            border-radius: 5px;
            }
            .text {
                padding-left: 8px;
                span {
                    font-weight: 500;
                    cursor: pointer;
                }
                p {
                    color: var(--primary-light-paragraph-font-color);
                    cursor: pointer;

                }
            }
        }
    }
`;