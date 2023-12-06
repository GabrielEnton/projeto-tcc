import React, { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Copy from "../components/Copy";

export default function Text() {
    const [prompt, setPrompt] = useState("");
    const [gender, setGender] = useState(0.2);
    const [key, setKey] = useState("");
    const [response, setResponse] = useState("");
    const [removeLoading, setRemoveLoading] = useState(true);
    const HTTP = "http://localhost:8020/";

    const handleSubmit = (e) => {
        setRemoveLoading(false)
        e.preventDefault();
        axios
            .post(`${HTTP}`, { prompt, gender, key })
            .then((res) => {
                setResponse(res.data)
                setRemoveLoading(true)

            })
            .catch((error) => {
                console.log(error);
            });
    }

    const heandlePrompt = (e) => setPrompt(e.target.value);

    const activateActions = (e) => {
        setKey("text")
        if (response !== "") {
            setResponse("")
        }
    }

    return (
        <section className="page-text">
            <div className="description">
                <h1 className="description__text">Deixe a <span>INTELIGÊNCIA ARTIFICIAL</span> fazer o texo para você</h1>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__input">
                    <input
                        required
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
                <button
                    className="form__btn"
                    type="submit"
                    onClick={activateActions}
                >Gerar texto</button>
            </form>
            <div className="result" >
                <Copy response={response} />
                {!removeLoading && <Loading />}
                {response}

            </div>
        </section>
    );
}