import { FormEvent } from "react";
import styles from "./form.module.css"
function SearchForm(props: any) {
    const setTitle = (e: FormEvent | any) => {
        e.preventDefault();
        const title = e.target.text.value;
        // Si existe title, este sera enviado a App a traves de su props
        // Y eso sucede cuando hacemos click en "Search"
        if (title) {
            props.onSearch(title)
        }
    }
    return (
        <>
            <form className={styles["form-container"]} onSubmit={setTitle}>
                <a className={styles["form-container_nav-logo"]} href="/"></a>
                <div className={styles["form-container_div"]}>
                    <input className={styles["form-container_input"]} type="text" name="text" placeholder="Buscar aqui.." autoComplete="off" autoFocus />
                    <button className={styles["form-container_search-btn"]}>
                        <img className={styles["form-container_search-btn_img"]} src="https://cdn-icons-png.flaticon.com/512/482/482631.png" />
                    </button>
                </div>
            </form>
        </>
    )
}
export { SearchForm }
