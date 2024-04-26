import "./home.css";
import github from "../../images/github-vector.png"
import linkeind from "../../images/linkedin.png"
import portfolio from "../../images/espionaje.png"
export default function Home() {
    return (
        <div className="home-container">
            <h1 className="title">Buscador de Mercadolibre  <span className="juan">por Juan</span></h1>
            <div className="content">
                <div className="container-tools">
                    <h2 className="title h2">Hecho con:</h2>
                    <div className="tools">
                        <img className="img-react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" />
                        <img className="img-typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                    </div>
                </div>
                <div className="links">
                    <a href="https://github.com/bautistaJuan" className="contact">
                        <img src={github} alt="GitHub" />
                        <span>GITHUB</span>
                    </a>
                    <a href="https://www.linkedin.com/in/juanbautista-dev/" className="contact">
                        <img src={linkeind} alt="Linkeind" />
                        <span>Linkeind</span>
                    </a>
                    <a href="https://porfolio-two-dusky.vercel.app/" className="contact">
                        <img src={portfolio} alt="Porfolio" />
                        <span>Porfolio</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
