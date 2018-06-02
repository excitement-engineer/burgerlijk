import React, { Component } from "react";
import "./App.css";
import questions from "./data";

class App extends Component {
  state = {
    values: questions.map(entry => {
      if (entry.type === "SINGLE") {
        return false;
      } else {
        return undefined;
      }
    })
  };

  _calculateTotalValue = () => {
    const { values } = this.state;

    let totalCount = 0;

    values.forEach((entry, index) => {
      const { amount, type } = questions[index];
      if (type === "SINGLE") {
        totalCount += amount * (entry ? 1 : 0);
      } else {
        if (entry) {
          totalCount += amount * entry;
        }
      }
    });
    return totalCount;
  };

  render() {
    const totalCount = this._calculateTotalValue();
    return (
      <div className="App">
        <h1>De Burgerlijke Burgertest</h1>
        <p>Hoe burgerlijk ben jij? </p>
        <p>
          Maak je je zorgen over hoe burgerlijk je aan het worden bent? Of ben
          je juist trots op je 'burgertitel'? Doe hieronder de test!
        </p>
        <Spacer />
        {questions.map((entry, index) => {
          const { type } = entry;

          if (type === "SINGLE") {
            return (
              <div key={index}>
                <p>
                  <b>{entry.question}</b>
                </p>
                <SideBySide>
                  <p>Punten: {entry.amount}</p>
                  <HorizontalSpacer />
                  <select
                    value={this.state.values[index]}
                    onChange={evt => {
                      const inputValue = evt.target.value;

                      this.setState(({ values }) => {
                        values[index] = inputValue;
                        return {
                          values
                        };
                      });
                    }}
                  >
                    <option value={false}>Nee</option>
                    <option value={true}>Ja</option>
                  </select>
                </SideBySide>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <p>
                  <b>{entry.question}</b>
                </p>
                <SideBySide>
                  <p>Punten: {entry.amount}</p>
                  <HorizontalSpacer />
                  <input
                    value={this.state.values[index]}
                    onChange={evt => {
                      const count = evt.target.value;

                      this.setState(({ values }) => {
                        values[index] = Number(count);
                        return {
                          values
                        };
                      });
                    }}
                    type="number"
                    min="0"
                    placeholder="Hoeveelheid"
                  />
                </SideBySide>
              </div>
            );
          }
        })}
        <p>
          Als je nog ideeën hebt om deze prachtige lijst aan te vullen of
          misschien wel een klacht wilt indienen, stuur dan gerust een mailtje
          naar{" "}
          <a href="mailto:bobdeBurger@outlook.com" target="_top">
            BobdeBurger@outlook.com
          </a>.
        </p>
        <div className="score-container">
          <h2>Jouw Burgerlijkheidsscore: {totalCount}</h2>
        </div>
      </div>
    );
  }
}

const Spacer = () => <div style={{ paddingTop: "32px" }} />;

const HorizontalSpacer = () => <div style={{ paddingRight: "32px" }} />;
const SideBySide = props => (
  <div className="side-by-side">{props.children}</div>
);
export default App;
