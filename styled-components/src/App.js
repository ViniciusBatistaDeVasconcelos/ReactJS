import React, { Component } from "react";

import { Title, TitleSmall } from "./styles";

class App extends Component {
  render() {
    return (
      <div>
        <Title fontSize={20}>
          Olá, mundo!
          <span>aqui vai um texto menor</span>
        </Title>

        <TitleSmall>Aqui vai um texto maior</TitleSmall>
      </div>
    );
  }
}

export default App;