import React from "react";

// Pages
import Main from "./pages/Main";

// Components
import { Route } from 'react-router-dom';

function App() {
  return (
    <Main>
      <Route exact path="/" component={Main} />
    </Main>
  );
}

export default App;
