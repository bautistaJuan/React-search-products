import stylesItems from "./items.module.css"
function ResultItems(props: any) {
    const formattedPrice = props.price ? parseFloat(props.price).toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }) : 'Precio no disponible';
    return (
        <div className={stylesItems["result-container"]}>
            <img src={props.picture} alt="image" className={stylesItems["div-container_img"]} />
            <div className={stylesItems["data-container"]}>
                <h1 className={stylesItems["div-container_title"]}>{props.title}</h1>
                {props.price ? (
                    <h2 className={stylesItems["div-container_price"]}>{"$ " + formattedPrice}</h2>
                ) : (
                    <h2 className={stylesItems["div-container_price"]}>Precio no disponible</h2>
                )}
            </div>
        </div>
    )
}
export { ResultItems }
