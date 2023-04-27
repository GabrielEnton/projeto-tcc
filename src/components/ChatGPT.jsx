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
            <h1> ChatGPT Teste</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={heandlePrompt}
                />
                <div>
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
            <div>{response}</div>
        </>
    );
}