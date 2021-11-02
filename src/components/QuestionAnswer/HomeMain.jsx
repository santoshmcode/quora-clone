import styled from "styled-components"
import { CreateSpace } from "./CreateSpace"
import { QandA } from "./QandA"
import { SpacesTofollow } from "./SpacesTofollow"


export const HomeMain = () => {
    return (
        <StyledHome>
            <CreateSpace className="space"/>
            <div className="QandA">
                <QandA />
            </div>
            <SpacesTofollow className="follow"/>  
        </StyledHome>
    )
}


const StyledHome = styled.div`
display: flex;
position: relative;
    .space {
        position: fixed;
        top:20px;
        height: fit-content;
    }

    .follow {
        height: fit-content;
    }
`;

