import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Aside" />
        <div className="App__Form">
          <div className="PageSwitcher">
            <a href="#" className="PageSwitcher__Item ">
              Iniciar Sessao
            </a>
            <a
              href="#"
              className="PageSwitcher__Item PageSwitcher__Item--Active"
            >
              Registo
            </a>
          </div>
          <div className="FormTitle">
            <a href="#" className="FormTitle__Link ">
              Iniciar Sessao
            </a>{" "}
            or{" "}
            <a href="#" className="FormTitle__Link FormTitle__Link --Active">
              Registo
            </a>
          </div>

          <div className="FormCenter">
            <form className="FormField " onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="FormField__Input"
                  placeholder="Insira o seu nome completo"
                  name="name"
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  Email
                </label>
                <input
                  type="Confpasemailsword"
                  id="email"
                  className="FormField__Input"
                  placeholder="Insira o seu email"
                  name="email"
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">
                  Palavra-Chave
                </label>
                <input
                  type="password"
                  id="password"
                  className="FormField__Input"
                  placeholder="Insira a sua palavra-chave"
                  name="password"
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="Confpassword">
                  Confirmacao da Palavra-Chave
                </label>
                <input
                  type="Confpassword"
                  id="Confpassword"
                  className="FormField__Input"
                  placeholder="Insira novamente sua palavra-chave."
                  name="Confpassword"
                />
              </div>
              <div className="FormField">
                <button className="FormField__Button mr-20">Registar-se</button>
                <a href="#" className="FormField__Link">
                  Ja sou membro
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
