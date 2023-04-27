const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
require('dotenv').config()
const PORT = 8020;


const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

const app = express();

app.use(bodyParse.json());
app.use(cors());

app.post("/chat", async (req, res) => {
    const {prompt} = req.body;
    const {gender} = req.body

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "fazer uma redação sobre " + prompt,
        max_tokens: 2048,
        temperature: gender
    });
    res.send(completion.data.choices[0].text)
});

app.listen(PORT, () => console.log(`Sever runnig on port: ${PORT}`));