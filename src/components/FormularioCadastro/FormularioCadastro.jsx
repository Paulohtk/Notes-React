import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }
  _handleChangeTitle(event) {
    event.stopPropagation();

    this.title = event.target.value;
  }
  _handleChangeText(event) {
    event.stopPropagation();

    this.text = event.target.value;
  }
  _handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.CriarNota(this.title, this.text);
  }

  render() {
    return (
      <form className="form-cadastro " onSubmit={this._handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
