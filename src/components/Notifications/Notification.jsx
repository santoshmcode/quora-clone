import styled from "styled-components";
import { ContentsNotification } from "./ContentsNotification";
import {SideBarNotifications} from './SideBarNotifications'

export const Notification = () => {
    return (
        <Container>
            <SideBarNotifications />
            <ContentsNotification/>
            
        </Container>
    )
}


const Container = styled.div`
display: flex;

`