import styled from 'styled-components'

export const ContentsNotification = () => {
    return (
        <Container>
            <div className="heading">
                <p>Notifications</p>
                <p>Mark All As Read {& middot}</p>
            </div>
            
        </Container>
    )
}


const Container = styled.div`
margin-top: 4.07rem;
border: 1px solid red;
width: 35.75rem;


`;