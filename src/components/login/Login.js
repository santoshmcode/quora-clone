import styled from "styled-components";
import { useState } from "react";
import {
    auth,
    googleProvider,
    facebookProvider,
} from "../../config/firebase.config";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState(null);

    const handleLoginWithGoogle = async () => {
        try {
            await auth.signInWithPopup(googleProvider);
        } catch (error) {
        }
    };

    const handleLoginWithFacebook = async () => {
        try {
            await auth.signInWithPopup(facebookProvider);
        } catch (error) {
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setFormError(null);
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            setPassword("");
            setEmail("");
        } catch (error) {
            if (
                error.message ===
                "Firebase: The email address is already in use by another account. (auth/email-already-in-use)."
            ) {
                try {
                    await auth.signInWithEmailAndPassword(email, password);
                    setPassword("");
                    setEmail("");
                } catch (error) {
                    setFormError(error.message.replace("Firebase:", ""));
                    setPassword("");
                }
            } else {
                setFormError(error.message.replace("Firebase:", ""));
                setPassword("");
            }
        }
    };

    return (
        <Container>
            <LoginForm>
                <Logo>
                    <svg width="202" height="115">
                        <path
                            d="M24.4 31.9c12.7 0 24.7 9.9 24.7 24.3 0 8.1-3.8 14.7-9.2 19.1 1.6 2.6 3.6 4.4 6 4.4 2.8 0 4-2.2 4.2-4h3.6c.2 2.4-1 11.6-11 11.6-6.2 0-9.4-3.6-11.8-7.6-2 .4-4.2.8-6.4.8C12.2 80.5 0 70.6 0 56.2s12.2-24.3 24.4-24.3Zm89.7 10.9c10.2 0 18.4 7.2 18.5 17.9 0 11.3-8.3 18.7-18.5 18.7-9.9 0-18.5-7.5-18.5-18.7 0-10.9 8.5-17.9 18.5-17.9Zm67.3 0c9 0 14.6 2.4 14.6 11.4v15.4c0 2.4.8 3.6 2.8 3.6 1 0 1.8-.4 2.2-.6l.9 1.8c-.8 1.4-3.4 4-8.2 4-4.2 0-6.8-2-7.2-5.2h-.2c-2 3.6-5.6 6-10.8 6-6.2 0-10-3.2-10-9 0-11.4 15.9-8.2 20.5-15.8v-1.8c0-5.4-2.2-6.6-4.6-6.6-7.2 0-4 8.4-10.4 8.4-3.2 0-4.4-1.8-4.4-4 0-4.2 5.2-7.6 14.8-7.6Zm-113.8.8V67c0 4.4 2.2 6.4 5.4 6.4 2.6 0 5.4-1.2 6.8-4V50c0-2-.6-2.8-2.8-2.8h-2.4v-3.6h15.2v25.7c0 2.4.8 3.6 3.6 3.6h.4v3.8l-13.6 2.2v-5.1H80c-2.6 3.3-6.4 5.3-11.4 5.3-6.2 0-10.8-3.2-10.8-11.8V50c0-2-.8-2.8-3-2.8h-2.2v-3.6h15Zm90.3-.6c3.2 0 5.8 1.8 5.8 5.4 0 2.6-1.2 5.2-4.8 5.2-3 0-3.6-2.8-6.2-2.8-2.2 0-4 2.2-4 5.4v14.2c0 3.2.8 4.2 4.4 4.2h2v3.8h-21.6v-3.7h1.4c3.6 0 4-1 4-4.2V50c0-2-1-2.8-3.2-2.8h-2v-3.6h13.8l.6 7.2h.4c1.4-5.2 5.6-7.8 9.4-7.8ZM24.5 35.8c-9.2 0-13.2 6.9-13.2 20.3s4 20.3 13.2 20.3c1.7 0 3.2-.4 4.4-.8-1.8-4.2-4.2-8.2-8.8-8.2-.8 0-1.6.2-2.4.6l-1.4-2.8c2-1.7 4.7-3 8.4-3 5.8 0 8.8 2.8 11.2 6.4 1.4-3 2-7.2 2-12.5 0-13.4-4-20.3-13.4-20.3Zm89.6 10.4c-4.8 0-7.6 4.8-7.6 14.4 0 9.8 2.8 14.8 7.6 14.8 5.2 0 7.2-5 7.4-14.8.2-9.5-2.2-14.4-7.4-14.4Zm71.8 12.4c-3.2 3.5-10.6 4-10.6 10.4 0 3.2 2 5 4.6 5 4.4 0 6-3.8 6-8Z"
                            fill="rgb(185, 43, 39)"
                            fillRule="evenodd"
                            className="logo_fill"
                        />
                    </svg>
                    <p>
                        A place to share knowledge and better understand the
                        world
                    </p>
                </Logo>
                <Form>
                    <LeftSection>
                        <LoginWith onClick={handleLoginWithGoogle}>
                            <svg
                                width="24"
                                height="24"
                                fillRule="evenodd"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M20.16 12.193c0-.603-.054-1.182-.155-1.739H12v3.288h4.575a3.91 3.91 0 0 1-1.696 2.565v2.133h2.747c1.607-1.48 2.535-3.659 2.535-6.248h0z"
                                    fill="#4285f4"
                                ></path>
                                <path
                                    d="M12 20.5c2.295 0 4.219-.761 5.625-2.059l-2.747-2.133c-.761.51-1.735.811-2.878.811-2.214 0-4.088-1.495-4.756-3.504h-2.84v2.202C5.803 18.595 8.677 20.5 12 20.5h0z"
                                    fill="#34a853"
                                ></path>
                                <path
                                    d="M7.244 13.615A5.11 5.11 0 0 1 6.977 12a5.11 5.11 0 0 1 .267-1.615V8.183h-2.84C3.828 9.33 3.5 10.628 3.5 12s.328 2.67.904 3.817l2.84-2.202h0z"
                                    fill="#fbbc05"
                                ></path>
                                <path
                                    d="M12 6.881c1.248 0 2.368.429 3.249 1.271l2.438-2.438C16.215 4.342 14.291 3.5 12 3.5c-3.323 0-6.197 1.905-7.596 4.683l2.84 2.202C7.912 8.376 9.786 6.881 12 6.881h0z"
                                    fill="#ea4335"
                                ></path>
                            </svg>

                            <p>Continue with Google</p>
                        </LoginWith>
                        <LoginWith onClick={handleLoginWithFacebook}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    className="icon_svg-fill_as_stroke"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.4995 11.9995C20.4995 7.30481 16.6937 3.49902 11.999 3.49902C7.30432 3.49902 3.49854 7.30481 3.49854 11.9995C3.49854 16.2423 6.60704 19.759 10.6708 20.3967V14.4567H8.51249V11.9995H10.6708V10.1267C10.6708 7.99631 11.9399 6.81952 13.8816 6.81952C14.8116 6.81952 15.7844 6.98555 15.7844 6.98555V9.07746H14.7125C13.6565 9.07746 13.3272 9.73271 13.3272 10.4049V11.9995H15.6848L15.3079 14.4567H13.3272V20.3967C17.391 19.759 20.4995 16.2423 20.4995 11.9995Z"
                                    fill="#1877F2"
                                ></path>
                            </svg>

                            <p>Continue with Facebook</p>
                        </LoginWith>
                        <SignUp>Sign up with Email</SignUp>
                        <Policy>
                            By continuing you indicate that you agree to Quora’s
                            Terms of Service and Privacy Policy.
                        </Policy>
                    </LeftSection>
                    <RightSection>
                        <Title>Login / Signup</Title>
                        <Lable>Email</Lable>
                        <Input
                            type="text"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Lable>Password</Lable>
                        <Input
                            type="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormError>{formError}</FormError>
                        <SubContained>
                            <ForgotPassword>Forgot password?</ForgotPassword>
                            <LoginButton type="submit" onClick={handleRegister}>
                                Login
                            </LoginButton>
                        </SubContained>
                    </RightSection>
                </Form>
                <Footer>
                    <Languages>
                        <span>हिन्दी</span> <span>मराठी</span>
                    </Languages>
                    <About>
                        <p>
                            <span>About</span>・<span>Careers</span>・
                            <span>Privacy</span>・<span>Terms</span>・
                            <span>Contact</span>・<span>Languages</span>・
                            <span>Your Ad Choices</span>・<span>Press</span>・©
                            Quora, Inc. 2021
                        </p>
                    </About>
                </Footer>
            </LoginForm>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    width: 100%;
    min-height: 117vh;
    background: url("assets/login-img.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: grid;
    place-items: center;
`;

const LoginForm = styled.div`
    width: 700px;
    min-height: 600px;
    border: 1px solid #e6e6e6;
    background: #fff;
    border-radius: 5px;
    /* background: #ffffff99; */
`;

const Logo = styled.div`
    text-align: center;
    margin-top: 15px;

    svg {
        transform: scale(0.85);
    }

    p {
        font-weight: bold;
        color: #636466;
        transform: translateY(-20px);
        font-size: 15px;
    }
`;

const Form = styled.div`
    border-bottom: 1px solid #e6e6e6;
    height: 330px;
    display: flex;
    align-items: center;
`;

const RightSection = styled.div`
    /* border: 1px solid #e6e6e6; */
    width: 50%;
    height: 90%;
    padding: 0 25px;
`;

const LeftSection = styled(RightSection)`
    border-right: 1px solid #e6e6e6;
`;

const LoginWith = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #e6e6e6;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 250ms;

    &:hover {
        background: #e6e6e645;
    }

    svg {
        transform: scale(1.1);
        margin-right: 10px;
        cursor: pointer !important;
    }

    p {
        font-weight: 400;
        font-size: 15px;
        color: #282829;
        cursor: pointer;
    }
`;

const SignUp = styled.div`
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    color: #636466;
    padding: 7px;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    margin-bottom: 20px;
    transition: all 250ms;

    &:hover {
        background: #e6e6e645;
    }

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        border-bottom: 1px solid #e6e6e6;
        left: 0;
        bottom: -10px;
        cursor: default;
    }
`;

const Policy = styled.p`
    color: #939598;
    font-size: 13px;
    width: 95%;
    line-height: 1.3;
`;

const Title = styled.p`
    font-size: 15px;
    font-weight: 500;
    padding: 3px 0 10px 0;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
`;

const Lable = styled.p`
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 5px;
    padding-left: 1.5px;
`;

const Input = styled.input`
    width: 100%;
    height: 48px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-bottom: 25px;
    padding: 0 10px;
    font-size: 16px;
    color: #282829;
    transition: all 250ms;

    &:hover,
    &:active {
        border: 1px solid blue;
        outline: none;
    }
    &:focus {
        border: 1px solid blue;
        outline: none;
    }
`;

const FormError = styled.div`
    color: red;
    font-size: 10px;
    margin-top: -20px;
    margin-bottom: 20px;
`;

const SubContained = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -10px;
`;

const LoginButton = styled.button`
    width: 30%;
    height: 45px;
    border: 1px solid #e6e6e6;
    border-radius: 40px;
    background: blue;
    opacity: 0.5;
    color: #fff;
    font-weight: bold;
    transition: all 250ms;

    &:hover {
        opacity: 0.8;
    }
`;

const ForgotPassword = styled.p`
    font-size: 14px;
    color: #939598;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    padding-left: 2px;
`;

const Footer = styled.div`
    height: 117px;
`;

const Languages = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: darkblue;
    font-size: 14px;
    font-weight: 300;

    span {
        margin-left: 30px;
        position: relative;
        cursor: pointer;

        &:after {
            content: "❯";
            position: absolute;
            font-size: 16px;
            color: black;
            opacity: 0.5;
            right: -15px;
            cursor: default;
        }
    }
`;

const About = styled.div`
    height: 50%;
    border: 1px solid #e9e9e9;
    background: #e3e3e380;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #282829;
    opacity: 0.8;

    & p span {
        position: relative;
        cursor: pointer;
    }
    & p span::after {
        content: "";
        width: 100%;
        position: absolute;
        border-bottom: 1px solid #282829;
        left: 0;
        bottom: 0;
        opacity: 0;
        transition: all 250ms;
    }

    & p span:hover::after {
        opacity: 1;
    }
`;
