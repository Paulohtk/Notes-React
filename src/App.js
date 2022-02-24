import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  CriarNota(title, text) {
    const novaNota = {
      title,
      text,
    };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstados = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstados);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro CriarNota={this.CriarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
