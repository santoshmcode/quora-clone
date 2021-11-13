import styled from "styled-components";

export const ContentsNotification = () => {
    return (
        <Container>
            <div className="heading">
                <span>Notifications</span>
                <p>Mark All As Read . Settings </p>
            </div>
            <div className="subdiv">
                <img
                    height="31rem"
                    src="assets/Notifications/phsycology.jpeg"
                    alt=""
                />
                <div className="text">
                    <p>
                        Human Psychology Facts . Posted in a Space you might.
                        Wed
                    </p>
                    <span> Why are some people always single? </span>
                </div>
                <div className="hover">
                    <svg
                        className="dots"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                            class="icon_svg-stroke"
                            stroke-width="1.5"
                            stroke="#666"
                            fill="none"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="subdiv">
                <svg className="svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        class="icon_svg-fill_as_stroke"
                        d="M12 11.375c2.276 0 4.125 1.823 4.125 4.076V22.5c0 .345-.28.625-.625.625h-7a.625.625 0 0 1-.625-.625v-7.049c0-2.253 1.849-4.076 4.125-4.076zm-7-2c1.376 0 2.638.671 3.403 1.771a.625.625 0 1 1-1.027.713A2.884 2.884 0 0 0 5 10.624c-1.533 0-2.783 1.178-2.87 2.66l-.005.166-.001 8.424h4.127c.314 0 .574.231.618.533l.007.092a.624.624 0 0 1-.533.618l-.092.007H1.5a.624.624 0 0 1-.618-.533L.875 22.5v-9.049c0-2.253 1.849-4.076 4.125-4.076zm14.001 0c2.276 0 4.125 1.823 4.125 4.076V22.5l-.007.092a.626.626 0 0 1-.618.533H17.75l-.092-.007a.626.626 0 0 1-.533-.618l.007-.092a.626.626 0 0 1 .618-.533h4.126v-8.424l-.005-.166c-.087-1.482-1.337-2.66-2.87-2.66-.963 0-1.844.468-2.377 1.235a.625.625 0 1 1-1.027-.713A4.133 4.133 0 0 1 19 9.375zM12 12.625c-1.59 0-2.875 1.267-2.875 2.826v6.424h5.75v-6.424c0-1.503-1.195-2.735-2.706-2.821zm0-10a3.86 3.86 0 0 1 2.641 1.039c.743.652 1.234 1.541 1.234 2.461v.625A3.89 3.89 0 0 1 12 10.375a3.875 3.875 0 0 1-3.867-3.624l-.008-.001v-.625c0-.919.491-1.809 1.234-2.461A3.861 3.861 0 0 1 12 2.625zm2.613 4.126H9.387a2.625 2.625 0 0 0 5.226 0zM19.192.625h.158l.082.003.073.004.048.003.111.011.033.004-.144-.015a3.875 3.875 0 0 1 3.432 2.831 3.87 3.87 0 0 1 .135 1.237l-.002 2.176.022.188.025.152.012.06.059.012c.376.096.655.549.392.947l-.056.074a2.34 2.34 0 0 1-.429.381c-.848.596-1.86.578-2.695-.443l-.042-.053a3.87 3.87 0 0 1-3.362-.512.625.625 0 1 1 .712-1.028 2.626 2.626 0 0 0 2.672.188c.639-.453.834-1.328.415-2.046-.049-.097-.196-.263-.419-.458a7.85 7.85 0 0 0-.569-.448l-.819-.549-.042-.027-1.875 1.237a.625.625 0 0 1-.839-.14l-.053-.082-.452-.823a.63.63 0 0 1-.108-.321v-.02a.627.627 0 0 1 .056-.282A3.875 3.875 0 0 1 18.355.729l.042-.009.151-.032.03-.005.353-.046.06-.004.147-.007zm-14.505 0h.093l.103.002.086.004.118.008.104.01.072.009.123.019.082.014.07.014.314.079.042.013a3.85 3.85 0 0 1 .666.275c.148.079.292.167.429.264a3.86 3.86 0 0 1 .649.578l.113.132c.102.125.195.254.28.39l.057.094.005.009a3.89 3.89 0 0 1 .186.359.667.667 0 0 1 .048.158c.05.216.042.44-.018.634-.134.503-.531.948-1.088.948-.372 0-.678-.203-1.034-.56l-.354-.392-.158-.198-.309.253c-.297.23-.612.446-.949.649l-.344.198a6.762 6.762 0 0 1-1.882.491 2.62 2.62 0 0 0 1.04 1.56 2.626 2.626 0 0 0 3.014.018.625.625 0 1 1 .712 1.028 3.876 3.876 0 0 1-6.071-3.48 3.86 3.86 0 0 1 .248-1.099l.026-.064.047-.112.04-.087.023-.049.036-.072.025-.048.057-.103.03-.052.064-.104.048-.074.062-.09.054-.074.056-.073.07-.087.054-.063.063-.071.068-.072.069-.07.069-.066.063-.058.097-.084.047-.039.086-.068.074-.056.091-.065.066-.044.099-.063.063-.038.103-.059.072-.038.087-.044.095-.045.089-.039.094-.039.072-.028.116-.041.062-.02.151-.045.2-.049-.189.046.18-.044.027-.006.152-.029.082-.013.113-.015.067-.007.09-.008.058-.004L4.55.63l.096-.004z"
                        fill="#ffffff"
                    ></path>
                </svg>
                <div className="mid">
                    <p>Tue</p>
                    <span>Join Spaces on Quora</span>
                    <p>
                        Quora gets better when you follow Spaces. Find one that
                        matches your interests{" "}
                    </p>
                </div>
                <div className="hover">
                    <svg
                        className="dots"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                            class="icon_svg-stroke"
                            stroke-width="1.5"
                            stroke="#666"
                            fill="none"
                        ></path>
                    </svg>
                </div>
            </div>

            <div className="subdiv">
                <img
                    height="31rem"
                    src="assets/Notifications/round.jpeg"
                    alt=""
                />
                <div className="text">
                    <p>
                        Phsychology of Life. Posted in a Space you might line .
                        Mon
                    </p>
                    <span>
                        {" "}
                        How do you recognize people with high intelligence
                    </span>
                </div>
                <div className="hover">
                    <svg
                        className="dots"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                            class="icon_svg-stroke"
                            stroke-width="1.5"
                            stroke="#666"
                            fill="none"
                        ></path>
                    </svg>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 4.07rem;
    margin-left: rem;
    width: 35.75rem;
    .heading {
        display: flex;
        justify-content: space-between;
        min-height: 1.625rem;
        padding-left: 0.8rem;
        color: #282829;
        font-weight: 500;
        padding-top: 0.2rem;
        font-size: 0.97rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgb(222, 224, 225);
        p {
            font-size: 13px;
            color: #636466;
            font-weight: 400;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .subdiv {
        display: flex;
        justify-content: space-between;
        line-height: 21px;
        font-size: 0.98rem;
        min-height: 5.25rem;
        padding-top: 1rem;
        padding-left: 1rem;
        border-bottom: 1px solid rgb(222, 224, 225);
        &:hover {
            background-color: #f1efef;
        }

        p:first-child {
            color: #636466;
            font-size: 0.85rem;
        }
        span {
            color: #282829;
            font-weight: 500;
        }
        .svg {
            background-color: rgb(119, 183, 203);
            width: 2rem;
            height: 1.9rem;
            border-radius: 3px;
            padding-top: 3px;
            padding-bottom: 3px;
            padding-left: 2px;
            padding-right: 2px;
        }
        .text {
            margin-right: 6rem;
            margin-left: 1rem;
        }
        .mid {
            width: 28rem;
            margin-left: 1rem;
            margin-right: 1rem;
            p:last-child {
                font-size: 15px;
            }
        }
        .dots {
            margin-right: 2rem;
            margin-top: 0.5rem;
        }

        .hover {
            width: 2rem;
            height: 2.2rem;
            border-radius: 1.5rem;
            padding-left: 5px;
            margin-top: 5px;
            margin-right: 1rem;
            /* padding-top: -2px !important; */
            padding-bottom: 8px;
            &:hover {
                background-color: #e5e2e2;
            }
        }
    }
`;
