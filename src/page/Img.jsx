import React, { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

export default function Img() {
    const [prompt, setPrompt] = useState("");
    const [key, setKey] = useState("");
    const [response, setResponse] = useState("");
    const [removeLoading, setRemoveLoading] = useState(true);
    const HTTP = "http://localhost:8020/chat";

    const handleSubmit = (e) => {


        e.preventDefault();
        axios
            .post(`${HTTP}`, { prompt, key })
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
        <section className="page-img">
            <div className="description">
                <h1 className="description__text">Deixe a <span>INTELIGÊNCIA ARTIFICIAL</span> fazer as imagens para você</h1>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__input">
                    <input
                        type="text"
                        value={prompt}
                        onChange={heandlePrompt}
                        placeholder="DIGITE UM TEMA OU PALAVRA"
                    />
                </div>
                <div className="form__radio">
                    <span>Tamanho maximo da imagem 1024 x 1024</span>
                </div>

                <button
                    className="form__btn"
                    type="submit"
                    onClick={() => setKey("img")}
                    checked={key === "img"}
                    value={"img"}
                >Gerar imagem</button>
            </form>
            <div className="result">
                {!removeLoading && <Loading />}    
                <img src={response} alt="" />
            </div>
        </section>
    );
}