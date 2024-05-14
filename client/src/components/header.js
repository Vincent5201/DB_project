import { Button, Grid } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate()

    const GoLoginSignup = async () => {
        navigate(`/login`);
    };
    const GoMainPage = async () => {
        navigate(`/`);
    };

    return <Grid>
        <Grid.Row>
            <Grid.Column>
                <Button onClick={GoMainPage}>首頁</Button>
                <Button onClick={GoLoginSignup}>登入註冊</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid> 
    
}

export default Header;