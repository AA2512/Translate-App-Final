import React from "react";

export default class Hero extends React.Component {
  render() {
    return (
      <section className="hero-section">
        <div>
          <h2
            className="hero-head"
            style={{
              color: "white",
            }}
          >
            Codeyoung - Translate App
          </h2>
          <small
            style={{
              color: "white",
            }}
            className="hero-subhead"
          >
            A translation app made by using Google Translation API
          </small>
        </div>
      </section>
    );
  }
}
