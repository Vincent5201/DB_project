import { Grid, Container, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Login() {
  const [account, setAccount] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signUpText, setSignUpText] = React.useState("註冊成功與否");
  const [login, setLogin] = React.useState(false);
  const navigate = useNavigate();

  const SignUp = async () => {
    setAccount("");
    setPassword("");
    setSignUpText("註冊成功");
  };
  const Log_in = () => {
    setLogin(true);
    setAccount("");
    setPassword("");
    navigate(`/`);
  };

  return (
    <Grid>
      <Grid.Column width={7}>
        <Form>
          <Form.Input
            label="帳號"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          ></Form.Input>
          <Form.Input
            label="密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Input>

          <h3 />

          <Container>
            <Form.Button onClick={SignUp}>註冊</Form.Button> {signUpText}
          </Container>
          <Container>
            <Form.Button onClick={Log_in}>登入</Form.Button>
          </Container>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
