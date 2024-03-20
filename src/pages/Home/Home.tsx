
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Home</h1>
            <h3>Ejemplo para cambiar rutas</h3>
            <Link to={"/search/producto1"}>
                <button style={{ backgroundColor: "grey", width: "300px", padding: "10px" }} >Cambiar</button>
            </Link>
        </div>
    )
}
