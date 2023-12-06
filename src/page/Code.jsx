import React, { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Copy from "../components/Copy";

export default function Text() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [removeLoading, setRemoveLoading] = useState(true);
    const HTTP = "http://localhost:8020/";

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${HTTP}`, { prompt })
            .then((res) => {
                setResponse(res.data)
                setRemoveLoading(true)

            })
            .catch((error) => {
                console.log(error);
            });
    }

    const heandlePrompt = (e) => setPrompt(e.target.value);
    const loadingActive = (e) => setRemoveLoading(false)

    return (
        <section className="page-code">
            <div className="description">
                <h1 className="description__text">Deixe a <span>INTELIGÊNCIA ARTIFICIAL</span> criar a pagina para você</h1>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__input">
                    <input
                        required
                        type="text"
                        value={prompt}
                        onChange={heandlePrompt}
                        placeholder="DIGITE COMO VOCÊ QUER O SEU HTML"
                    />
                </div>
                <div className="form__btns">
                    <section>
                        <button>Formulario</button>
                        <button>Cronometro</button>
                        <button>Calculadora</button>
                    </section>
                </div>

                <button
                    className="form__btn"
                    type="submit"
                    onClick={loadingActive}
                >Gerar HTML</button>
            </form>
            <div className="result">
                <Copy response={response} />
                {!removeLoading && <Loading />}
                <pre>
                    {response}
                </pre>
            </div>
        </section>
    );
}