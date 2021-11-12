import styled from "styled-components";
import { MySpaces } from "./MySpaces";
import { AiOutlineCompass } from "react-icons/ai";
import { SpaceData } from "../../utils/HomeCreateSpace";

export const CreateSpace = () => {
    return (
        <Space>
            <div className="create-space-container">
                <div className="createSpace">
                    <div>
                        <div>+</div>
                    </div>
                    <p>Create Space</p>
                </div>
                <div className="create-space-content"></div>
                {SpaceData.map((e, i) => (
                    <MySpaces key={i} {...e} />
                ))}
                <div className="discoverSpace">
                    <span>
                        <AiOutlineCompass className="compass" />
                    </span>
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
            </div>
        </Space>
    );
};

const Space = styled.div`
    width: 9rem;
    height: 34rem;
    margin-top: 2rem;
    position: relative;
    color: #636466;
    font-size: var(--primary-small-label-font-size);
    scrollbar-width: thin;
    scrollbar-color: white rgb(194, 193, 193);
    overflow-x: hidden;
    overflow-y: hidden;

    .create-space-container {
        position: fixed;
        width: 9rem;
    }

    &:hover {
        overflow-y: visible;
    }
    border-top: 1px solid rgba(240, 240, 240, 0.6);
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-hover-background-color);
        border-radius: 2px;
    }
    .createSpace {
        display: flex;
        min-height: 2.2rem;
        cursor: pointer;
        background-color: rgb(236, 237, 237);
        display: flex;
        align-items: center;
        justify-content: center;
        & > div {
            width: 1.1rem;
            height: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;

            border-radius: 50%;
            line-height: -50%;
            background-color: rgb(230, 231, 232);

            div {
                transform: translateY(-12%);
            }
        }
        &:hover {
            background: var(--primary-hover-background-color);
        }
        p {
            cursor: pointer;
        }
    }
    .discoverSpace {
        padding-left: 0.54rem;
        padding-top: 0.3rem;
        display: flex;
        min-height: 2.2rem;
        margin-bottom: 2rem;
        cursor: pointer;
        &:hover {
            background: var(--primary-hover-background-color);
        }
        span {
            width: 1.2rem;
            height: 1.4rem;
            margin-right: 10px;
            padding-top: 4px;
            padding-bottom: 0px !important;
            padding-left: 3px;
            border-radius: 0.9rem;
            background-color: rgb(230, 231, 232);
        }
        p {
            padding-left: 0.4rem;
            cursor: pointer;
        }
    }
    .footer {
        border-top: 1px solid rgb(230, 231, 232);
        padding-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        color: #939598;
        word-spacing: 1px;
        padding-right: 0px;

        p {
            line-height: 0.55cm;
            letter-spacing: 0.7px;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
