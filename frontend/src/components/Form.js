import React from "react";

export default class Form extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "http://localhost:4000/languages";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    this.setState({ res: data[0], loading: false });
  }

  constructor(props) {
    super(props);

    this.state = {
      translateText: "",
      sourceLang: "en",
      targetLang: "hi",
      translatedText: "",
    };
  }

  handleTextChange = (event) => {
    this.setState({
      translateText: event.target.value,
    });
  };
  handleSourceChange = (event) => {
    this.setState({
      sourceLang: event.target.value,
    });
  };
  handleTargetChange = (event) => {
    this.setState({
      targetLang: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.state.translatedText = "Loading...";

    const url =
      "http://localhost:3000/translate?translateText=" +
      this.state.translateText +
      "&sourceLang=" +
      this.state.sourceLang +
      "&targetLang=" +
      this.state.targetLang;
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    this.setState({ translatedText: data.translatedText, loading: false });
  };

  displayTranslatedText = () => {
    if (!this.translatedText) return "Hello";
    else {
      return <p>{this.state.translateText}</p>;
    }
  };
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.res) {
      return <div>Loading...</div>;
    }

    let lang_content = [];
    const len = this.state.res.length;
    for (let i = 0; i < len; i++) {
      lang_content.push(
        <option value={this.state.res[i].code}>{this.state.res[i].name}</option>
      );
    }
    return (
      <section>
        <section className="form-section">
          <form onSubmit={this.handleSubmit}>
            <div className="form-field-container">
              <label for="translateText" className="label-text">
                <span className="label-content">Text to be Translated</span>
              </label>

              <input
                type="text"
                name="translateText"
                id="translateText"
                value={this.state.translateText}
                onChange={this.handleTextChange}
                required
              />
            </div>

            <div className="lang-select-container">
              <div className="form-field-container">
                <label for="translateText" className="label-text">
                  <span className="label-content">Source Language</span>
                </label>

                <select
                  name="sourceLang"
                  id="sourceLang"
                  className="select-input"
                  value={this.state.sourceLang}
                  onChange={this.handleSourceChange}
                >
                  {lang_content}
                </select>
              </div>

              <div className="form-field-container">
                <label for="translateText" className="label-text">
                  <span className="label-content">Target Language</span>
                </label>

                <select
                  name="targetLang"
                  id="targetLang"
                  className="select-input"
                  value={this.state.targetLang}
                  onChange={this.handleTargetChange}
                >
                  {lang_content}
                </select>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>

            <div className="textArea-div">
              {/* <label for="translatedText" className="label-text">
                Tranaslated Text
              </label> */}

              <p className="label-text">Translated Text</p>

              <textarea
                name="translatedText"
                id=""
                cols="20"
                rows="10"
                readOnly
                value={this.state.translatedText}
              ></textarea>
            </div>
          </form>
        </section>
        {/* <section class="results-section">
          <div class="results">
            <p style={{ fontWeight: 600 }}>Translated Text</p>
            <div>{this.displayTranslatedText()}</div>
          </div>
        </section> */}
      </section>
    );
  }
}
