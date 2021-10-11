import { Navbar } from "../components";
import { CardBody, CardFieldset, CardHeader, CardHeading, CardInput, CardWrapper } from "../components/Card/Card.styles";

const Login = () => {
    return (
        <>
            <Navbar />

            <CardWrapper>
                <CardHeader>
                    <CardHeading>Log in</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <CardInput placeholder="Username" type="text" required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="Password" type="password" required />
                    </CardFieldset>

                </CardBody>
            </CardWrapper>
        </>
    );
}

export default Login;