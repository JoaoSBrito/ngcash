import { Container, Form } from "../../styles/global";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <Container>
      <Form onSubmit={() => navigate("/home")}>
        <h1>Faça o seu Login!</h1>

        <input type="name" placeholder="Digite o seu usuário" />
        <input type="password" placeholder="Digite a sua senha" />

        <button type="submit">Entrar!</button>

        <div className="routering">
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </Form>
    </Container>
  );
}
