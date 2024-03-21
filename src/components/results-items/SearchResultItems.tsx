import stylesItems from "./items.module.css"
import "./slider.css"
import { Link } from "react-router-dom";
import ml from "../../images/mercado-libre-logo.webp";
import Carousel from "nuka-carousel";



type Pictures = {
    id: string,
    max_size: string
    quality: string
    secure_url: string,
    size: string,
    url: string
}
type ProductType = {
    id: number
    title: string,
    picture?: string,
    pictures?: Pictures[],
    attributes?: [],
    warranty?: string,
    permalink?: string,
    price: string,
    isItems: boolean
}


function ResultItems({ id, title, picture, pictures, price, attributes, isItems, warranty, permalink }: ProductType) {

    const formattedPrice = price ? parseFloat(price).toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }) : 'Precio no disponible';
    return (
        <>
            {isItems ? ( // Muestra todos los items (resultado de la busqueda)
                <main className={stylesItems["result-container"]}>
                    <Link to={`/item/${id}`}>
                        {picture ? (
                            <img src={picture} alt="image" className={stylesItems["div-container_img"]} />
                        ) : (
                            <img src={ml} alt="image" className={stylesItems["div-container_img"]} />
                        )}
                    </Link>
                    <section className={stylesItems["data-container"]}>
                        {title ? (
                            <h2 className={stylesItems["div-container_title"]}>{title}</h2>
                        ) : (
                            <h1 className={stylesItems["div-container_title"]}>Sin titulo</h1>
                        )}
                        {price ? (
                            <span className={stylesItems["div-container_price"]}>{"$ " + formattedPrice}</span>
                        ) : (
                            <span className={stylesItems["div-container_price"]}>Precio no disponible</span>
                        )}
                    </section>
                </main>
            ) : ( //Muestra solamente el producto seleccionado
                <main className="product-container">
                    <section className="slider-container">
                        <Carousel
                            dragging={true}
                            autoplay={true}
                            speed={900}
                            renderCenterLeftControls={({ previousSlide }) => (
                                <button className="slider-button" onClick={previousSlide}>
                                    {"<"}
                                </button>
                            )}
                            renderCenterRightControls={({ nextSlide }) => (
                                <button className="slider-button" onClick={nextSlide}>
                                    {">"}
                                </button>
                            )}
                            className="carousel"
                        >
                            {pictures && pictures.length > 0 ? (
                                pictures.map((imgUrl, index) => {
                                    return <img key={index} src={imgUrl.url} alt="image" className="carrousel-image" />
                                })
                            ) : (
                                <img src={ml} alt="image" className="div-container_img" />
                            )
                            }
                        </Carousel>
                    </section>
                    <section>
                        <div className="container-text-desc">
                            {title ? (
                                <h2 className="product-title">{title}</h2>
                            ) : (
                                <h1 >Sin titulo</h1>
                            )}
                            {warranty ? (
                                <span className="product-warranty">{warranty}</span>
                            ) : (
                                <span className="product-warranty">Sin garantía</span>
                            )}
                            {price ? (
                                <span className="product-price">{"$ " + formattedPrice}</span>
                            ) : (
                                <span>Precio no disponible</span>
                            )}
                        </div>
                        <div className="div-button-container">
                            <a style={{ width: "100%" }} href={permalink}>
                                <button className="button-comprar">Comprar</button>
                            </a>
                        </div>
                        <section>
                            <h3>Todo lo que tenes que saber sopre el producto</h3>
                            <div className="attributes">
                                {attributes ? (
                                    <ul className="product-ul">{
                                        attributes.map((att: any, index) => {
                                            const addClassname = index % 2 === 0 ? "par" : "impar";
                                            return (
                                                <li key={index} className={`product-li ${addClassname}`} >
                                                    <span className="span-name-attribute">{att.name}</span>: <span className="span-value-attribute">{att.value_name}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                ) : (
                                    <span >informacion no disponible</span>
                                )}
                            </div>
                        </section>
                    </section>
                </main >
            )
            }
        </>
    )
}
export { ResultItems }
