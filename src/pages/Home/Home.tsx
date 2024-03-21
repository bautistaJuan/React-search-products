import "./home.css";
export default function Home() {
    return (
        <>
            <div className="container-presentation">
                <h1>Buscador de Mercadolibre por <span>Juan</span></h1>
                <div className="cpu-image"></div>
            </div>
            <div className="container-tools">
                <h2>Hecho con:</h2>
                <img className="img-react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" />
                <span>Y</span>
                <img className="img-typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
            </div>
        </>
    )
}
