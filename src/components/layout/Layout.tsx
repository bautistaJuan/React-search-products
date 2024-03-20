import { Outlet } from "react-router-dom"
import { SearchForm } from "../../components/search-form/SearchForm";

export default function Layout() {
    return (
        <div>
            <SearchForm />
            <article>
                <Outlet />
            </article>
        </div>
    )
}
