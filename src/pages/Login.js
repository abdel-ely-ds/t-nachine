import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Button, CardBody, CardFieldset, CardInput, CardWrapper, Link, Navbar } from "../components";
import { useAuth } from "../contexts/AuthContext";


const Login = () => {

    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setIsLoading(true)
            setError("")
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/backtest")

        } catch {
            setError("Cannot find your account")
        }

        setIsLoading(false)
    }
    return (
        <>
            <Navbar />

            <CardWrapper>
                <CardBody onSubmit={handleSubmit}>
                    <CardFieldset>
                        <CardInput placeholder="Email" type="email" ref={emailRef} required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="Password" type="password" ref={passwordRef} required />
                    </CardFieldset>

                    <CardFieldset>
                        <Button type="submit" primary>Log in</Button>
                    </CardFieldset>

                    <CardFieldset>
                        <Link to="/signup">Don't have an account ?</Link>
                    </CardFieldset>


                </CardBody>
            </CardWrapper>
        </>
    );
}

export default Login;