import React, { useState } from "react";
import axios from "axios";

export default function ChatGPT() {
    const [prompt, setPrompt] = useState("");
    const [gender, setGender] = useState("");
    const [response, setResponse] = useState("");
    const HTTP = "http://localhost:8020/chat";

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${HTTP}`, { prompt, gender })
            .then((res) => setResponse(res.data))
            .catch((error) => {
                console.log(error);
            });
    }
    
    const heandlePrompt = (e) => setPrompt(e.target.value);

    return (
        <>
            <div className="description">
                <h1 className="description__text">Deixe a <span>INTELIGÊNCIA ARTIFICIAL</span> fazer o trabalho pesado para você</h1>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__input">
                <input
                    type="text"
                    value={prompt}
                    onChange={heandlePrompt}
                    placeholder="DIGITE UM TEMA OU 5 PALAVRAS"
                />
                </div>
                <div className="form__radio">
                    <span>Criatividade do texto:</span>
                    <label htmlFor="Biaxo">
                        <input
                            type="radio"
                            label="Biaxo"
                            checked={gender === 0.2}
                            value={0.2}
                            onClick={() => setGender(0.2)}
                        />
                        Baixo
                    </label>
                    <label htmlFor="Medio">
                        <input
                            type="radio"
                            label="Medio"
                            checked={gender === 0.5}
                            value={0.5}
                            onClick={() => setGender(0.5)}
                        />
                        Médio
                    </label>
                    <label htmlFor="Alto">
                        <input
                            type="radio"
                            label="Medio"
                            checked={gender === 0.8}
                            value={0.8}
                            onClick={() => setGender(0.8)}
                        />
                        Alta
                    </label>
                </div>
            </form>
            <div className="result">{response}</div>
        </>
    );
}