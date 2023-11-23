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
    const { prompt } = req.body;
    const { gender } = req.body
    const { key } = req.body

    if (key === "img") {
        const image = await openai.createImage({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });

        res.send(image.data.data[0].url);
        return;
    } else if(key === "text") {
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
    } else  {
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [
                {
                    role: "user",
                    content: prompt + "Mostra somente o html"
                }
            ],
            max_tokens: 2048,
            temperature: 0.8
        });

        res.send(completion.data.choices[0].message.content);

    }

});

app.listen(PORT, () => console.log(`Sever runnig on port: ${PORT}`));