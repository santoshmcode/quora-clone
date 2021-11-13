import styled from "styled-components";

export const SideBarNotifications = () => {
    return (
        <SideBar>
            <div className="heading">
                <p>Filters</p>
            </div>
            <div className="contents">
                <div className="tags head">
                    <p>All Notifications</p>
                </div>
                <div className="tags">
                    <p> Stories</p>
                </div>
                <div className="tags">
                    <p>Questions</p>
                </div>
                <div className="tags flex">
                    <p>Spaces</p>
                    <p>2</p>
                </div>
                <div className="tags">
                    <p>People updates</p>
                </div>
                <div className="tags">
                    <p>
                        Comments and <br /> mentions
                    </p>
                </div>
                <div className="tags">
                    <p>Upvotes</p>
                </div>
                <div className="tags">
                    <p>Your Content</p>
                </div>
                <div className="tags">
                    <p>Your profile</p>
                </div>
                <div className="tags">
                    <p>Announcements</p>
                </div>
                <div className="tags">
                    <p>Earnings</p>
                </div>
                <div className="tags">
                    <p>Subscriptions</p>
                </div>
            </div>
        </SideBar>
    );
};

const SideBar = styled.div`
    width: 10.875rem;
    margin-right: 2rem;
    margin-top: 4.07rem;

    font-size: var(--primary-small-label-font-size);
    .heading {
        min-height: 1.625rem;
        padding-left: 0.8rem;
        color: #282829;
        font-weight: 500;
        padding-top: 0.2rem;
        font-size: 0.97rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgb(222, 224, 225);
    }
    .contents {
        /* border: 1px solid red; */

        .tags {
            color: #636466;
            min-height: 1.625rem;
            margin-top: 6px;
            padding-left: 0.8rem;
            padding-top: 0.2rem;
            border-radius: 5px;
            padding-bottom: 0.2rem;

            &:hover {
                background-color: #f1efef;
            }
        }
        .head {
            background-color: #f8e9e9;
            color: #b92b27;
            font-weight: 500;
        }
        .flex {
            display: flex;
            justify-content: space-between;
            padding-right: 0.8rem;
        }
    }
`;
