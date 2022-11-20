import { Container, Form } from "../../styles/global";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <Container>
      <Form>
        <h1>Faça o seu cadastro!</h1>

        <input type="text" placeholder="Digite o seu nome" />
        <input type="text" placeholder="Digite o seu usuário" />
        <input type="password" placeholder="Digite o sua senha" />
        <input type="password" placeholder="Confirme a sua senha" />

        <button type="submit">Cadastrar!</button>

        <div className="routering">
          <p>Já possui uma conta?</p>
          <Link to="/">Fazer Login</Link>
        </div>
      </Form>
    </Container>
  );
}
