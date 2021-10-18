import { useRef, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { IconContext } from "react-icons";
import { useHistory } from "react-router";
import { Button, CardBody, CardFieldset, CardIcon, CardInput, CardWrapper, Link, Navbar } from "../components";
import { useAuth } from "../contexts/AuthContext";


const Signup = () => {

    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setIsLoading(true)
            setError("")
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/backtest")


        } catch {
            setError("Cannot create your account!")
        }

        setIsLoading(false)
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                <Navbar />

                <CardWrapper>

                    <CardBody onSubmit={handleSubmit}>
                        {error &&
                            <CardFieldset>
                                <Alert variant="danger">{error}</Alert>
                            </CardFieldset>
                        }

                        <CardFieldset>
                            <CardInput placeholder="Username" type="text" required />
                        </CardFieldset>

                        <CardFieldset>
                            <CardInput placeholder="E-mail" type="email" ref={emailRef} required />
                        </CardFieldset>

                        <CardFieldset>
                            <CardInput placeholder="Password" type="password" ref={passwordRef} required />
                            <CardIcon className="fa fa-eye" eye small />
                        </CardFieldset>

                        <CardFieldset>
                            <Button primary type="submit" disabled={isLoading}>
                                {!isLoading ? 'Sign Up' :
                                    (
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="large"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    )}

                            </Button>
                        </CardFieldset>

                        <CardFieldset>
                            <Link to="/login">I already have an account</Link>
                        </CardFieldset>

                    </CardBody>
                </CardWrapper>
            </IconContext.Provider>
        </>
    );
}

export default Signup;