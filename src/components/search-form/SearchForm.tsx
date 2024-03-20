import { FormEvent } from "react";
import styles from "./form.module.css"
import { Link, useNavigate } from "react-router-dom";

function SearchForm() {
    const navigate = useNavigate();
    const setTitle = (e: FormEvent | any) => {
        e.preventDefault();
        const title = e.target.text.value;
        if (title !== "") navigate("/search/" + title, { replace: true });
    }
    return (
        <>
            <form className={styles["form-container"]} onSubmit={setTitle}>
                <Link to="/" className={styles["form-container_nav-logo"]} />
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
