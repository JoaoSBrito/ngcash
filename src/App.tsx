import { BrowserRouter } from "react-router-dom";
import { TransactionsProvider } from "./context/TransactionsContext";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <TransactionsProvider>
          <Router />
        </TransactionsProvider>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
