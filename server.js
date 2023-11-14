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

    const completion = openai.createChatCompletion({
        model: "gpt-4",
        messages: [
            {
                role: "user",
                content: "Gere um texto pra mim sobre" + prompt
            }
        ],
        max_tokens: 2048,
        temperature: gender
    });

    completion.then((result) => {
        res.send(result.data.choices[0].message.content)
    }).catch((err) => {
        console.log(err)
    })

});

app.listen(PORT, () => console.log(`Sever runnig on port: ${PORT}`));