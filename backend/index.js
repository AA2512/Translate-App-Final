const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const {
  detectLanguage,
  translateText,
  TranslateClient,
} = require("./google_translate");

// const langJSON = require("./languages.json");

// app.get("/", async (req, res) => {
//   const lang = await TranslateClient.getLanguages();
//   res.locals.languages = lang[0];
//   res.render("index");
// });

// console.log(detectLanguge);

app.get("/languages", async (req, res) => {
  const lang = await TranslateClient.getLanguages();
  res.json(lang);
});

app.get("/translate", async (req, res) => {
  if (
    !req.query.translateText ||
    !req.query.targetLang ||
    !req.query.sourceLang
  ) {
    return res.json({
      error: "Kindly proivde the text to be translated.",
    });
  }
  const inputText = req.query.translateText;
  const sourceLang = req.query.sourceLang;
  const targetLang = req.query.targetLang;
  // console.log(translateLang);
  try {
    const lang = await detectLanguage(inputText);
    const translatedText = await translateText(
      inputText,
      sourceLang,
      targetLang
    );
    console.log(translatedText);
    res.json({
      language: lang,
      translatedText: translatedText,
    });
  } catch (error) {
    return res.json({
      error: "Something went wrong!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
