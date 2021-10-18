import { useHistory } from "react-router";
import styled from "styled-components";
import { Button } from "../components";
import { useAuth } from "../contexts/AuthContext";
const centerRing = styled.div`
display: flex;
flex-direction: columns;
justify-content: center;

margin: auto;
width: 100%;
height: 100%;
`

const Backtest = () => {
    const { logout } = useAuth()
    const history = useHistory()

    function handleClick() {
        logout();
        history.push("/");
    }
    return (
        <Button onClick={handleClick}>
            Log out
        </Button>
    )
};

export default Backtest;