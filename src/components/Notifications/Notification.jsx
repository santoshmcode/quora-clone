import styled from "styled-components";
import { Message } from "../message/Message";
import { ContentsNotification } from "./ContentsNotification";
import { SideBarNotifications } from "./SideBarNotifications";

export const Notification = () => {
    return (
        <Container>
            <SideBarNotifications />
            <ContentsNotification />
            <Message />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 1000px;
    margin: auto;
    margin-top: -1.5rem;
    border: 5px solid rgba(230, 230, 230, 0);
`;
