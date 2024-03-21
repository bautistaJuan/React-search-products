import "./home.css";
export default function Home() {
    return (
        <div className="home-container">
            <div className="container-presentation">
                <h1 className="title">Buscador de Mercadolibre  <span className="juan">por Juan</span></h1>
                <div className="cpu-image"></div>
            </div>
            <div className="container-tools">
                <h2 className="title h2">Hecho con:</h2>
                <img className="img-react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" />
                <img className="img-typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
            </div>
        </div>
    )
}
