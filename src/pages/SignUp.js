import { Navbar } from "../components";
import {
    CardBody, CardButton, CardFieldset, CardHeader, CardHeading, CardIcon,
    CardInput, CardLink, CardOptions, CardOptionsItem,
    CardOptionsNote, CardWrapper
} from "../components/Card/Card.styles";

const Signup = () => {
    return (
        <>
            <Navbar />

            <CardWrapper>
                <CardHeader>
                    <CardHeading>Sign In</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <CardInput placeholder="Username" type="text" required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="E-mail" type="text" required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="Password" type="password" required />
                        <CardIcon className="fa fa-eye" eye small />
                    </CardFieldset>

                    <CardFieldset>
                        <CardOptionsNote>Or sign up with</CardOptionsNote>

                        <CardOptions>
                            <CardOptionsItem>
                                <CardIcon className="fab fa-google" big />
                            </CardOptionsItem>

                            <CardOptionsItem>
                                <CardIcon className="fab fa-twitter" big />
                            </CardOptionsItem>

                            <CardOptionsItem>
                                <CardIcon className="fab fa-facebook" big />
                            </CardOptionsItem>
                        </CardOptions>
                    </CardFieldset>

                    <CardFieldset>
                        <CardButton type="button">Sign Up</CardButton>
                    </CardFieldset>

                    <CardFieldset>
                        <CardLink to="/login">I already have an account</CardLink>
                    </CardFieldset>

                </CardBody>
            </CardWrapper>
        </>
    );
}

export default Signup;