import { Route, Routes } from "react-router-dom";
import Layout from '../components/layout/Layout';
import Home from '../pages/Home/Home';
import ViewProduct from "../pages/product/ViewProduct"
import ItemPage from "../pages/item/Item";
export default function AppRoutes() {
    return (
        <Routes >
            <Route
                path="/"
                element={<Layout />}
            >
                <Route index element={<Home />} />
                <Route path='/search/:query' element={<ViewProduct />} />
                <Route path="/item/:itemId" element={<ItemPage />}></Route>
            </Route>
        </Routes>
    );
}


